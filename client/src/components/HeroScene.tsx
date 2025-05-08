import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a group for all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create floating cubes with different colors
    const cubeColors = [0x0984E3, 0x00B894, 0x6C5CE7, 0xFD79A8];
    const cubes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 25; i++) {
      const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const material = new THREE.MeshPhongMaterial({ 
        color: cubeColors[Math.floor(Math.random() * cubeColors.length)],
        transparent: true,
        opacity: 0.7,
        shininess: 100
      });
      
      const cube = new THREE.Mesh(geometry, material);
      
      // Random positions in the scene
      cube.position.x = (Math.random() - 0.5) * 10;
      cube.position.y = (Math.random() - 0.5) * 10;
      cube.position.z = (Math.random() - 0.5) * 5;
      
      // Add some rotation
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      
      group.add(cube);
      cubes.push(cube);
    }
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Add point lights with different colors
    const pointLight1 = new THREE.PointLight(0x0984E3, 1, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x00B894, 1, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the entire group
      group.rotation.y += 0.001;
      group.rotation.x += 0.0005;
      
      // Animate each cube individually
      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01 * (i % 3 === 0 ? 1 : -1);
        cube.rotation.y += 0.01 * (i % 2 === 0 ? 1 : -1);
        
        // Add some floating movement
        cube.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      cubes.forEach(cube => {
        cube.geometry.dispose();
        (cube.material as THREE.Material).dispose();
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 opacity-70"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default HeroScene;