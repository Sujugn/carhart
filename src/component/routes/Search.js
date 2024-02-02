import React from 'react';
import '../assets/styles/Search.scss';

//icon
import { CiSearch } from 'react-icons/ci';

export default function SearchSidebar() {
    return (
        <div className="search-sidebar">
            <div className="search-title">
                <h3>SEARCH</h3>
            </div>

            <div className="search-input">
                <CiSearch size={22} />
                <input placeholder="검색어를 입력하세요"></input>
            </div>

            <div className="recent-block">
                <p className="title">최근 검색어</p>

                <div
                    className="flex"
                    style={{
                        display: 'flex',
                    }}
                >
                    <ul className="item-box">
                        <li className="item-img">이미지</li>
                        <li className="item-name">상품이름</li>
                        <li className="item-desc">상품설명</li>
                        <li className="item-price">상품가격</li>
                    </ul>

                    <ul className="item-box">
                        <li className="item-img">이미지</li>
                        <li className="item-name">상품이름</li>
                        <li className="item-desc">상품설명</li>
                        <li className="item-price">상품가격</li>
                    </ul>

                    <ul className="item-box">
                        <li className="item-img">이미지</li>
                        <li className="item-name">상품이름</li>
                        <li className="item-desc">상품설명</li>
                        <li className="item-price">상품가격</li>
                    </ul>
                </div>
            </div>

            <div className="popular-block">
                <p className="title">인기 검색어</p>
                <ul className="item-box">
                    <li className="popular">
                        <span className="num">1.</span>
                        <p className="item-name">상품명</p>
                    </li>
                    <li className="popular">
                        <span className="num">2.</span>
                        <p className="item-name">상품명</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
