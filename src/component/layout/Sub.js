import React from 'react';
import '../assets/styles/sub.scss';

//utils
import Toggle from '../utils/toggle';

//ICON
import cartIcon from '../assets/img/cart.png';
import arrowIcon from '../assets/img/arrow.png';

//PAGE
import VisualSub from '../routes/visualsub';
import Filter from '../routes/filter';
import ProductList from '../routes/ProductList';
import Sidebar from '../routes/Sidebar';

export default function SubPage() {
    return (
        <div>
            <VisualSub></VisualSub>
            <div className="sub-inner inner">
                <div className="sidebar">
                    <nav className="side-menu">
                        <strong>TOP</strong>
                        <ul>
                            <li className="all">전체</li>
                            <li>자켓</li>
                            <li>스웨터</li>
                            <li>니트</li>
                            <li>셔츠</li>
                            <li>티셔츠</li>
                        </ul>
                    </nav>
                    {/* <Filter></Filter> */}
                </div>

                <div className="main-content">
                    <div className="sort-block">
                        <div className="gender-box">왼쪽</div>

                        <div className="sort-box">
                            <a className="division">
                                <span>품절상품제외</span>
                                <input type="checkbox"></input>
                            </a>

                            <a className="division newtap">
                                <span>신상품순</span>
                                <div className="icon">
                                    <img src={arrowIcon}></img>
                                </div>
                            </a>

                            <a className="division filtertap">
                                <span>필터</span>
                                <div className="icon">
                                    <Toggle
                                        title=""
                                        // content={<Filter />}
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* 
                    <ul className="content-block">
                        <li>
                            <div className="product-info">
                                <div className="product-img">상품이미지</div>
                                <div className="label">
                                    <strong className="label-new">new</strong>
                                    <strong className="label-best">best</strong>
                                </div>
                                <strong className="product-name">상품이름</strong>
                                <p className="product-desc">상품정보</p>
                                <strong className="product-price">₩ 상품가격</strong>
                                <button className="cart-btn">
                                    <img src={cartIcon}></img>
                                </button>
                            </div>
                        </li>
                    </ul> */}

                    <ProductList></ProductList>
                </div>
            </div>
        </div>
    );
}
