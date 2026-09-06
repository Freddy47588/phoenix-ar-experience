# 🔥 Phoenix WebAR

**Phoenix WebAR** is a lightweight marker-based augmented-reality experience built with HTML, CSS, vanilla JavaScript, A-Frame, and AR.js. It brings an animated Phoenix into the browser without an app install.

## 🚀 Live Demo

Experience Phoenix WebAR: [freddy47588.github.io/phoenix-ar-experience](https://freddy47588.github.io/phoenix-ar-experience/)

A current mobile browser is recommended for AR. Camera access requires HTTPS and a marker; the 3D Preview works without either.

## ✨ Features

- 🔥 Animated Phoenix GLTF model
- 📱 Browser-based marker WebAR with AR.js
- 🎯 Pattern-marker tracking with found/lost status
- 🔊 Marker-triggered audio and mute control
- 👆 Tap reaction, drag rotation, and pinch scaling in AR
- 🖥️ Camera-free 3D preview with drag, pinch/scroll zoom, and reset
- 📱 Desktop QR launcher for the live mobile experience
- 🖼️ Marker preview and download
- ⛶ Fullscreen where supported
- ♿ Accessible controls, focus states, live status, safe-area layout, and reduced-motion support

## How to use

### AR Mode

1. Open the [live demo](https://freddy47588.github.io/phoenix-ar-experience/).
2. View or download the marker.
3. Select **Start AR** and allow camera access.
4. Point the camera at the complete marker in even light.
5. Tap the Phoenix, drag to rotate it, or pinch to scale it.

### 3D Preview Mode

1. Open the live demo.
2. Select **Preview Phoenix in 3D**.
3. Drag horizontally to rotate.
4. Pinch or use the mouse wheel to zoom.
5. Use **Reset view** or close the preview when finished.

## Project structure

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

## AR marker

Keep the entire marker visible and avoid glare.

![Phoenix AR pattern marker](assets/markers/pattern-phoenix.png)

[Download the Phoenix marker](assets/markers/pattern-phoenix.png)

## Screenshots

Real documentation screenshots can be added later to `assets/images/` as `start-screen.png`, `desktop-launcher.png`, `3d-preview.png`, and `ar-detected.png`. They are intentionally not referenced until real captures exist.

## Development

Serve the project from a local web server. `localhost` is accepted for camera access during development.

```bash
python -m http.server 8000
```

## Browser notes

Use a current Chrome or Safari release on a camera-equipped mobile device for AR. Fullscreen behavior varies by browser. The GLTF contains one animation clip (`Take 001`), which is used in both modes. AR screenshots are intentionally not included: camera/video and WebGL compositing can be blocked or incomplete depending on browser security behavior.

## Performance

Model and audio assets are requested only after choosing AR or Preview, so the landing screen does not preload the Phoenix. The current MP3 is approximately 4.1 MB; re-encoding it to an appropriate lower-bitrate AAC/MP3 is recommended only after listening tests.

## 3D asset attribution

The Phoenix is based on [“phoenix bird”](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042) by [NORBERTO-3D](https://sketchfab.com/norberto3d), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Full attribution remains in [`assets/models/license.txt`](assets/models/license.txt).

## License

Project code is available under the [MIT License](LICENSE). The Phoenix model remains subject to its separate CC BY 4.0 license.
