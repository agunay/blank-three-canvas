import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const properties = {
    backgroundColour: "#e1e2dc"
};

// Setup
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height)
});

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(4, 3, 4);
camera.lookAt(new THREE.Vector3(0,0,0));
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(new THREE.Color(properties.backgroundColour));
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.minDistance = 1;
controls.maxDistance = 10;
controls.update();

//GLTF Import
// const gltfLoader = new GLTFLoader();
// gltfLoader.load('models/<name_of_the_model>', (gltf) => {
//     console.log(gltf);
//     scene.add(gltf.scene);
// });

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Frame animation
const tick = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();
