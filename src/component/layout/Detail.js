import React from 'react';
import '../assets/styles/Detail.scss';
import { Link } from 'react-router-dom';

//PAGE
import Tabs from '../routes/tabs';

//ICON
import deliveryIcon from '../assets/img/delivery.png';
import cardIcon from '../assets/img/card.png';
import npayIcon from '../assets/img/npay.png';
import sizeIcon from '../assets/img/size.png';
import facebookIcon from '../assets/img/facebook.png';
import twitterIcon from '../assets/img/twitter.png';
import heartredIcon from '../assets/img/heartred.png';

export default function DetailPage() {
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

                    <div className="matching-product sub-product">
                        <p className="title">함께 착용한 상품</p>
                        <ul>
                            <li>
                                <div className="product-img">상품이미지</div>
                                <p className="product-name">상품이름</p>
                                <p className="product-color">색상</p>
                                <strong className="product-price">가격</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="recent-product  sub-product">
                        <p className="title">최근 본 상품</p>
                        <ul>
                            <li>
                                <div className="product-img">상품이미지</div>
                                <p className="product-name">상품이름</p>
                                <p className="product-color">색상</p>
                                <strong className="product-price">가격</strong>
                            </li>

                            <li>
                                <div className="product-img">상품이미지</div>
                                <p className="product-name">상품이름</p>
                                <p className="product-color">색상</p>
                                <strong className="product-price">가격</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-form">
                    <div className="desc">
                        <strong className="product-name">상품명</strong>

                        <div className="label">
                            <span className="label-new">new</span>
                            <span className="label-best">best</span>
                        </div>

                        <div className="product-sns">
                            <div className="rating">별점</div>
                            <div className="sns-box">
                                <button className="wish-btn">
                                    <img src={heartredIcon}></img>
                                </button>
                                <button className="facebook-btn">
                                    <img src={facebookIcon}></img>
                                </button>
                                <button className="twitter-btn">
                                    <img src={twitterIcon}></img>
                                </button>
                            </div>
                        </div>

                        <strong className="product-price">가격</strong>
                        <p className="product-reserve">적립금액</p>
                    </div>
                    <hr />

                    <div className="delivery">
                        <ul>
                            <li className="title">
                                <div className="icon">
                                    <img src={deliveryIcon}></img>
                                </div>
                                배송정보
                            </li>

                            <li className="desc">
                                10만원이하 3,000원, 10만원이상 무료배송
                                <br />
                                <span>2시이전 주문시 내일(수) 도착 예정</span>
                            </li>
                        </ul>

                        <ul>
                            <li className="title">
                                <div className="icon">
                                    <img src={cardIcon}></img>
                                </div>
                                무이자할부
                            </li>
                            <li className="desc">
                                최대 6개월
                                <span>(단, 일시불 할인 및 법인 카드 사용 불가)</span>
                            </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="option">
                        <div className="product-color">
                            <p>색상</p>
                            <ul className="colors">
                                <li>색상1</li>
                                <li>색상2</li>
                                <li>색상3</li>
                            </ul>
                        </div>
                        <div className="product-size">
                            <p>사이즈</p>
                            <ul className="sizes">
                                <li>xs</li>
                                <li>s</li>
                                <li>m</li>
                                <li>l</li>
                                <li>xl</li>
                            </ul>
                        </div>
                    </div>

                    <div className="purchase">
                        <div className="naver">
                            <div className="flex-box">
                                <div className="icon">
                                    <img src={npayIcon}></img>
                                </div>
                                <p>네이버페이 포인트 혜택</p>
                            </div>
                            <span>최대 3퍼센트 적립</span>
                        </div>

                        <button className="size-btn">
                            <div className="icon">
                                <img src={sizeIcon} />
                            </div>
                            <strong>고객님의사이즈를 찾아보세요</strong>
                        </button>

                        <div className="flex-box">
                            <button className="cart-btn">장바구니</button>
                            <button className="purchase-btn">구매하기</button>
                        </div>

                        <p className="delivery-desc">
                            주문/배송/반품 등 일반 문의는 1:1문의를 이용해 주시기 바랍니다.{' '}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs></Tabs>
        </div>
    );
}
