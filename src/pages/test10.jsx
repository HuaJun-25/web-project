import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Cursor from '../components/Cursor.jsx'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "../css/test10.css";

const images = [
    "https://images.unsplash.com/photo-1756303018960-e5279e145963?q=80&w=838&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1754079132758-5dfb65298934?q=80&w=2196&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1755804993716-a3f19e419eaf?q=80&w=1740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1756573187428-48ffc9557eb4?q=80&w=774&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1754172111686-89a5782b18c6?q=80&w=774&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1756680967556-26861e2c836b?q=80&w=774&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1756768937629-febe4bf15fcf?q=80&w=1742&auto=format&fit=crop",
];
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);
    const scrollRef = useRef(0); // 0~1
    const cursorRef = useRef(0);
    const workRef = useRef(null);

    
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const track = trackRef.current;
        if (!wrapper || !track) return;

        // 圖片內部移動
        const updateTrackAndImages = (scrollValue) => {
            const leftPercent = 20 - scrollValue * 100;
            gsap.to(track, { left: `${leftPercent}%`, duration: 0.5, ease: "power3.out" });

            const imgs = track.getElementsByClassName("image");
            for (const img of imgs) {
                gsap.to(img, {
                    objectPosition: `${100 - scrollValue * 100}% 50%`,
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        };

        // Wheel 控制
        const handleWheel = (e) => {
            if (!track.contains(e.target)) return;
            e.preventDefault();

            scrollRef.current += e.deltaY * 0.0015;
            scrollRef.current = Math.max(0, Math.min(scrollRef.current, 1));

            updateTrackAndImages(scrollRef.current);
        };
        wrapper.addEventListener("wheel", handleWheel, { passive: false });

        // Draggable 控制 
        const trackWidth = track.scrollWidth - track.parentElement.offsetWidth;
        Draggable.create(track, {
            type: "x",
            bounds: { minX: -trackWidth, maxX: 0 },
            inertia: true,
            cursor: "none",
            onDrag() {
                // 根據拖曳距離計算 scrollRef
                scrollRef.current = -this.x / trackWidth;
                updateTrackAndImages(scrollRef.current);
            },
            onThrowUpdate() {
                scrollRef.current = -this.x / trackWidth;
                updateTrackAndImages(scrollRef.current);
            },
        });

        return () => wrapper.removeEventListener("wheel", handleWheel);
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const track = trackRef.current;
        if (!cursor || !track) return;

        const moveCursor = (e) => {
            cursor.setHover(track.contains(e.target));
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    useEffect(() => {
        if (!workRef.current) return;

        const workEl = workRef.current;
        const items = workEl.querySelectorAll(".work-photo-item");

        // 設定 zIndex
        items.forEach((item, index) => {
            item.style.zIndex = items.length - index;
        });

        // 設定初始 clipPath
        gsap.set(items, {
            clipPath: "inset(0px 0px 0px 0px)"
        });

        // Lenis 滾動
        const lenis = new Lenis({ duration: 1.2 });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // 建立動畫
        const animation = gsap.to(items, {
            clipPath: "inset(0px 0px 100% 0px)",
            stagger: 0.5,
            ease: "none"
        });

        // ScrollTrigger
        const sk = ScrollTrigger.create({
            trigger: workEl,
            start: "top top",
            end: "bottom bottom",
            animation: animation,
            scrub: 1
        });

        return () => {
            sk.kill();
            animation.kill();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);


    return (
        <>
            <Cursor ref={cursorRef} />
            <div className="gallery-wrapper" ref={wrapperRef}>
                <div className="image-track" ref={trackRef}>
                    {images.map((src, i) => (
                        <img key={i} src={src} className="image" alt={`img-${i}`} />
                    ))}
                </div>
            </div>
            <div className="process-wrapper">
                <div className="work" ref={workRef}>
                    <div className="work-left">
                        <div className="text">
                            <div className="work-info">
                                <h2>title</h2>
                                <span>說明</span>
                            </div>
                            <div className="work-info">
                                <h2>title</h2>
                                <span>說明</span>
                            </div>
                            <div className="work-info">
                                <h2>title</h2>
                                <span>說明</span>
                            </div>
                        </div>
                    </div>
                    <div className="work-right">
                        <div className="work-right-b1">
                            <div className="work-photo">
                                <div className="work-photo-item"><img src="https://images.unsplash.com/photo-1756303018960-e5279e145963?q=80&w=838&auto=format&fit=crop" alt="" /></div>
                                <div className="work-photo-item"><img src="https://images.unsplash.com/photo-1756573187428-48ffc9557eb4?q=80&w=774&auto=format&fit=crop" alt="" /></div>
                                <div className="work-photo-item"><img src="https://images.unsplash.com/photo-1754079132758-5dfb65298934?q=80&w=2196&auto=format&fit=crop" alt="" /></div>
                                <div className="work-photo-item"><img src="https://images.unsplash.com/photo-1756303018960-e5279e145963?q=80&w=838&auto=format&fit=crop" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App