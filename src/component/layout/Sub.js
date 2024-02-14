import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/styles/sub.scss';
import axios from 'axios';

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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('/');
                setProducts(result.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

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

                    <ProductList products={products}></ProductList>
                </div>
            </div>
        </div>
    );
}
