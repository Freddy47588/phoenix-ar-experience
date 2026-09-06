(() => {
  "use strict";
  const $ = (selector) => document.querySelector(selector);
  const ui = { start: $("#start-screen"), startButton: $("#start-button"), root: $("#scene-root"), template: $("#ar-scene-template"), toolbar: $("#ar-toolbar"), statusCard: $(".status-card"), status: $("#tracking-status"), mute: $("#mute-button"), fullscreen: $("#fullscreen-button"), loading: $("#loading"), loadingText: $("#loading-message"), error: $("#error-message"), dialog: $("#marker-dialog"), close: $("#close-marker") };
  let markerVisible = false, muted = false, audioBlocked = false, soundEntity;
  const showError = (message) => { ui.loading.hidden = true; ui.error.textContent = message; ui.error.hidden = false; };
  const setStatus = (message, detected = false) => { ui.status.textContent = message; ui.statusCard.classList.toggle("is-detected", detected); };
  function handleAudioBlock(error) { audioBlocked = true; console.warn("Phoenix audio playback was blocked:", error); ui.mute.textContent = "🔇"; ui.mute.setAttribute("aria-label", "Enable Phoenix audio"); }
  function playAudio() {
    if (muted || !markerVisible || !soundEntity?.components?.sound) return;
    try { const result = soundEntity.components.sound.playSound(); if (result?.catch) result.catch(handleAudioBlock); audioBlocked = false; } catch (error) { handleAudioBlock(error); }
  }
  function stopAudio() { soundEntity?.components?.sound?.stopSound(); }
  function bindScene(scene) {
    const marker = scene.querySelector("#phoenix-marker"), phoenix = scene.querySelector("#phoenix"), model = scene.querySelector("#phoenix-model"); soundEntity = scene.querySelector("#phoenix-audio");
    scene.addEventListener("loaded", () => { ui.loadingText.textContent = "Loading Phoenix..."; });
    phoenix.addEventListener("model-loaded", () => { ui.loading.hidden = true; });
    const handleModelError = (event) => { console.error("Phoenix model failed to load:", event); showError("The Phoenix could not be loaded. Check your connection and reload the page."); };
    model.addEventListener("error", handleModelError);
    phoenix.addEventListener("model-error", handleModelError);
    marker.addEventListener("markerFound", () => { markerVisible = true; setStatus("Phoenix detected", true); playAudio(); });
    marker.addEventListener("markerLost", () => { markerVisible = false; setStatus("Marker lost — point the camera at the marker"); stopAudio(); });
    phoenix.addEventListener("click", () => { phoenix.setAttribute("scale", "0.012 0.012 0.012"); setTimeout(() => phoenix.setAttribute("scale", "0.01 0.01 0.01"), 240); if (markerVisible && !muted && audioBlocked) playAudio(); });
    setTimeout(() => { if (!document.querySelector("video") && !ui.loading.hidden) showError("Camera access is required. Allow camera permission, then reload the page."); }, 12000);
  }
  function startAR() {
    if (!navigator.mediaDevices?.getUserMedia) return showError("This browser cannot access a camera. Try a current mobile browser over HTTPS.");
    ui.startButton.disabled = true; ui.start.classList.add("is-hidden"); ui.toolbar.hidden = false; ui.loading.hidden = false; ui.root.append(ui.template.content.cloneNode(true)); bindScene(ui.root.querySelector("a-scene"));
  }
  ui.startButton.addEventListener("click", startAR, { once: true });
  ui.mute.addEventListener("click", () => { muted = !muted; ui.mute.setAttribute("aria-pressed", String(muted)); ui.mute.setAttribute("aria-label", muted ? "Unmute Phoenix audio" : "Mute Phoenix audio"); ui.mute.textContent = muted ? "🔇" : "🔊"; muted ? stopAudio() : playAudio(); });
  document.querySelectorAll("[data-open-marker]").forEach((button) => button.addEventListener("click", () => ui.dialog.showModal()));
  ui.close.addEventListener("click", () => ui.dialog.close()); ui.dialog.addEventListener("click", (event) => { if (event.target === ui.dialog) ui.dialog.close(); });
  if (!document.fullscreenEnabled) ui.fullscreen.hidden = true;
  ui.fullscreen.addEventListener("click", async () => { try { document.fullscreenElement ? await document.exitFullscreen() : await document.documentElement.requestFullscreen(); } catch (error) { console.warn("Fullscreen unavailable:", error); showError("Fullscreen is not available in this browser."); } });
  document.addEventListener("fullscreenchange", () => ui.fullscreen.setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen"));
  window.addEventListener("camera-error", () => showError("Camera access is required. Allow camera permission, then reload the page."));
})();
