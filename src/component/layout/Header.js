import React, { useState } from 'react';
import '../assets/styles/Header.scss';
import { Link, NavLink } from 'react-router-dom';

// 공통
import logoWhite from '../assets/img/logoWhite.png';
import Sidebar from '../routes/Sidebar';
import SearchSidebar from '../routes/Search';

export default function Header() {
    // const [isOpenSidebar, setOpenSidebar] = useState(false);
    // const handleSidebar = () => {
    //     setOpenSidebar(!isOpenSidebar);
    // };

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
                { id: 'top-sweat', name: '스웨트' },
                { id: 'top-knit', name: '니트' },
                { id: 'top-shirt', name: '셔츠' },
                { id: 'top-skirt', name: '스커트' },
            ],
        },
        {
            id: 'bottom',
            name: 'BOTTOM',
            image: 'bottom 이미지',
            submenu: [
                { id: 'bottom-pant', name: '바지' },
                { id: 'bottom-shorts', name: '반바지' },
                { id: 'bottom-skirt', name: '스커트' },
            ],
        },
        {
            id: 'acc',
            name: 'ACC',
            image: 'ACC 이미지',
            submenu: [
                { id: 'ACC-CAP', name: '모자' },
                { id: 'ACC-BAG', name: '가방' },
                { id: 'ACC-ACCESSORY', name: '악세사리' },
                { id: 'ACC-GADGET', name: '가젯' },
                { id: 'ACC-SHOES', name: '신발' },
                { id: 'ACC-UNDERWEAR', name: '언더웨어' },
            ],
        },
        {
            id: 'promotion',
            name: 'PROMOTION',
            image: 'PROMOTION 이미지',
            submenu: [
                { id: 'promotion-collaboration', name: '콜라보레이션' },
                { id: 'promotion-special', name: '특집' },
            ],
        },
        { id: 'sale', name: 'SALE', submenu: [{ id: 'sale', name: '세일' }] },
        {
            id: 'brand',
            name: 'BRAND',
            submenu: [
                { id: 'brand-story', name: '브랜드스토리' },
                { id: 'brand-lookbook', name: '룩북' },
                { id: 'brand-map', name: '매장' },
            ],
        },
    ];
    // const handleMenuHover = (categoryId) => {
    //     setOpenMenu(categoryId);
    //     const hoveredCategory = categories.find((category) => category.id === categoryId);
    //     if (hoveredCategory && hoveredCategory.submenu) {
    //         setHoverMenuItems(hoveredCategory.submenu);
    //     } else {
    //         setHoverMenuItems([]);
    //     }
    // };

    // const handleMenuLeave = () => {
    //     setOpenMenu(null);
    // };

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
                        <Link to="/login">로그인</Link>
                        <Link to="/join">회원가입</Link>
                        <Link>주문조회</Link>
                        <a>
                            <p>검색</p>
                            <Sidebar width={600}>
                                <SearchSidebar />
                            </Sidebar>
                        </a>
                        {/* <Sidebar width={600}>
                            <SearchSidebar />
                        </Sidebar> */}
                        <Link to="/cart">장바구니</Link>
                    </div>
                </nav>

                <nav className="lnb">
                    <div className="lnb-block">
                        {/* {categories.map((category) => (
                            <div
                                key={category.id}
                                className="menu-item-wrapper"
                            >
                                <NavLink
                                    id={category.id}
                                    to={`/your-path/${category.id}`}
                                    className={`menu-item ${openMenu === category.id ? 'expanded' : ''}`}
                                    onMouseEnter={() => handleMenuHover(category.id)}
                                    onMouseLeave={handleMenuLeave}
                                >
                                    <span>{category.name}</span>
                                </NavLink>
                            </div>
                        ))} */}
                    </div>

                    <div className="rank-block">
                        <p>인기순위</p>
                    </div>
                </nav>

                <nav
                    className="hover-menu"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* {hoverMenuItems.map((menuItem) => (
                        <NavLink
                            key={menuItem.id}
                            to={`/your-path/${menuItem.id}`}
                        >
                            <span>{menuItem.name}</span>
                        </NavLink>
                    ))} */}
                </nav>
            </div>
        </div>
    );
}
