import '../css/test06.css'
import { useState, useRef, useEffect } from 'react'
import gsap from "gsap";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import cimg1 from '../image/testt/slider1.webp'
import cimg2 from '../image/testt/slider2.webp'
import cimg3 from '../image/testt/slider3.webp'
import cimg4 from '../image/testt/slider4.webp'
import cimg5 from '../image/testt/slider5.webp'


const App = () => {

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
    ]);

    const sliderforward = () => {
       // setSelectedIndex(prev => Math.min(prev + 1, ImageArr.length - 1));
        const data = ImageArr[0];
        setImageArr([...ImageArr, data]);
        setImageArr((prevArr) => {
            const newArr = [...prevArr];
            newArr.shift();
            return newArr;
        })
    }



    return (
        <>
            <div className="sliderimginner">
                <div className='sliderwrap' >
                    {ImageArr.map((item, index) => {
                        return (
                            <div key={index} className={(index === 0) ? 'selimg' : 'nonsel'} onClick={() => setSelectedIndex(index)}>
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