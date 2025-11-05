import React, { useState, useEffect, useCallback, type RefObject } from 'react';
import scatterEffect from './scatter'
const style = {
    position: 'absolute',
    zIndex: 101,
    overflow: 'scroll',
    background: '#0000003d',
    backdropFilter: 'blur(16px)',
    padding: '10px',
    borderRadius: '10px',
    marginTop: '100px'
} as React.CSSProperties;



const useMouseMove = (canvasRef: RefObject<HTMLCanvasElement | null>) => {
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState<{
        id: number;
        x: number;
        y: number;
        size: number;
        opacity: number;
        duration: number;
        delay: number;
    }[]>([])



    useEffect(() => {
        let currentScrollY = window.scrollY;
        let targetScrollY = window.scrollY;
        let rafId: number | null = null;
        
        const smoothScroll = () => {
            // Calculate the difference between target and current position
            const diff = targetScrollY - currentScrollY;
            
            // Apply easing with a small minimum movement to prevent sticking
            if (Math.abs(diff) > 0.01) {
                currentScrollY += diff * 0.15; // Increased from 0.1 to 0.15 for more responsive movement
                setScrollY(currentScrollY);
                rafId = requestAnimationFrame(smoothScroll);
            } else {
                // Snap to exact position when very close
                currentScrollY = targetScrollY;
                setScrollY(currentScrollY);
                rafId = null;
            }
        };

        const handleScroll = () => {
            targetScrollY = window.scrollY; // Update target position
            if (!rafId) {
                rafId = requestAnimationFrame(smoothScroll);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Generate floating particles
        const newParticles = Array.from({ length: 80 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 5 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            duration: Math.random() * 2 + 15,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => (scatterEffect(canvasRef.current)), [])

    const createStatDisplay = useCallback(() => {
        return React.createElement('pre', {
            style: { ...style, top: `${scrollY}px` }
        },
            JSON.stringify({ mousePos, scrollY, particles }, null, 2)
        );
    }, [mousePos, scrollY, particles])

    return {
        scrollY,
        mousePos,
        particles,
        createStatDisplay
    }
}

export default useMouseMove;