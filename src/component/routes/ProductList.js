import React, { useState } from 'react';
import '../assets/styles/ProductList.scss';
import Users from '../data/Users';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Sidebar from './Sidebar';

export default function ProductList() {
    const [fetchedData, setFetchedData] = useState([]);

    const handleDataFetched = (data) => {
        setFetchedData(data);
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="productlist">
            {/* 데이터를 전달하는 콜백 함수를 Users 컴포넌트에 전달 */}
            <Users onDataFetched={handleDataFetched} />

            <ul className="content-block">
                {fetchedData.map((d) => (
                    <li key={d.id}>
                        <div className="product-info">
                            {/* 이미지를 동적으로 렌더링 */}
                            <div className="product-img">
                                <img
                                    src={d.img}
                                    alt={d.title}
                                />
                            </div>
                            <div className="label">
                                <strong className="label-new">new</strong>
                                <strong className="label-best">best</strong>
                            </div>
                        </div>
                        <strong className="product-name">{d.title}</strong>
                        <p className="product-desc">상품정보</p>
                        <div className="flex">
                            <strong className="product-price">₩ {d.price}</strong>
                            <button
                                className="cart-btn"
                                onClick={() => handleSidebarToggle}
                            >
                                <MdOutlineShoppingCart size={30} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
