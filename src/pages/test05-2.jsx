import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/test05-2.css';

import home1 from '../image/home1.jpg';

gsap.registerPlugin(ScrollTrigger);


export default function WeContentSection() {
  const wecontentRef = useRef(null);
  const imgHolderRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!wecontentRef.current || !imgHolderRef.current || !imgRef.current) return;


    // 初始與目標縮放值
    const fromClip = "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)";
    const toClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const fromRotate = 30;
    const toRotate = 0;

    gsap.to(".header .letters:first-child", {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    // header 右側文字動畫
    gsap.to(".header .letters:last-child", {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    const imgHolderTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wecontent",
        start: "top top",
        end: "+=200%", // 與 img-holder clip-path 動畫相同
        scrub: 1,
        pin: true,     // 如果 img-holder 有 pin
      },
    });
    imgHolderTimeline.fromTo(
      ".img-holder",
      {
        clipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
        WebkitClipPath: "polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)",
        rotate: "30deg",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        rotate: "0deg",
        ease: "power2.inOut",
      }
    );

    // img 縮放
    imgHolderTimeline.fromTo(
      ".img-holder img",
      { scale: 2 },
      { scale: 1, ease: "power2.inOut" },
      0 // 對齊時間線開始
    );


    // 卸載元件時把gsap動畫釋放，防記憶體洩漏
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="letters">
          <div>c</div>
          <div>o</div>
          <div>m</div>
          <div>m</div>
          <div>i</div>
        </div>
        <div className="letters">
          <div>s</div>
          <div>s</div>
          <div>i</div>
          <div>o</div>
          <div>n</div>
        </div>
      </div>

      <div className="bg-white">
        <div ref={wecontentRef} className="wecontent">
          <div className="img-holder" ref={imgHolderRef}>
            <img
              ref={imgRef}
              src={home1}
              alt=""
            />
          </div>


        </div>
        {/* <div className="content-holder">
          <h2>下個區塊</h2>
          <p >
            當圖片完全放大後，才能繼續往下滾動，往上則會再回到縮小狀態。
          </p>
        </div> */}
      </div>
      <div className="content-holder">
        <h2>下個區塊</h2>
        <p >
          當圖片完全放大後，才能繼續往下滾動，往上則會再回到縮小狀態。
        </p>
      </div>

    </>
  );
}
