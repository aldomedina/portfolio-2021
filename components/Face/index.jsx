import { useEffect } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';
import GLTFLoader from 'three-gltf-loader';
import useAnimationFrame from '../Hooks/useAnimationFrame';
const Container = styled.div`
  height: 100%;
`;
export default function Face({ aboutOpen }) {
  let requestID,
    el,
    scene,
    camera,
    renderer,
    effect,
    mouseX = 0,
    mouseY = 0;

  useEffect(() => {
    sceneSetup();
    addCustomSceneObjects();
    window.addEventListener('mousemove', getMousePos);
    startAnimationLoop();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', getMousePos);
      window.cancelAnimationFrame(requestID);
    };
  }, []);

  const sceneSetup = () => {
    console.log('init!');
    // get container dimensions and use them for scene sizing
    const width = window.innerWidth > 768 ? window.innerWidth / 2 : window.innerWidth;
    const height = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.z = 20;
    camera.position.x = 0;
    camera.position.y = 0;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    effect = new AsciiEffect(renderer, ' .,:;|iI+hHOE#`S', { invert: true });
    effect.setSize(width, height);
    effect.domElement.style.color = 'white';
    effect.domElement.style.position = 'fixed';
    effect.domElement.style.top = '0';

    el.appendChild(effect.domElement);
  };

  const addCustomSceneObjects = () => {
    const loader = new GLTFLoader();

    loader.load(
      '/scene.glb',
      function (gltf) {
        scene.add(gltf.scene);
      },
      xhr => {},
      error => {
        // called when loading has errors
        console.error('An error happened', error);
      }
    );

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1);
    lights[1] = new THREE.PointLight(0xffffff, 0.7);

    lights[0].position.set(500, 500, 500);
    lights[1].position.set(-500, -500, -500);

    scene.add(lights[0]);
    scene.add(lights[1]);
    // scene.add(lights[2]);
  };

  const startAnimationLoop = () => {
    if (camera.position.x < 10 && camera.position.x > -10) {
      camera.position.x -= (mouseX + camera.position.x) * 0.0003;
    } else if (camera.position.x > 10) {
      camera.position.x -= 0.005;
    } else if (camera.position.x < -10) {
      camera.position.x += 0.005;
    }

    if (camera.position.y < 10 && camera.position.y > -10) {
      camera.position.y += (mouseY - camera.position.y) * 0.0003;
    } else if (camera.position.y > 10) {
      camera.position.y -= 0.005;
    } else if (camera.position.y < -10) {
      camera.position.y += 0.005;
    }
    camera.lookAt(scene.position);
    effect.render(scene, camera);
    requestID = window.requestAnimationFrame(startAnimationLoop);
  };

  const handleWindowResize = () => {
    const width = window.innerWidth > 768 ? window.innerWidth / 2 : window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    effect.setSize(width, height);
    camera.aspect = width / height;

    camera.updateProjectionMatrix();
  };

  const getMousePos = e => {
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  };

  return <Container ref={ref => (el = ref)} />;
}
