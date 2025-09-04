import React from 'react'
import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  /* useEffect(() => {
     document.addEventListener('mousemove', (e) => {
       const { clientX, clientY } = e;
       const mouseX = clientX - cursorRef.current.clientWidth / 2;
       const mouseY = clientY - cursorRef.current.clientHeight / 2;
       cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
     })
   }, []);*/

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
}

export default Cursor