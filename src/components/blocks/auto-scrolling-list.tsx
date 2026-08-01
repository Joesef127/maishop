"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AutoScrollingListProps {
    children: React.ReactNode;
}

const AutoScrollingList = ({ children }: AutoScrollingListProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState<'right' | 'left'>('right');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            const container = scrollContainerRef.current;
            if (!container) return;

            const card = container.firstElementChild as HTMLElement;
            if (!card) return;

            const cardWidth = card.offsetWidth + 8; // card width + gap (gap-2 is 8px)
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (maxScrollLeft <= 0) return; // Nothing to scroll

            if (direction === 'right') {
                if (container.scrollLeft + cardWidth >= maxScrollLeft) {
                    container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                    setDirection('left');
                } else {
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            } else {
                if (container.scrollLeft - cardWidth <= 0) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                    setDirection('right');
                } else {
                    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                }
            }
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval);
    }, [direction, isHovered]);

    return (
        <div 
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth xl:w-full xl:grid grid-cols-4"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {React.Children.map(children, (child) => (
                    <div className="flex-shrink-0 scroll-snap-align-start">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoScrollingList;
