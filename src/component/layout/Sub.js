import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/styles/sub.scss';

//ICON
import cartIcon from '../assets/img/cart.png';
import arrowIcon from '../assets/img/arrow.png';

//PAGE
import VisualSub from '../routes/visualsub';
import Filter from '../routes/filter';
import ProductList from '../routes/ProductList';
import Sidebar from '../routes/Sidebar';

export default function SubPage({ items }) {
    const [priceFilter, setPriceFilter] = useState('noPriceFilter');
    const handleChange = (event) => {
        setPriceFilter(event.target.value);
    };

    const sortByLowPrice = (item) => {};
    const sortByHighPrice = () => {};

    //품절상품 제외 filter
    //상품 품절
    const [excludeSoldOut, setExcludeSoldOut] = useState(false);

    const handleExcludeSoldOut = () => {
        setExcludeSoldOut(!excludeSoldOut);
    };

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
                    <p className="catrgory-name">동적카테고리명 (N)</p>
                    <div className="sort-block">
                        <div className="gender-box flex">
                            <ul className="flex">
                                <li>남자</li>
                                <li>여자</li>
                                <li>ALL</li>
                            </ul>
                        </div>

                        <div className="sort-box">
                            <label className="division soldout-filter">
                                <input
                                    type="checkbox"
                                    onClick={handleExcludeSoldOut}
                                ></input>
                                <p>품절상품제외</p>
                            </label>

                            <a className="division newtap">
                                <select onChange={handleChange}>
                                    <option>신상품순</option>
                                    <option value={sortByLowPrice}>낮은가격순</option>
                                    <option value={sortByHighPrice}>높은가격순</option>
                                </select>
                            </a>

                            <a className="division filtertap">
                                <span>필터</span>
                                <div className="icon"></div>
                            </a>
                        </div>
                    </div>

                    <ProductList
                        priceFilter={priceFilter}
                        handleChange={handleChange}
                        sortByLowPrice={sortByLowPrice}
                        sortByHighPrice={sortByHighPrice}
                        excludeSoldOut={excludeSoldOut}
                        handleExcludeSoldOut={handleExcludeSoldOut}
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
}
