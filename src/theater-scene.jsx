import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TheaterScene() {
  const host = useRef(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#120d0b');
    scene.fog = new THREE.FogExp2('#120d0b', 0.03);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 4.6, 15.5);
    camera.lookAt(0, 1.6, -1.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    element.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight('#aa8270', 1.2));
    const screenLight = new THREE.PointLight('#e68755', 34, 22, 1.4);
    screenLight.position.set(0, 3.5, -3.8);
    scene.add(screenLight);
    const aisleLight = new THREE.PointLight('#d6aa71', 45, 16, 2);
    aisleLight.position.set(0, 2.4, 3);
    scene.add(aisleLight);

    const floorMaterial = new THREE.MeshStandardMaterial({ color: '#221412', roughness: 0.78 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.14;
    floor.receiveShadow = true;
    scene.add(floor);

    const screen = new THREE.Group();
    const screenFrame = new THREE.Mesh(
      new THREE.BoxGeometry(8.25, 4.75, 0.3),
      new THREE.MeshStandardMaterial({ color: '#322019', roughness: 0.4, metalness: 0.22 }),
    );
    screenFrame.position.set(0, 3.15, -5.8);
    screenFrame.castShadow = true;
    screen.add(screenFrame);

    const projection = new THREE.Mesh(
      new THREE.PlaneGeometry(7.82, 4.34),
      new THREE.MeshBasicMaterial({ color: '#f0aa71' }),
    );
    projection.position.set(0, 3.17, -5.62);
    screen.add(projection);

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(8.15, 4.62),
      new THREE.MeshBasicMaterial({ color: '#a44b33', transparent: true, opacity: 0.12 }),
    );
    glow.position.set(0, 3.17, -5.58);
    screen.add(glow);
    scene.add(screen);

    const curtainMaterial = new THREE.MeshStandardMaterial({ color: '#651f1a', roughness: 0.94 });
    for (const side of [-1, 1]) {
      const curtain = new THREE.Mesh(new THREE.BoxGeometry(1.5, 8.2, 0.72), curtainMaterial);
      curtain.position.set(side * 5.05, 2.6, -5.45);
      curtain.castShadow = true;
      scene.add(curtain);
    }

    const seatMaterial = new THREE.MeshStandardMaterial({ color: '#751f20', roughness: 0.65 });
    const goldMaterial = new THREE.MeshStandardMaterial({ color: '#b88b56', metalness: 0.7, roughness: 0.34 });
    const seatGeometry = new THREE.BoxGeometry(0.76, 0.7, 0.63);
    const backGeometry = new THREE.BoxGeometry(0.76, 0.98, 0.25);
    const armGeometry = new THREE.BoxGeometry(0.13, 0.39, 0.55);
    const seats = new THREE.Group();
    for (let row = 0; row < 4; row += 1) {
      for (let column = -5; column <= 5; column += 1) {
        const x = column * 0.96 + (row % 2) * 0.16;
        const z = 0.5 + row * 1.45;
        const baseY = row * 0.28;
        const cushion = new THREE.Mesh(seatGeometry, seatMaterial);
        cushion.position.set(x, baseY + 0.53, z);
        cushion.castShadow = true;
        seats.add(cushion);

        const back = new THREE.Mesh(backGeometry, seatMaterial);
        back.position.set(x, baseY + 1.13, z + 0.2);
        back.castShadow = true;
        seats.add(back);

        for (const armSide of [-1, 1]) {
          const arm = new THREE.Mesh(armGeometry, goldMaterial);
          arm.position.set(x + armSide * 0.45, baseY + 0.69, z);
          seats.add(arm);
        }
      }
    }
    scene.add(seats);

    const aisle = new THREE.Mesh(
      new THREE.PlaneGeometry(1.05, 9),
      new THREE.MeshBasicMaterial({ color: '#b87752', transparent: true, opacity: 0.17 }),
    );
    aisle.rotation.x = -Math.PI / 2;
    aisle.position.set(0, -0.12, 5);
    scene.add(aisle);

    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.fov = width < 600 ? 42 : 34;
      camera.position.set(0, width < 600 ? 5.2 : 4.6, width < 600 ? 19 : 15.5);
      camera.lookAt(0, 1.6, -1.1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const sway = Math.sin(performance.now() * 0.00033) * 0.014;
      screen.rotation.y = sway;
      screenLight.intensity = 33 + Math.sin(performance.now() * 0.001) * 1.4;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return <div aria-label="A three-dimensional view inside a cinema auditorium" className="theater-scene" ref={host} />;
}