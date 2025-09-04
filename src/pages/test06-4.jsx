import '../css/test06-4.css'
import { useState, useRef, useEffect } from 'react'
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import cimg1 from '../image/testt/slider1.webp'
import cimg2 from '../image/testt/slider2.webp'
import cimg3 from '../image/testt/slider3.webp'
import cimg4 from '../image/testt/slider4.webp'
import cimg5 from '../image/testt/slider5.webp'
import Cursor from '../components/Cursor.jsx'


const App = () => {

    const ImageArr = [
        {
            id: 1,
            ImgSrc: cimg1,
            title: "Title1",
            desc: "Description1",
        },
        {
            id: 2,
            ImgSrc: cimg2,
            title: "Title2",
            desc: "Description1",
        },
        {
            id: 3,
            ImgSrc: cimg3,
            title: "Title3",
            desc: "Description1",
        },
        {
            id: 4,
            ImgSrc: cimg4,
            title: "Title4",
            desc: "Description1",
        },
        {
            id: 5,
            ImgSrc: cimg5,
            title: "Title5",
            desc: "Description1",
        },
    ];

    const [images, setImages] = useState([...ImageArr]);
    const [fadeIn, setFadeIn] = useState(true);
    const containerRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // 淡入淡出效果
    useEffect(() => {
        setFadeIn(false); // 先重置
        const timer = setTimeout(() => setFadeIn(true), 50); // 小延遲觸發 transition
        return () => clearTimeout(timer);
    }, [images]);

    // 點擊箭頭切換
    const sliderforward = () => {
        setImages((prevArr) => {
            const newArr = [...prevArr];
            const first = newArr.shift();
            newArr.push(first);
            return newArr;
        });
        setSelectedIndex(0); // 因為移到最前面就是新 selimg
    };

    // 點擊圖片切換到最前面
    const moveToFront = (index) => {
        setImages((prevArr) => {
            const head = prevArr.slice(0, index);
            const tail = prevArr.slice(index);
            return [...tail, ...head];
        });
        setSelectedIndex(0); // 每次 forward 之後，第一個一定是 selimg
    };

    // 切換圖時的動畫gsap
    useEffect(() => {
        const sel = containerRef.current.querySelector(".selimg");

        if (sel) {
            gsap.fromTo(
                sel,
                { scale: 0.6, x: -200, y: 100 }, // 起始狀態 (像 nonsel)
                { scale: 1, x: 0, y:0, duration: 1, ease: "power2.inOut" } // 目標狀態
            );
        }
    }, [images]);




    return (
        <>
        <Cursor />
            <div className="sliderimginner">
                <div className='sliderwrap' ref={containerRef}>
                    <div className='slidercard'>

                        {images.map((item, index) => {
                            return (
                                <div key={item.id}
                                    className={(index === 0) ? `selimg ${fadeIn ? 'fadein' : ''}` : 'nonsel'} onClick={() => moveToFront(index)}>
                                    <img className='sliderimg' src={item.ImgSrc} />
                                </div> )
                        })}
                    </div>
                    {images.length > 0 && (
                        <div className="slidertxt">
                            <h3>{images[selectedIndex].title}</h3>
                            <p>{images[selectedIndex].desc}</p>
                        </div>
                    )}
                    <IoMdArrowDroprightCircle className='sliderarrow' onClick={sliderforward} />
                </div>
            </div>
        </>
    )
}

export default App