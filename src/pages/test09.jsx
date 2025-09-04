import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../css/test09.css'

const App = () => {

    const pics = [
        'https://media.istockphoto.com/id/932093734/photo/woman-standing-near-the-swimming-pool-on-villa.jpg?s=2048x2048&w=is&k=20&c=_-_pVz7hTDmaaQnF9KK_qkHBBDA7a7dyyH7k4hinyS8=',
        'https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=2048x2048&w=is&k=20&c=wscQ92nOh14b4X1zdqy7HpY8ZZ2uOVoyGJWneMniJVY=',
        'https://media.istockphoto.com/id/489556478/photo/travelling-tools.jpg?s=2048x2048&w=is&k=20&c=rmT5Hm6ax_vLXFufdUoPfoIEkWjQc9bLINPOiqzZX_A=',
        "https://media.istockphoto.com/id/478966328/photo/female-traveller-walking-airport-terminal.jpg?s=2048x2048&w=is&k=20&c=_VJQmM0s6tqZaVsYlOoSTNdqeuv1IdrfEZH0suuU9VE=",
        'https://media.istockphoto.com/id/1044560218/photo/luxury-holiday-villa-with-infinity-pool-at-sunset.jpg?s=2048x2048&w=is&k=20&c=mN9a8Ngk5Kk6P7MHHa6I83DuU0sEaT8bAKLwocLl7_c=',
    ]

    const loopPics = [...pics, ...pics];
    return (
        <>
            <div className="marquee">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={"auto"}   // 寬度自適應
                    spaceBetween={16}
                    loop={true}
                    speed={8000}             // 越大越慢
                    autoplay={{
                        delay: 0,              // 立即開始
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true, // hover 停止
                    }}
                    freeMode={true}          // 自由滾動模式
                    allowTouchMove={false}   // 禁止手動滑動，純跑馬燈
                >
                    {pics.map((src, i) => (
                        <SwiperSlide key={i} style={{ width: "auto" }}>
                            <img
                                src={src}
                                alt={`slide-${i}`}
                                style={{
                                    height: "500px",   // 高度固定
                                    width: "auto",     // 寬度依圖片
                                    borderRadius: "12px",
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default App