# 🔥 Phoenix WebAR

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=111) ![A--Frame](https://img.shields.io/badge/A--Frame-1.7.0-EF2D5E) ![AR.js](https://img.shields.io/badge/AR.js-3.4.7-ff7a28) ![WebAR](https://img.shields.io/badge/WebAR-marker--based-6f42c1)

**Phoenix WebAR** is a lightweight marker-based augmented reality experience that brings an animated Phoenix to life directly in the browser using A-Frame and AR.js. No application installation is required—open it in a compatible mobile browser, allow camera access, and scan the marker.

## ✨ Overview

This portfolio project demonstrates a deliberately small WebAR architecture with a polished mobile interface. Pattern tracking anchors an animated GLTF Phoenix to a physical marker while detection events coordinate the interface and sound.

## 🎯 Features

- 🔥 Animated Phoenix 3D model with floating and rotating motion
- 📱 Browser-based, mobile-first WebAR
- 🎯 AR.js pattern marker tracking and live detection status
- 🔊 Marker-triggered Phoenix audio with mute control
- 👆 Tap interaction with a brief visual response
- 🖼️ Marker preview and download panel
- ⛶ Fullscreen control where supported
- ⚡ Framework-free HTML, CSS, and vanilla JavaScript
- ♿ Large controls, useful labels, responsive layout, and reduced-motion support

## 🛠️ Tech Stack

- HTML5 and CSS3
- Vanilla JavaScript
- [A-Frame 1.7.0](https://aframe.io/)
- [AR.js 3.4.7](https://ar-js-org.github.io/AR.js-Docs/)
- [A-Frame Extras 7.5.4](https://github.com/c-frame/aframe-extras)
- GLTF/GLB-compatible 3D assets and pattern markers

## 🧩 How It Works

The camera is requested only after **Start AR** is selected. AR.js looks for the custom Phoenix pattern. When found, the marker reveals the animated model and starts its sound; losing the marker hides the model and stops playback. The overlay mirrors this tracking state automatically.

## 📁 Project Structure

```text
.
├── index.html
├── src/
│   ├── app.js
│   └── styles.css
├── assets/
│   ├── audio/
│   ├── images/
│   ├── markers/
│   └── models/
├── README.md
├── LICENSE
└── .gitignore
```

## 🚀 Getting Started

Camera APIs require a secure context. Serve the project over HTTPS in production; `localhost` is accepted for local development.

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Opening `index.html` directly with a `file://` URL is not recommended.

## 📱 How to Use

1. Open the site on a current mobile browser.
2. Select **View AR marker** and display or print the marker on another surface.
3. Select **Start AR** and allow camera access.
4. Point the camera at the entire marker in good, even lighting.
5. Tap the Phoenix for a brief reaction; use the toolbar to control audio, help, or fullscreen.

## 🖼️ AR Marker

The existing project marker is shown below. Keep the full border visible and avoid glare.

![Phoenix AR pattern marker](assets/markers/pattern-phoenix.png)

[Download the Phoenix marker](assets/markers/pattern-phoenix.png)

## 🎬 Demo

A hosted demo URL can be added here after deployment. GitHub Pages or another static HTTPS host is sufficient.

## 📸 Screenshots

Documentation screenshots can be added to `assets/images/` for:

- Start AR interface
- Marker scanning interface
- Phoenix detected in AR

<!-- Add real screenshots here after testing on a physical device. -->

## ⚡ Performance Notes

Assets are preloaded once the AR session begins. The interaction uses a short CSS visual effect, and the experience adds no application framework or screenshot dependency. For best tracking and performance, use a well-lit marker and close unnecessary browser tabs.

## 🌐 Browser Support

Use a current Chrome or Safari release on a camera-equipped Android or iOS device. Camera permission and HTTPS are required. Fullscreen availability varies by browser, and the control is hidden when the Fullscreen API is unavailable.

## 🎨 3D Asset Attribution

The Phoenix is based on [“phoenix bird”](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042) by [NORBERTO-3D](https://sketchfab.com/norberto3d), licensed under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).

The original model attribution is preserved in [`assets/models/license.txt`](assets/models/license.txt). The repository author does not claim authorship of the model.

## 📄 License

Project code is available under the [MIT License](LICENSE). The Phoenix 3D model remains subject to its separate CC BY 4.0 attribution and license terms.
