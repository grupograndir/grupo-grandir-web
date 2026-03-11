import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;

            // Detect iPhone and iPod
            const isIphone = /iPhone|iPod/.test(userAgent);

            // Detect iPad (including newer iPads that request desktop site by default)
            const isIpad = /iPad/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

            // Detect Android devices
            const isAndroid = /Android/.test(userAgent);

            // Fallback for generic small/tablet screens (up to iPad Pro portrait width 1024px)
            const isWidthMobile = window.innerWidth <= 1024;

            // If it's an iPhone, iPad, Android, or the screen width is tablet-sized or smaller
            setIsMobile(isIphone || isIpad || isAndroid || isWidthMobile);
        };

        // Check on mount
        checkDevice();

        // Re-check on window resize
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isMobile;
};

export default useIsMobile;
