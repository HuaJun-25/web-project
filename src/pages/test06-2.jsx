import '../css/test06-2.css'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

    const swiperRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const sliderforward = () => {
        const nextIndex = (selectedIndex + 1) % ImageArr.length;
        setSelectedIndex(nextIndex);
        swiperRef.current.slideTo(nextIndex);
        // const nextIndex = (selectedIndex + 1) % ImageArr.length;
        // setSelectedIndex(nextIndex);
        // swiperRef.current.slideTo(nextIndex); // 移動到對應 slide
    };


    const moveToFront = (index) => {
        setSelectedIndex(index);
        swiperRef.current.slideTo(index);
    };



    return (
        <div className="sliderimginner">
            <div className='sliderwrap'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView="auto"
                    //centeredSlides={true} // 居中
                    // spaceBetween={20}
                    style={{ padding: '0 40vw 0 0' }}
                    dir="rtl"
                >
                    {ImageArr.map((item, index) => {
                        const isSelected = index === selectedIndex;
                        return (
                            <SwiperSlide
                                key={index}
                                style={{
                                    width: isSelected ? 300 : 150, // 選中圖片放大
                                    height: isSelected ? "80vh" : "45vh",
                                    transition: "all 2s ease",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    position: "relative",
                                    cursor: "pointer",
                                }}
                                onClick={() => moveToFront(index)}
                            >
                                <img
                                    src={item.ImgSrc}
                                    alt={item.title}
                                    className='sliderimg'
                                    style={{ display: 'block', width: "100%", height: "100%", objectFit: "cover", transition: "all 2s ease", }}
                                />
                                {isSelected && (
                                    <div className="slidertxt" >
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <IoMdArrowDroprightCircle
                    className="sliderarrow"
                    onClick={sliderforward}
                />

            </div>
        </div>
    );
}

export default App