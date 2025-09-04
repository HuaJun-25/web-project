import cimg1 from '../image/testt/slider1.webp'
import cimg2 from '../image/testt/slider2.webp'
import cimg3 from '../image/testt/slider3.webp'
import cimg4 from '../image/testt/slider4.webp'
import cimg5 from '../image/testt/slider5.webp'
import '../css/test09.css'


const App = () => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
        showSlider('next');
    }

    prevDom.onclick = function () {
        showSlider('prev');
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext)
    }
    return (
        <>
            <div class="carousel">

                <div class="list">
                    <div class="item">
                        <img src='../image/testt/slider1.webp' />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src='../image/testt/slider2.webp' />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src='../image/testt/slider3.webp' />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src='../image/testt/slider4.webp' />
                        <div class="content">
                            <div class="author">LUNDEV</div>
                            <div class="title">DESIGN SLIDER</div>
                            <div class="topic">ANIMAL</div>
                            <div class="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                            </div>
                            <div class="buttons">
                                <button>SEE MORE</button>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thumbnail">
                    <div class="item">
                        <img src={cimg1} />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src="'../image/testt/slider2.webp'" />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src='../image/testt/slider3.webp' />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src='../image/testt/slider4.webp' />
                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                </div>


                <div class="arrows">
                    <button id="prev">上</button>
                    <button id="next">下</button>
                </div>

                <div class="time"></div>
            </div>

        </>
    )
}

export default App