import React, { useState } from 'react';
import '../assets/styles/Modal.css';

//react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//icon
import { MdClose } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';
import { GrFormSearch } from 'react-icons/gr';

export default function Modal({ closeModal }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div
            className="modal"
            style={{
                display: 'none',
            }}
        >
            <div className="modal-close">
                <button onClick={closeModal}>
                    <MdClose size={30} />
                </button>
            </div>

            <div className="modal-content">
                <Slider
                    {...settings}
                    className="store-slider"
                >
                    <div>슬라이더1</div>
                    <div>슬라이더2</div>
                    <div>슬라이더3</div>
                    <div>슬라이더4</div>
                    <div>슬라이더5</div>
                </Slider>
                <div className="zoom-store">
                    <button className="flex">
                        <GrFormSearch size={22} />
                        <p>확대보기</p>
                    </button>
                </div>

                <div className="flex-between">
                    <h3 className="store-name">칼하트 NN점</h3>
                    <div className="flex">
                        <button className="store-quick">
                            <IoCall size={17} />
                        </button>
                        <button className="store-quick">
                            <GoLocation size={20} />
                        </button>
                    </div>
                </div>
                <p className="store-location">위치정보</p>
                <p className="store-call ">전화정보</p>
                <ul>
                    <li>운영정보</li>
                    <li>월: 12:00~ 21:00</li>
                    <li>화: 12:00~ 21:00</li>
                    <li>수: 12:00~ 21:00</li>
                    <li>목: 12:00~ 21:00</li>
                    <li>금: 12:00~ 21:00</li>
                    <li>토: 12:00~ 21:00</li>
                    <li>일: 12:00~ 21:00</li>
                </ul>
            </div>
        </div>
    );
}
