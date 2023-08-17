import * as THREE from "three";
// Init the scene
const scene = new THREE.Scene();

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

// Add the cube to the scene

scene.add(mesh);

// Camera
// provide 2 params: field of view, aspect ratio

const fieldOfView = 75;
const sizes = { width: 800, height: 600 };
const aspectRatio = sizes.width / sizes.height;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio);

scene.add(camera);
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
camera.position.z = 1;
camera.position.x = 0;
camera.position.y = 1;
renderer.render(scene, camera);
