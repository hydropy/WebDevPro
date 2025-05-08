import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
    camera.position.z = 3;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(60, 60); // Small size for the logo
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a custom "W" shape using lines
    const lineGroup = new THREE.Group();
    
    // Function to create a line with a specific color
    const createLine = (points: THREE.Vector3[], color: number) => {
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color, 
        linewidth: 2,
        linecap: 'round',
        linejoin: 'round'
      });
      return new THREE.Line(geometry, material);
    };
    
    // W shape for "Web"
    const wPoints = [
      new THREE.Vector3(-0.7, 0.5, 0),
      new THREE.Vector3(-0.4, -0.5, 0),
      new THREE.Vector3(0, 0.2, 0),
      new THREE.Vector3(0.4, -0.5, 0),
      new THREE.Vector3(0.7, 0.5, 0)
    ];
    
    // D shape for "Dev"
    const dPoints = [
      new THREE.Vector3(-0.7, -0.7, 0),
      new THREE.Vector3(-0.7, 0.7, 0),
      new THREE.Vector3(0, 0.7, 0),
      new THREE.Vector3(0.5, 0.4, 0),
      new THREE.Vector3(0.5, -0.4, 0),
      new THREE.Vector3(0, -0.7, 0),
      new THREE.Vector3(-0.7, -0.7, 0)
    ];
    
    // Create the W and D lines with different colors
    const wLine = createLine(wPoints, 0x0984E3); // Blue
    const dLine = createLine(dPoints, 0x00B894);  // Teal
    
    // Add lines to the group
    lineGroup.add(wLine);
    lineGroup.add(dLine);
    
    // Position the D behind the W
    dLine.position.z = -0.5;
    dLine.position.x = 0.1;
    
    // Add group to scene
    scene.add(lineGroup);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the logo gently
      lineGroup.rotation.y = Math.sin(Date.now() * 0.001) * 0.3;
      lineGroup.rotation.x = Math.cos(Date.now() * 0.001) * 0.15;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      wLine.geometry.dispose();
      dLine.geometry.dispose();
      (wLine.material as THREE.Material).dispose();
      (dLine.material as THREE.Material).dispose();
    };
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="w-[60px] h-[60px] inline-flex items-center justify-center"
    />
  );
};

export default FloatingLogo;