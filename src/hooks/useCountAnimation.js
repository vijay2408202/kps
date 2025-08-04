import { useState, useEffect, useRef } from 'react';

export const useCountAnimation = (endValue, duration = 2000, suffix = '') => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    // Extract numeric value from string like "20+" or "500+"
    const numericValue = parseInt(endValue.toString().replace(/[^0-9]/g, '')) || 0;

    // Set up intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of element is visible
                rootMargin: '0px 0px -50px 0px' // Add some offset
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]);

    // Animate counting when visible
    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;
            let animationId;

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Use easeOutQuart for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + (numericValue - startValue) * easeOutQuart);

                setCount(currentValue);

                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    setCount(numericValue);
                }
            };

            // Small delay before starting animation
            const timer = setTimeout(() => {
                animationId = requestAnimationFrame(animate);
            }, 100);

            return () => {
                clearTimeout(timer);
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        }
    }, [isVisible, hasAnimated, numericValue, duration]);

    // Format the display value
    const displayValue = `${count}${suffix}`;

    return {
        displayValue,
        elementRef,
        isAnimating: isVisible && !hasAnimated
    };
};

export const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -30px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold]);

    return {
        isVisible,
        elementRef
    };
};
