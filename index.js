import * as THREE from 'three';

// Canvas
const canvas = document.querySelector(`canvas.myWebGL3d`);

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Sizes
const sizes = {
  with: 800,
  height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.with / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

renderer.setSize(sizes.with, sizes.height);
// renderer.render(scene, camera);

// Animate
function animate() {
// const animate () => {
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
  
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()