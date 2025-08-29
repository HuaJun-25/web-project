import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/test05.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

    const wecontentRef = useRef('.wecontent');
    const contentHolderRef = useRef('.content-holder');
    const imgRef = useRef(0);

    useEffect(() => {
        const contentHolderHeight = contentHolderRef.current.offsetHeight;
        const imgHolderHeight = window.innerHeight;
        const additionalScrollHeight = window.innerHeight;

        const totalBodyHeight =
            contentHolderHeight + imgHolderHeight + additionalScrollHeight;
        document.body.style.height = `${totalBodyHeight}px`;

       // ScrollTrigger 設定
        ScrollTrigger.create({
            trigger: wecontentRef.current,
            start: "-0.1% top",
            end: "bottom bottom",

            onEnter: () => {
                gsap.set(wecontentRef.current, { position: "absolute", top: "195%" });
            },
            onLeaveBack: () => {
                gsap.set(wecontentRef.current, { position: "fixed", top: "0" });
            },

        });





        // header 左側文字動畫
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

        // img-holder 區塊動畫
        gsap.to(".img-holder", {
            rotation: 0,
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
            ease: "power2.inOut",
            scrollTrigger: {
                start: "top top",
                end: "+=200%",
                scrub: 1,
            },
        });

        gsap.to(".img-holder img", {
            scale: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                start: "top top",
                end: "+=200%",
                scrub: 1,
            },
        });

    }, []);

    return (
        <>
            <div className="header">
                <div className="letters">
                    <div>a</div>
                    <div>r</div>
                    <div>t</div>
                    <div>w</div>
                </div>
                <div className="letters">
                    <div>o</div>
                    <div>r</div>
                    <div>k</div>
                    <div>s</div>
                </div>
            </div>
            <div className="wecontent" ref={wecontentRef}>
                <div className="img-holder">
                    <img ref={imgRef} src="https://i0.wp.com/janstockcoin.com/wp-content/uploads/2021/06/pexels-photo-747964-scaled.jpeg?fit=2560%2C1616&ssl=1"
                        alt="" />
                </div>
                <div className="content-holder" ref={contentHolderRef}>
                    <div className="row">
                        <h2>history</h2>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/GeneticApex/GeneticApex_30_00195.webp"
                                alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/MythicalIsland/cPK_20_002450_01_MEWex_SAR_M_M_zh_TW.webp"
                                alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="img">
                            <img src="https://www.pokemon-tcg-pocket-dex.com/img/cardGroups/Space-timeSmackdown/cPK_20_003910_01_DARKRAIex_SAR_M_M_zh_TW.webp"
                                alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ipsum, ullam nostrum atque labore
                            aperiam neque asperiores aut doloribus alias.</p>
                    </div>
                    <div className="row">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit hic aut eaque adipisci labore libero
                            voluptatem impedit repudiandae ratione?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
