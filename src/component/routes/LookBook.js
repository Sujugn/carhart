import React, { useState } from 'react';
import '../assets/styles/LookBook.scss';

/* 이미지 */

//기본 이미지
import look01 from '../assets/img/look01.png';
import look02 from '../assets/img/look02.png';

//탭 이미지
import look01tab from '../assets/img/look01.png';
import look02tab from '../assets/img/look02.png';

export default function LookBook() {
    //데이터
    const lookbookData = [{ id: 'look01', img: look01, tabimg: look01tab }];

    const [selectedImg, setselectedImg] = useState(null);

    const handleImgClick = (id) => {
        const selectedLookbook = lookbookData.find((lookbook) => lookbook.id === id);
        setselectedImg(selectedLookbook.tabimg);
    };

    return (
        <div className="lookbook">
            <div className="lookbook-inner inner">
                <h3 className="title">LOOK BOOK - S/S 2024</h3>
                {lookbookData.map((lookbook) => (
                    <div
                        className="content"
                        key={lookbook.id}
                    >
                        <div className="tab-block flex">
                            <div className="content-left">
                                <div
                                    className="lookbook-img"
                                    onClick={() => handleImgClick(lookbook.id)}
                                    style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                                >
                                    <img
                                        src={lookbook.img}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            overflow: ' hidden',
                                        }}
                                    ></img>
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="content-top">
                                    <div className="lookbook-video">
                                        <video>
                                            <source
                                                src="example.mp4"
                                                type="video/mp4"
                                            ></source>
                                        </video>
                                    </div>
                                </div>

                                <div className="content-bottom flex">
                                    <div className="lookbook-img"></div>
                                    <div className="lookbook-img"></div>
                                </div>
                            </div>
                        </div>

                        <div className="change-block">
                            {selectedImg && (
                                <img
                                    className="change-img"
                                    src={selectedImg}
                                    alt={`Lookbook Tab Image ${lookbook.id}`}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
