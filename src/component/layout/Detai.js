import React from 'react';
import '../assets/styles/Detail.scss';

import { Link } from 'react-router-dom';

export default function DetaiPage() {
    return (
        <div className="detailpage">
            <div className="detailpage-inner inner">
                <div className="product-img">
                    <div className="style-name">
                        <p>스타일 코드</p>
                        <strong>1111111</strong>
                    </div>

                    <div className="main-block">메인이미지</div>
                    <ul className="sub-block">
                        <li>
                            <Link>서브이미지</Link>
                        </li>
                        <li>
                            <Link>서브이미지</Link>
                        </li>
                        <li>
                            <Link>서브이미지</Link>
                        </li>
                        <li>
                            <Link>서브이미지</Link>
                        </li>
                        <li>
                            <Link>서브이미지</Link>
                        </li>
                    </ul>
                </div>
                <div className="product-form">
                    <div>
                        <strong className="product-name">상품명</strong>

                        <div>
                            <span>new</span>
                            <span>best</span>
                        </div>

                        <div>
                            <div className="rating">별점</div>
                            <button className="wish-btn">찜하기</button>
                            <button className="facebook-btn">페북</button>
                            <button className="twiter-btn">찜</button>
                        </div>

                        <strong className="product-price">가격</strong>
                        <p className="reserve">적립금액</p>
                    </div>
                    <hr />

                    <div></div>
                </div>
            </div>
        </div>
    );
}
