import * as THREE from 'three'; // Matthew Miguel Fanlo A225
const scene = new THREE.Scene();

//main room (studio)
const roomGeometry = new THREE.BoxGeometry(5, 4, 5);
const roomMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
const room = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(room);

//function to create a bed box
function createBed() {
    const bedGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x0047AB }); //color
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(0, 0.1, -1); // Position the bed
    room.add(bed);
}
createBed(); //to make the function work
//function to create a second bed box layer for a spring
function createBed1() {
    const bedGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
    const bedMaterial = new THREE.MeshBasicMaterial({ color: 0xE4D00A }); 
    const bed = new THREE.Mesh(bedGeometry, bedMaterial);
    bed.position.set(0, 0, -1);
    room.add(bed);
}
createBed1();
//function to create a pillow
function createPillow() {
    const pillowGeometry = new THREE.BoxGeometry(0.6, 0.2, 0.5);
    const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0x355E3B });
    const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
    pillow.position.set(-0.2, 0.2, -1.6); 
    room.add(pillow);
}
createPillow();
// Function to create a chair
function createChair() {
    const chairSeatGeometry = new THREE.BoxGeometry(0.5, 0.05, 0.5);
    const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x84513 }); // color for the seat
    const chairSeat = new THREE.Mesh(chairSeatGeometry, chairMaterial);
    
    chairSeat.position.set(-1.8, 0.3, -1.8); // Adjust the position based on the side table's position

    const legGeometry = new THREE.BoxGeometry(0.05, 0.4, 0.05);
    const legMaterial = new THREE.MeshBasicMaterial({ color: 0x1F6521 }); // color for the legs

    //four legs and position them
    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    leg1.position.set(-2.05, 0.1, -2.05); //leg

    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(-1.55, 0.1, -2.05);

    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    leg3.position.set(-2.05, 0.1, -1.55);

    const leg4 = new THREE.Mesh(legGeometry, legMaterial);
    leg4.position.set(-1.55, 0.1, -1.55);

    room.add(chairSeat, leg1, leg2, leg3, leg4);
}
createChair();

function createBolster() {//tanday - leg hug - bolster
    const bolsterGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.8, 32); // cylindrical shape
    const bolsterMaterial = new THREE.MeshBasicMaterial({ color: 0xC0C0C0 }); 
    const bolster = new THREE.Mesh(bolsterGeometry, bolsterMaterial);
    
    bolster.position.set(0.4, 0.2, -0.5);
    
    bolster.rotation.x = Math.PI / 2;  // Rotate on X-axis to make it horizontal
    
    room.add(bolster);
}
createBolster();

function createSideTable() {
    const tableGeometry = new THREE.BoxGeometry(0.5, 0.4, 0.5); 
    const tableMaterial = new THREE.MeshBasicMaterial({ color: 0xA0522D }); 
    const sideTable = new THREE.Mesh(tableGeometry, tableMaterial);
    sideTable.position.set(-1, 0.1, -1.8); 
    room.add(sideTable);
}
createSideTable(); 

function createTv() {
    const TvGeometry = new THREE.PlaneGeometry(2, 1, ); // Tv
    const TvMaterial = new THREE.MeshBasicMaterial({ color: 0x353935, side: THREE.DoubleSide }); 
    const Tv1 = new THREE.Mesh(TvGeometry, TvMaterial);
    
    // Position the Tv
    Tv1.position.set(-0.01, 1, 2); 
    
    room.add(Tv1);
}
createTv();
//function to create a Cup
function createCup() {

    const CupGeometry = new THREE.ConeGeometry(0.1, 0.3);
    const CupMaterial = new THREE.MeshBasicMaterial({ color: 0x4169E1 }); // Color
    const Cup = new THREE.Mesh(CupGeometry, CupMaterial);
    Cup.position.set(-1, 0.3, -1.8); // Position the Cup
    Cup.rotation.x = Math.PI; 
    room.add(Cup);
}
createCup(); 

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//main camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 7); //position the of the camera

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//animation loop
function animate() {
    requestAnimationFrame(animate);
    room.rotation.y -= 0.0021; 
    renderer.render(scene, camera);
}

animate();
