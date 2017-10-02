$(document).ready(function() {
  console.log('JQ');
  AOS.init({
    // startEvent: 'scroll',
    // duration: 1300,


  });
  // var camera, scene, renderer;
  // var geometry, material, mesh;
  //
  // init();
  // animate();
  //
  // function init() {
  //
  //   camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  //   camera.position.z = 1;
  //
  //   scene = new THREE.Scene();
  //
  //   geometry = new THREE.SphereGeometry(0.6, 0.3, 1);
  //   material = new THREE.MeshNormalMaterial();
  //
  //   mesh = new THREE.Mesh(geometry, material);
  //   scene.add(mesh);
  //
  //   renderer = new THREE.WebGLRenderer({
  //     antialias: true
  //   });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);
  //
  // }
  //
  // function animate() {
  //
  //   requestAnimationFrame(animate);
  //
  //   mesh.rotation.x += 0.01;
  //   mesh.rotation.y += 0.02;
  //
  //   renderer.render(scene, camera);
  //
  // }



}); //end on ready
console.log('JS');


// Nav Function

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
//end nav


// my map
