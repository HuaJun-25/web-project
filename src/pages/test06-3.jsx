import '../css/test06-3.css'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
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
    const [images, setImages] = useState(ImageArr);

    /*
    const moveToFront = (index) => {
        setImages((prev) => {
            // 找出點擊的 index
            const selectedIndex = index;

            // 把點擊的那張「旋轉」到最後
            const rotated = [
                ...prev.slice(selectedIndex + 1),
                ...prev.slice(0, selectedIndex + 1)
            ];
            return rotated;
        });
        // 狀態更新後讓 Swiper 滑到最後一張（選中）
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideTo(images.length - 1);
            }
        }, 0);
    };*/

    const sliderforward = () => {
        setImages((prev) => {
            const newArr = [...prev];
            const first = newArr.shift();
            newArr.push(first); // 第一張移到最後
            return newArr;
        });

        // 更新完陣列後滑動到最後一張選中圖片
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideTo(newArr.length - 1);
            }
        }, 0);
    };

    return (
        <div className="sliderimginner">
            <div className="sliderwrap">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView="auto"
                    spaceBetween={20}
                    speed={100}
                    style={{ padding: '0 40vw 0 0' }}
                    allowTouchMove={false}
                >
                    {images.map((item, index) => {
                        const isSelected = index === images.length - 1;
                        return (
                            <SwiperSlide
                                key={item.title}
                                style={{
                                    width: isSelected ? 300 : 150,
                                    height: isSelected ? "80vh" : "45vh",
                                    transition: "all 2s ease",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                                onClick={() => moveToFront(index)}
                            >
                                <img
                                    src={item.ImgSrc}
                                    alt={item.title}
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