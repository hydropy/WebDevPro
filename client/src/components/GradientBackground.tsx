import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GradientBackgroundProps {
  colorA?: string; // Base color in hex format (#rrggbb)
  colorB?: string; // Secondary color in hex format (#rrggbb)
  speed?: number;  // Animation speed multiplier
}

const GradientBackground = ({ 
  colorA = '#0984E3', 
  colorB = '#00B894', 
  speed = 1 
}: GradientBackgroundProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Converting hex colors to THREE.Color
    const color1 = new THREE.Color(colorA);
    const color2 = new THREE.Color(colorB);
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    const setCanvasSize = () => {
      if (canvasRef.current) {
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        renderer.setSize(width, height);
      }
    };
    
    setCanvasSize();
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create a plane geometry that covers the full viewport
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    // Create a shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_color1: { value: color1 },
        u_color2: { value: color2 }
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        varying vec2 vUv;
        
        vec3 blend(vec3 color1, vec3 color2, float mixValue) {
          return color1 * (1.0 - mixValue) + color2 * mixValue;
        }
        
        void main() {
          // Create a moving gradient based on time
          float noise = sin(vUv.x * 10.0 + u_time) * sin(vUv.y * 10.0 + u_time) * 0.25 + 0.75;
          float gradient = sin(vUv.x * 3.1415 + u_time * 0.5) * sin(vUv.y * 3.1415 + u_time * 0.5) * 0.5 + 0.5;
          
          vec3 color = blend(u_color1, u_color2, gradient + noise * 0.1);
          
          gl_FragColor = vec4(color, 0.5); // 0.5 opacity for a subtle effect
        }
      `,
      transparent: true
    });
    
    // Create the mesh and add it to the scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Animation loop
    let animationFrameId: number;
    const startTime = Date.now();
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Update the time uniform
      const elapsedTime = (Date.now() - startTime) / 1000;
      (material.uniforms.u_time as { value: number }).value = elapsedTime * 0.2 * speed;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
    };
  }, [colorA, colorB, speed]); // Re-run effect if colors or speed change
  
  return (
    <div 
      ref={canvasRef} 
      className="absolute inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default GradientBackground;