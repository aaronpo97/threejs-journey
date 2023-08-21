import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const SIZES = { width: 800, height: 600 };
const CAMERA_CONFIG = {
  fov: 75,
  aspectRatio: SIZES.width / SIZES.height,
  near: 0.1,
  far: 100,
};
const { fov, aspectRatio, near, far } = CAMERA_CONFIG;

/** Create a canvas element and add it to the DOM. */
const canvas = document.createElement("canvas");
canvas.classList.add("webgl");
document.body.appendChild(canvas);

const fog = new THREE.Fog(0x000000, 0, 60);

/**
 * Create a scene.
 *
 * The scene is used to store and manage objects in a 3D space.
 *
 * @see https://threejs.org/docs/#api/en/scenes/Scene
 */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x262837);
scene.fog = fog;



/**
 * Create a BoxGeometry for the mesh.
 *
 * The geometry is used to define the shape of the object.
 *
 * @see https://threejs.org/docs/#api/en/geometries/BoxGeometry
 */
const geometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);

/**
 * Create a MeshBasicMaterial for the mesh.
 *
 * The material is used to define how the surface of the object looks.
 *
 * @see https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
 */
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

/**
 * Create a mesh using the geometry and material.
 *
 * Add the mesh to the scene.
 *
 * @see https://threejs.org/docs/#api/en/objects/Mesh
 */
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Set up the camera with specified configuration parameters.
 *
 * @see https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
 */
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Create and setup OrbitControls for the camera.
 *
 * Enables the camera to be controlled using mouse and touch events.
 *
 * @see https://threejs.org/docs/#examples/en/controls/OrbitControls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Create a WebGLRenderer and set its size to match the canvas element.
 *
 * @see https://threejs.org/docs/#api/en/renderers/WebGLRenderer
 */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(SIZES.width, SIZES.height);

/**
 * Renders the scene and updates camera controls.
 *
 * This function is called in a loop using requestAnimationFrame.
 *
 * @see https://threejs.org/docs/#api/en/renderers/WebGLRenderer.render
 * @see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 */
function tick() {
  renderer.render(scene, camera);
  controls.update();
  window.requestAnimationFrame(tick);
}

tick();
