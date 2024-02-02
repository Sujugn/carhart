import React, { useState } from 'react';
import '../assets/styles/Map.scss';

//icon
import { FaLocationDot } from 'react-icons/fa6';
import { VscListFilter } from 'react-icons/vsc';
import { IoIosArrowForward } from 'react-icons/io';

//page
import QuickMenu from './QuickMenu';
import Modal from './Modal';

export default function MapPage() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="mappage">
            <div className="map-inner">
                <QuickMenu />
                <div className="title-block">
                    <FaLocationDot size={50} />
                    <h1>지도찾기</h1>
                    <p>칼하트 웹을 지금 만나러 가보세요</p>
                </div>

                <div className="content-block">
                    <div className="map-input">
                        <div className="title-box">
                            <h3>지역검색</h3>
                            <input
                                className="map-search"
                                placeholder="지역명을 검색해주세요."
                            ></input>
                        </div>

                        <div className="content-box">
                            <div className="map-filter">
                                <p>
                                    근처매장: <span>N개</span>
                                </p>
                                <button className="filter-btn">
                                    <p>필터</p>
                                    <VscListFilter
                                        color="white"
                                        size={20}
                                    />
                                </button>
                            </div>

                            <div className="map-result">
                                <ul className="result-content">
                                    <li className="store-name">
                                        <p>칼하트 nn점</p>
                                        <a className="distance">
                                            <p>233.km</p>
                                            <button onClick={openModal}>
                                                <IoIosArrowForward />
                                            </button>
                                        </a>
                                    </li>
                                    <li className="store-location">지점위치</li>
                                    <li className="opening">
                                        <span className="close">영업종료</span>
                                        <p>영업 시작 시간 15:00</p>
                                    </li>
                                    <li></li>
                                </ul>
                                {isOpen && <Modal closeModal={closeModal} />}
                            </div>
                        </div>
                    </div>
                    <div className="map-location">right-area</div>
                </div>
            </div>
        </div>
    );
}
