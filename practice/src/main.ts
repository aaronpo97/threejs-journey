import * as THREE from "three";

// Canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth / 1.25,
  height: window.innerHeight / 1.25,
};

/**
 * Objects
 */

const group = new THREE.Group();
group.position.y = -1;
group.rotation.y = 1;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const shape2 = new THREE.Mesh(
  new THREE.DodecahedronGeometry(1, 0),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

shape2.position.x = -2;
shape2.rotation.y = Math.PI / 2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;

group.add(cube1, shape2, cube3);
scene.add(group);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
