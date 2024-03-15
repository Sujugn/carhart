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
    const category = [
        { title: '전체' },
        { title: '자켓' },
        { title: '스웨터' },
        { title: '니트' },
        { title: '셔츠' },
        { title: '티셔츠' },
    ];

    return (
        <div>
            <VisualSub></VisualSub>
            <div className="sub-inner inner">
                <div className="sidebar">
                    <nav className="side-menu">
                        <strong>TOP</strong>
                        <ul>
                            {category.map((item) => {
                                <li>{item.title}</li>;
                            })}
                        </ul>
                    </nav>
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
                                    // onClick={handleExcludeItem}
                                ></input>
                                <p>품절상품제외</p>
                            </label>

                            <a className="division newtap">
                                <select onChange={handleChange}>
                                    <option>신상품순</option>
                                    {/* <option value={sortByLowPrice}>낮은가격순</option>
                                            <option value={sortByHighPrice}>높은가격순</option> */}
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
                        // sortByLowPrice={sortByLowPrice}
                        // sortByHighPrice={sortByHighPrice}
                        // soldoutItems={soldoutItems}
                        // handleExcludeItem={handleExcludeItem}
                        items={items}
                    />
                </div>
            </div>
        </div>
    );
}
