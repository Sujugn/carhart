import React, { useState } from 'react';
import '../assets/styles/Header.scss';
import { Link, NavLink } from 'react-router-dom';
import logoWhite from '../assets/img/logoWhite.png';
import SearchModal from '../Modal/SearchModal';
import CartModal from '../Modal/CartModal';

export default function Header({ openModal }) {
    const categories = [
        {
            id: 'new',
            name: 'NEW',
            image: 'NEW 이미지',
        },
        {
            id: 'top',
            name: 'TOP',
            image: 'top 이미지',
            submenu: [
                { id: 'top-sweat', name: '스웨트', image: '스웨트 이미지' },
                { id: 'top-knit', name: '니트', image: '니트 이미지' },
                { id: 'top-shirt', name: '셔츠', image: '셔츠 이미지' },
                { id: 'top-skirt', name: '스커트', image: '스커트 이미지' },
            ],
        },
        {
            id: 'bottom',
            name: 'BOTTOM',
            image: 'bottom 이미지',
            submenu: [
                { id: 'bottom-pant', name: '바지', image: '바지 이미지' },
                { id: 'bottom-shorts', name: '반바지', image: '반바지 이미지' },
                { id: 'bottom-skirt', name: '스커트', image: '스커트 이미지' },
            ],
        },
        {
            id: 'acc',
            name: 'ACC',
            image: 'ACC 이미지',
            submenu: [
                { id: 'ACC-CAP', name: '모자', image: '모자 이미지' },
                { id: 'ACC-BAG', name: '가방', image: '가방 이미지' },
                { id: 'ACC-ACCESSORY', name: '악세사리', image: '악세사리 이미지' },
                { id: 'ACC-GADGET', name: '가젯', image: '가젯 이미지' },
                { id: 'ACC-SHOES', name: '신발', image: '신발 이미지' },
                { id: 'ACC-UNDERWEAR', name: '언더웨어', image: '언더웨어 이미지' },
            ],
        },
        {
            id: 'promotion',
            name: 'PROMOTION',
            image: 'PROMOTION 이미지',
            submenu: [
                { id: 'promotion-collaboration', name: '콜라보레이션', image: '콜라보레이션 이미지' },
                { id: 'promotion-special', name: '특집', image: '특집 이미지' },
            ],
        },
        { id: 'sale', name: 'SALE', submenu: [{ id: 'sale', name: '세일' }] },
        {
            id: 'brand',
            name: 'BRAND',
            submenu: [
                { id: 'brand-story', name: '브랜드스토리', image: '브랜드스토리 이미지' },
                { id: 'brand-lookbook', name: '룩북', image: '룩북 이미지' },
                { id: 'brand-map', name: '매장', image: '매장 이미지' },
            ],
        },
    ];

    // const [hoveredCategory, setHoveredCategory] = useState(null);
    // const [hoveredSubItem, setHoveredSubItem] = useState(null);

    // const handleCategoryMouseEnter = (categoryId) => {
    //     setHoveredCategory(categoryId);
    //     setHoveredSubItem(null); // 새로운 카테고리에 진입하면 서브 아이템 초기화
    // };

    // const handleSubItemMouseEnter = (subItemId) => {
    //     setHoveredSubItem(subItemId);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredCategory(null);
    //     setHoveredSubItem(null);
    // };

    // const SubmenuItem = ({ subItem, isHovered }) => (
    //     <div
    //         key={subItem.id}
    //         className={`submenu-item ${isHovered ? 'hovered' : ''}`}
    //         onMouseEnter={() => handleSubItemMouseEnter(subItem.id)}
    //         onMouseLeave={handleMouseLeave}
    //     >
    //         <img
    //             src={subItem.image}
    //             alt={subItem.name}
    //         />
    //         <NavLink to={`/your-path/${subItem.id}`}>
    //             <span>{subItem.name}</span>
    //         </NavLink>
    //     </div>
    // );

    return (
        <div className="header">
            <div className="header-inner">
                <nav className="gnb">
                    <div className="logo-block">
                        <Link to="/">
                            <img
                                src={logoWhite}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <div className="login-block">
                        <Link to="/cart">장바구니</Link>

                        <Link to="/pratice">연습창</Link>
                        <Link to="/login">로그인</Link>
                        <Link to="/join">회원가입</Link>
                        <Link>주문조회</Link>
                        <Link to="/Detail">디테일페이지</Link>
                        <Link to="/sub">서브페이지</Link>
                        <Link to="/toggle">토글페이지</Link>
                        <Link to="/Map">지도찾기</Link>
                        <Link onClick={() => openModal('Search', <SearchModal />)}>검색</Link>
                        <Link onClick={() => openModal('미니장바구니', <CartModal />)}>미니장바구니</Link>
                    </div>
                </nav>
                {/* <nav className="lnb">
                    <div className="lnb-block">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="menu-item-wrapper"
                                onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink
                                    id={category.id}
                                    to={`/your-path/${category.id}`}
                                >
                                    <span>{category.name}</span>
                                </NavLink>

                                <div
                                    className={`submenu-wrapper ${hoveredCategory === category.id ? 'visible' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        top: '106px',
                                        zIndex: 999,
                                        backgroundColor: 'white',
                                        fontSize: '12px',
                                    }}
                                >
                                    <div className="submenu">
                                        {category.submenu &&
                                            category.submenu.map((subItem) => (
                                                <SubmenuItem
                                                    key={subItem.id}
                                                    subItem={subItem}
                                                    isHovered={hoveredCategory === category.id}
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rank-block">
                        <p>인기순위</p>
                    </div>
                </nav> */}
            </div>
        </div>
    );
}
