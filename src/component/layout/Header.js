import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import mandata from '../../data/madata.json';
import logoWhite from '../assets/img/logoWhite.png';
import SearchModal from '../Modal/SearchModal';
import CartModal from '../Modal/CartModal';
import Test from '../../cotainer/auth/Test';
import styled from 'styled-components';

//카테고리 호버이미지
/*TOP*/
import topImg from '../assets/img/outer.png';
import topImg2 from '../assets/img/shirt.png';

/*BOTTOM*/
import bottomImg from '../assets/img/pants.png';
import bottomImg2 from '../assets/img/card.png';

/*ACC*/
import accImg from '../assets/img/hat.png';
import accImg2 from '../assets/img/shoes.png';

/*PROMOTION*/
import promotionImg from '../assets/img/promotion1.png';
import promotionImg2 from '../assets/img/promotion2.png';

/*NEW */
import newImg from '../assets/img/bag.png';
import newImg2 from '../assets/img/outer2.png';

/*SALE */
import saleImg from '../assets/img/FW.png';
import saleImg2 from '../assets/img/arrow.png';

/*BRAND */
import brandImg from '../assets/img/wip.png';
import brandImg2 from '../assets/img/wip2.png';

const Header = (props) => {
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [activeLabel, setActiveLabel] = useState(null);

    const getLabelImg = (activeLabel, menuItems) => {
        const menuItem = menuItems.find((item) => item.label === activeLabel);
        return menuItem && menuItem.categoryimg ? menuItem.categoryimg : null;
    };

    const handleNavHover = () => {
        setIsNavHovered(true);
    };

    const handleNavLeave = () => {
        setIsNavHovered(false);
        setActiveSubMenu(null);
    };

    //카테고리 이미지
    const [categoryImg, setCategoryImg] = useState([]);
    const handleLavelHover = (images) => {
        setCategoryImg(images);
    };

    //서브메뉴
    const menuItems = [
        {
            label: 'NEW',
            to: '/new',
            categoryimg: [newImg, newImg2],
        },
        {
            label: 'TOP',
            to: '/top',
            categoryimg: [topImg, topImg2],
            subMenu: [
                { label: '자켓', to: '/jacket' },
                { label: '스웨트', to: '/sweater' },
                { label: '니트', to: '/knit' },
                { label: '셔츠', to: '/shirt' },
                { label: '티셔츠', to: '/tshirt' },
            ],
        },
        {
            label: 'BOTTOM',
            to: '/bottom',
            categoryimg: [bottomImg, bottomImg2],
            subMenu: [
                { label: '바지', to: '/pants' },
                { label: '반바지', to: '/shortpant' },
                { label: '스커트', to: '/skirt' },
            ],
        },
        {
            label: 'ACC',
            to: '/acc',
            categoryimg: [accImg, accImg2],
            subMenu: [
                { label: '모자', to: '/cap' },
                { label: '가방', to: '/bag' },
                { label: '악세사리', to: '/Accessory' },
                { label: '가젯', to: '/gadget' },
                { label: '신발', to: '/shoes' },
            ],
        },
        {
            label: 'RPOMOTION',
            to: '/promotion',
            categoryimg: [promotionImg, promotionImg2],
            subMenu: [
                { label: '콜라보레이션', to: '/collaboration' },
                { label: '특집', to: '/special' },
            ],
        },
        {
            label: 'SALE',
            to: '/sale',
            categoryimg: [saleImg, saleImg2],
            subMenu: [{ label: '세일', to: '/sale' }],
        },
        {
            label: 'BRAND',
            to: '/brand',
            categoryimg: [brandImg, brandImg2],
            subMenu: [
                { label: '브랜드스토리', to: '/brandstroy' },
                { label: '룩북', to: '/lookbook' },
                { label: '매장', to: '/map' },
            ],
        },
    ];

    const gnbMenu = [
        { title: '장바구니', to: '/cart' },
        { title: '연습창', to: '/pratice' },
        { title: '로그인', to: '/login' },
        { title: '회원가입', to: '/test' },
        { title: '주문조회', to: '/userfind' },
        { title: '디테일페이지', to: '/detail' },
        { title: '서브페이지', to: '/sub' },
        { title: '지도', to: '/Map' },
        { title: '마이페이지', to: '/mypage' },
    ];

    return (
        <header className="header">
            <div className="header-inner inner">
                <nav className="gnb">
                    <div className="logo-block">
                        <Link to="/">
                            <img
                                src={logoWhite}
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    <ul className="login-block flex">
                        {gnbMenu.map((menuItem, index) => (
                            <li key={index}>
                                <Link to={menuItem.to}>{menuItem.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header-menu"
                    onMouseEnter={handleNavHover}
                    onMouseLeave={handleNavLeave}
                >
                    <ul className="menu-items">
                        {menuItems.map((menuItem, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => handleLavelHover(menuItem.categoryimg)}
                            >
                                <Link to={menuItem.to}>{menuItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                    {isNavHovered && (
                        <div className="nav-items">
                            <div className="inner">
                                <ul className="flex">
                                    {menuItems.map((menuItem, index) => (
                                        <li
                                            className="flex-column"
                                            key={index}
                                        >
                                            {menuItem.subMenu &&
                                                menuItem.subMenu.map((subMenuItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        to={subMenuItem.to}
                                                    >
                                                        {subMenuItem.label}
                                                    </Link>
                                                ))}
                                        </li>
                                    ))}
                                </ul>

                                <div className="category-img">
                                    {categoryImg.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                        ></img>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
