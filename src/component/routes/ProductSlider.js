import React from 'react';
import '../assets/styles/ProductSlider.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//IMG
import best01 from '../assets/img/vb91s6lth1dg.jpg';

//icon
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

export default function ProductSlider() {
    // 이전 화살표 컴포넌트
    const PrevArrow = ({ onClick }) => (
        <div
            className="arrow prev"
            onClick={onClick}
        >
            <MdArrowBackIos size={30} />
        </div>
    );

    // 다음 화살표 컴포넌트
    const NextArrow = ({ onClick }) => (
        <div
            className="arrow next"
            onClick={onClick}
        >
            <MdArrowForwardIos size={30} />
        </div>
    );

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const bestData = [
        { id: 'best01', desc: 'BEST desc 설명', rank: '1', image: best01 },
        { id: 'best02', desc: 'BEST desc 설명', rank: '2', image: best01 },
        { id: 'best03', desc: 'BEST desc 설명', rank: '3', image: best01 },
        { id: 'best04', desc: 'BEST desc 설명', rank: '4', image: best01 },
        { id: 'best05', desc: 'BEST desc 설명', rank: '5', image: best01 },
        { id: 'best06', desc: 'BEST desc 설명', rank: '6', image: best01 },
    ];

    const newData = [
        { id: 'new01', desc: 'new desc 설명', image: best01 },
        { id: 'new02', desc: 'new desc 설명', image: best01 },
        { id: 'new03', desc: 'new desc 설명', image: best01 },
        { id: 'new04', desc: 'new desc 설명', image: best01 },
        { id: 'new05', desc: 'new desc 설명', image: best01 },
        { id: 'new06', desc: 'new desc 설명', image: best01 },
    ];

    return (
        <div className="productslider">
            <div className="productslider-inner inner">
                <div className="best-product slider-block">
                    <h3 className="slider-title">BEST PRODUCT</h3>
                    <Slider {...settings}>
                        {bestData.map((bestProduct) => (
                            <div key={bestProduct.id}>
                                <div className="slide-item">
                                    <div className="img-box">
                                        <img src={bestProduct.image} />
                                    </div>

                                    <div className="rank">
                                        <p>
                                            BEST
                                            <br />
                                            <span>{bestProduct.rank}</span>
                                        </p>
                                    </div>

                                    <div className="img-hover">
                                        <div className="hover-inner">
                                            <div className="product-desc">
                                                <p>{bestProduct.desc}</p>
                                            </div>
                                            <button className="more-btn">보러 가기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="new-product slider-block">
                    <h3 className="slider-title">NEW PRODUCT</h3>
                    <Slider {...settings}>
                        {newData.map((newProduct) => (
                            <div key={newProduct.id}>
                                <div className="slide-item">
                                    <div className="img-box">
                                        <img src={newProduct.image} />
                                    </div>

                                    <div className="img-hover">
                                        <div className="hover-inner">
                                            <div className="product-desc">
                                                <p>{newProduct.desc}</p>
                                            </div>
                                            <button className="more-btn">보러 가기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
