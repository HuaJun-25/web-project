import React from 'react'
import {forwardRef, useEffect, useRef, useState, useImperativeHandle, } from 'react';
/*
const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className='app-cursor'
      ref={cursorRef}
      style={{
        zIndex: 1000,
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        // border: '1px solid #e36666',
        backgroundColor:'#e36666',
        pointerEvents: 'none',
        overflow: 'hidden',
        transform: 'translate3d(0, 0, 0)',
        transform: "translate(-50%, -50%)", // 用 CSS 處理中心點
        transition: "transform 0.02s linear",
        position: 'fixed',
      }}></div>
  )
}*/

const Cursor = forwardRef((props, ref) => {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useImperativeHandle(ref, () => ({
    setHover: setHovered,
  }));

  // 位置更新
  useEffect(() => {
    const cursor = cursorRef.current;
    const move = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        zIndex: 1000,
        borderRadius: "50%",
        width: hovered ? "20px" : "0",
        height: hovered ? "20px" : "0",
        backgroundColor: hovered ? "#e36666" : "transparent",
        pointerEvents: "none",
        overflow: "hidden",
        transform: "translate(-50%, -50%)",
        transition: "all 0.02s linear",
        position: "fixed",
        zIndex: 2,
      }}
    />
  );
});

export default Cursor