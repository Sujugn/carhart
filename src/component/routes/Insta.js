import React from 'react';
import '../assets/styles/insta.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';

//img
import insta01 from '../assets/img/insta01.jpg';
import insta02 from '../assets/img/insta02.jpg';
import insta03 from '../assets/img/insta03.jpg';
import insta04 from '../assets/img/insta04.jpg';

export default function Insta() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // autoplay 옵션 추가
        autoplaySpeed: 3000, // 자동 전환 간격을 밀리초로 설정
    };

    const instaData = [
        { id: 'insta01', title: '임시타이틀01', image: insta01, url: '' },
        { id: 'insta02', title: '임시타이틀02', image: insta02, url: '' },
        { id: 'insta03', title: '임시타이틀03', image: insta03, url: '' },
        { id: 'insta04', title: '임시타이틀04', image: insta04, url: '' },
    ];
    return (
        <div className="insta">
            <div className="insta-inner inner">
                <h3 className="title">INSTA</h3>
                <Slider {...settings}>
                    {instaData.map((insta) => (
                        <Link
                            to={insta.url}
                            className="insta-slider"
                        >
                            <div className="insta-img">
                                <img
                                    src={insta.image}
                                    alt={insta.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
