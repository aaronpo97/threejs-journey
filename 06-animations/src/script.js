import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const group = new THREE.Group();
// Object 1
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
mesh.position.x = 1;
group.add(mesh);

// Object 2
const mesh2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
mesh2.position.x = -1;

group.add(mesh2);

scene.add(group);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // Update objects
  mesh.rotation.y = elapsedTime * 3;
  mesh.rotation.x = elapsedTime * 3;
  mesh.position.y = Math.sin(elapsedTime);

  mesh2.rotation.y = -(elapsedTime * 3);
  mesh2.rotation.x = -(elapsedTime * 3);
  mesh2.position.y = Math.cos(elapsedTime);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
