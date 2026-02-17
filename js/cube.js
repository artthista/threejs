const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const corHex1 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
const corHex2 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
const corHex3 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
const corHex4 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '2');
const corHex5 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '1');
const corHex6 = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '5');

const materials = [
    new THREE.MeshBasicMaterial({ color: corHex1 }),
    new THREE.MeshBasicMaterial({ color: corHex5 }),
    new THREE.MeshBasicMaterial({ color: corHex2 }),
    new THREE.MeshBasicMaterial({ color: corHex3 }),
    new THREE.MeshBasicMaterial({ color: corHex6 }),
    new THREE.MeshBasicMaterial({ color: corHex4 }), 
];
const geometry = new THREE.BoxGeometry( 1, 1, 10 );
//const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, materials);
cube.scale.x = 1;
cube.scale.y = 2;
cube.scale.z = 0.1;
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();