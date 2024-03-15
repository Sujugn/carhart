import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ProductList.scss';
import { BsCart2 } from 'react-icons/bs';

export default function ProductList({
    items,
    priceFilter,
    handleChange,
    sortByLowPrice,
    sortByHighPrice,
    excludeSoldOut,
    handleExcludeSoldout,
}) {
    const navigate = useNavigate();

    const handleDetailClick = (itemId) => {
        navigate(`/Detail/${itemId}`);
    };

    //호버시 item 이미지 변경
    const [hoveredItemId, setHoveredItemId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseLeave = () => {
        setHoveredItemId(null);
    };

    // 품절제외 필터
    const filteredSoldout = excludeSoldOut ? items.filter((item) => !item.issoldout) : items;

    return (
        <div className="productlist">
            <ul className="content-block">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleDetailClick(item.id)}
                    >
                        <div className="product-info">
                            <div className="product-img">
                                <img
                                    src={
                                        hoveredItemId === item.id ? item.images[0].hoverimg : item.images[0].defaultimg
                                    }
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                    alt={item.code}
                                    className="default-img"
                                />
                                {item.issoldout && (
                                    <div className="sold-out">
                                        <p>sold out</p>
                                    </div>
                                )}
                            </div>
                            <div></div>
                            <div className="label">
                                <strong className="label-new">{item.label[0].new}</strong>
                                {/* <strong className="label-best">{item.label[1].best}</strong> */}
                            </div>
                        </div>
                        <div className="product-text">
                            <strong className="product-name">{item.title}</strong>
                            <p className="product-desc">{item.desc}</p>
                            <strong className="product-price">₩ {item.price.toLocaleString()}</strong>
                        </div>

                        <button className="cart-btn">
                            <BsCart2 size={30} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
