import React from 'react';
import '../assets/styles/cart.scss';

//ICON
import { RiHeart3Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';

export default function CartPage() {
    return (
        <div className="cart">
            <div className="cart-inner inner">
                <div className="list-block">
                    <div className="title">
                        <div className="sub-title">
                            <h2>장바구니</h2>
                            <h3>상품1개</h3>
                        </div>
                        <a className="all-delete">전체삭제</a>
                    </div>
                    <div className="list">
                        <div className="sort-name">
                            <p className="item-info">상품정보</p>
                            <p className="item-quantity">수량</p>
                            <p className="item-price">주문금액</p>
                        </div>
                        <div className="sort-content">
                            <div className="item-info">
                                <div className="img">상품이미지</div>
                                <div className="desc">
                                    <p>상품설명</p>
                                    <div className="option">
                                        <p>설명</p>
                                        <p>수량</p>
                                    </div>
                                    <a>
                                        <RiHeart3Line size={20} />
                                        위시리스트 추가
                                    </a>
                                </div>
                            </div>
                            <div className="item-quantity">
                                <div className="quantity-input">
                                    <button className="quantity-minus quantity-btn">-</button>
                                    <input
                                        type="text"
                                        className="quantity"
                                    ></input>
                                    <button className="quantity-plus quantity-btn">+</button>
                                </div>

                                <div className="quantity-change">
                                    <a className="change-btn">옵션변경</a>
                                </div>
                            </div>
                            <div className="item-price">
                                <strong>300,000원</strong>
                                <button className="delete-btn">
                                    <TfiClose
                                        size={15}
                                        color="gray"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="total-block">
                    <div className="cart-order">
                        <h3>주문금액</h3>
                        <div className="list-item">
                            <p className="title">상품금액</p>
                            <span className="price">2,000원</span>
                        </div>

                        <div className="list-item">
                            <p className="title">총 할인 금액</p>
                            <span className="sale">0</span>
                        </div>

                        <div className="list-item">
                            <p className="title">배송비</p>
                            <span className="delivery">무료배송</span>
                        </div>

                        <div className="total-price">
                            <p className="title">결제 예상 금액</p>
                            <strong className="price">1,000,000원</strong>
                        </div>

                        <div className="order-btn">
                            <button>
                                <strong
                                    style={{
                                        marginRight: '5px',
                                    }}
                                >
                                    1,000,000원
                                </strong>
                                <strong>결제하기</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
