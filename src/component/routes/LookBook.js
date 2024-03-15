import React, { useState } from 'react';
import '../assets/styles/LookBook.scss';

/* 이미지 */

//기본 이미지
import look01 from '../assets/img/look01.png';

//탭 이미지
// import look01tab from '../assets/img/look01.png';

//LOOKBOOK 01
import lookBook01Outer from '../assets/img/lookbook01_outer.png';
import lookbook01Shirt from '../assets/img/lookbook01_shirt.png';
import { use } from 'base';

export default function LookBook() {
    //데이터
    const lookbookData = [
        {
            id: 'look01',
            img: look01,
            items: [
                {
                    type: 'shirt',
                    name: '긴팔 리게티 셔츠 리게티 스트라이프, 벤쿠버 왁스/블랙',
                    desc: 'L/S LIGETY SHIRT',
                    option: 'LIGETY STRIPE, WAX/BLACK',
                    code: 'CA24SSSHLS13088001',
                    id: 1, //추가 데이터 작업후 수정(NEW),
                    price: 155000,
                    url: 1, //동적으로 추가
                    imgUrl: lookbook01Shirt,
                },
                {
                    type: 'jacket',
                    name: 'OG 초어 코트 블랙 리지드',
                    desc: 'OG CHORE COAT',
                    option: 'BLACK RIGID',
                    code: 'CA24SSJAJL00691001',
                    id: 2,
                    price: 238000,
                    url: 2,
                    imgUrl: lookBook01Outer,
                },
            ],
        },
    ];

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

                        {/* <div className="change-block">
                            {selectedImg && (
                                <img
                                    className="change-img"
                                    src={selectedImg}
                                    alt={`Lookbook Tab Image ${lookbook.id}`}
                                />
                            )}
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
