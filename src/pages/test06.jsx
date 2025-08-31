import '../css/test06.css'
import { useState, useRef, useEffect } from 'react'
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import cimg1 from '../image/testt/slider1.webp'
import cimg2 from '../image/testt/slider2.webp'
import cimg3 from '../image/testt/slider3.webp'
import cimg4 from '../image/testt/slider4.webp'
import cimg5 from '../image/testt/slider5.webp'


const App = () => {

    /*
    const [ImageArr, setImageArr] = useState([
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
    ]);*/
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

    useEffect(() => {
        setFadeIn(false); // 先重置
        const timer = setTimeout(() => setFadeIn(true), 50); // 小延遲觸發 transition
        return () => clearTimeout(timer);
    }, [images]);


    /*
        // 按箭頭下一張   
        const sliderforward = () => {
            const data = ImageArr[0];
            setImageArr([...ImageArr, data]);
            setImageArr((prevArr) => {
                const newArr = [...prevArr];
                newArr.shift();
                return newArr;
            });
        }
    
        // 按圖片切換
        const moveToFront = (index) => {
            setImageArr((prevArr) => {
                const newArr = [...prevArr];
                //const selected = newArr.splice(index, 1)[0]; // 把點擊到的圖片取出
                // newArr.unshift(selected); // 插到最前面
                const head = newArr.slice(0, index); // 切出 index 之後 (含 index 本身) 的部分
                const tail = newArr.slice(index); // 把 tail 接到 head 後面
                return [...tail, ...head];
            });
        };*/

    const sliderforward = () => {
        setImages((prevArr) => {
            const newArr = [...prevArr];
            const first = newArr.shift();
            newArr.push(first);
            return newArr;
        });
    }

    // 點擊圖片切換到最前面
    const moveToFront = (index) => {
        setImages((prevArr) => {
            const head = prevArr.slice(0, index);
            const tail = prevArr.slice(index);
            return [...tail, ...head];
        });
    };




    return (
        <>
            <div className="sliderimginner">
                <div className='sliderwrap' >
                    {images.map((item, index) => {
                        return (
                            <div key={item.id}
                                className={(index === 0) ? `selimg ${fadeIn ? 'fadein' : ''}` : 'nonsel'} onClick={() => moveToFront(index)}>
                                <img className='sliderimg' src={item.ImgSrc} />
                                <div className="slidertxt">
                                    {(index === 0) ?
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div> : null
                                    }</div>
                            </div>)
                    })}
                    <IoMdArrowDroprightCircle className='sliderarrow' onClick={sliderforward} />
                </div>
            </div>
        </>
    )
}

export default App