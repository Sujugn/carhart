import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/visualmain.scss';

//react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//arrow icon
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

//img
import visual01 from '../assets/img/qhklw8yc7tbn.jpg';
import visual02 from '../assets/img/vb91s6lth1dg.jpg';
import visual03 from '../assets/img/urgrq141ued1.jpg';

export default function VisualMain() {
    //react-slick 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    //슬라이드 데이터
    const visualData = [
        { id: 'visual01', title: '2024봄/여름 LOOKBOOK', desc: '설명글', image: visual01 },
        { id: 'visual02', title: 'slide2', desc: '설명글', imgage: visual02 },
        { id: 'visual03', title: 'slide3', desc: '설명글', imgage: visual03 },
        { id: 'visual04', title: 'slide4', desc: '설명글' },
        { id: 'visual05', title: 'slide5', desc: '설명글' },
    ];

    return (
        <div className="visualmain">
            <div className="visualmain-inner inner">
                <Slider {...settings}>
                    {visualData.map((slide) => (
                        <div
                            key={slide.id}
                            className="slide-container"
                        >
                            <div className="img-block">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                ></img>
                            </div>

                            <div className="slick-prev">
                                <MdArrowBackIos />
                            </div>
                            <div className="slick-next">
                                <MdArrowForwardIos />
                            </div>

                            <div className="text-block">
                                <h3>{slide.title}</h3>
                                <p>{slide.desc}</p>
                                <button className="more-btn">보러가기</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
