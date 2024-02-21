// import React, { useState } from 'react';
// import '../assets/styles/Header.scss';

// export default function Header({ openModal }) {
//     return (
//         <div className="header">
//             <div className="header-inner">
//                 <nav className="gnb">
//                     <div className="logo-block">
//                         <Link to="/">
//                             <img
//                                 src={logoWhite}
//                                 alt="Logo"
//                             />
//                         </Link>
//                     </div>

//                     <div className="login-block">
//                         <Link to="/cart">장바구니</Link>

//                         <Link to="/pratice">연습창</Link>
//                         <Link to="/login">로그인</Link>
//                         <Link to="/join">회원가입</Link>
//                         <Link>주문조회</Link>
//                         <Link to="/Detail">디테일페이지</Link>
//                         <Link to="/sub">서브페이지</Link>
//                         <Link to="/toggle">토글페이지</Link>
//                         <Link to="/Map">지도찾기</Link>
//                         <Link onClick={() => openModal('Search', <SearchModal />)}>검색</Link>
//                         <Link onClick={() => openModal('미니장바구니', <CartModal />)}>미니장바구니</Link>
//                     </div>
//                 </nav>
//                 <nav className="lnb">
//                     <div className="lnb-block">
//                         <ul className="flex">
//                             <li>NEW</li>
//                             <li>TOP</li>
//                             <li>BOTTOM</li>
//                             <li>ACC</li>
//                             <li>PROMOTION</li>
//                             <li>SALES</li>
//                             <li>BRAND</li>
//                         </ul>
//                     </div>

//                     <div className="rank-block">
//                         <p>인기순위</p>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import mandata from '../../data/madata.json';
import logoWhite from '../assets/img/logoWhite.png';
import SearchModal from '../Modal/SearchModal';
import CartModal from '../Modal/CartModal';

//카테고리 호버이미지
/*TOP*/
import topImg from '../assets/img/card.png';
import topImg2 from '../assets/img/card.png';

/*BOTTOM*/
import bottomImg from '../assets/img/card.png';
import bottomImg2 from '../assets/img/card.png';

/*TOP*/

/*ACC*/

/*PROMOTION*/

const Header = () => {
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleNavHover = () => {
        setIsNavHovered(true);
    };

    const handleNavLeave = () => {
        setIsNavHovered(false);
        setActiveSubMenu(null);
    };

    const handleLabelHover = (label, img) => {
        setActiveSubMenu(label);
    };

    const menuItems = [
        {
            label: 'NEW',
            to: '/new',
            categoryimg: null,
        },
        {
            label: 'TOP',
            to: '/top',
            categoryimg: topImg,
            categoryimg2: topImg2,
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
            categoryimg: null,
            subMenu: [
                { label: '바지', to: '/pants' },
                { label: '반바지', to: '/shortpant' },
                { label: '스커트', to: '/skirt' },
            ],
        },
        {
            label: 'ACC',
            to: '/acc',
            categoryimg: null,
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
            categoryimg: null,
            subMenu: [
                { label: '콜라보레이션', to: '/collaboration' },
                { label: '특집', to: '/special' },
            ],
        },
        {
            label: 'SALE',
            to: '/sale',
            categoryimg: null,
            subMenu: [{ label: '세일', to: '/sale' }],
        },
        {
            label: 'BRAND',
            to: '/brand',
            categoryimg: null,
            subMenu: [
                { label: '브랜드스토리', to: '/brandstroy' },
                { label: '룩북', to: '/lookbook' },
                { label: '매장', to: '/map' },
            ],
        },
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

                    <div className="login-block">
                        <Link to="/cart">장바구니</Link>
                        <Link to="/pratice">연습창</Link>
                        <Link to="/login">로그인</Link>
                        <Link to="/register">회원가입</Link>
                        <Link>주문조회</Link>
                        <Link to="/Detail">디테일페이지</Link>
                        <Link to="/sub">서브페이지</Link>
                        <Link to="/toggle">토글페이지</Link>
                        <Link to="/Map">지도찾기</Link>
                        <Link>검색</Link>
                        {/* <Link onClick={() => openModal('미니장바구니', <CartModal />)}>미니장바구니</Link> */}
                    </div>
                </nav>
                <div
                    className="header-menu"
                    onMouseEnter={handleNavHover}
                    onMouseLeave={handleNavLeave}
                >
                    <ul className="menu-items">
                        {menuItems.map((menuItem, index) => (
                            <li key={index}>
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
                                                        onMouseEnter={() =>
                                                            handleLabelHover(subMenuItem.label, menuItem.categoryimg)
                                                        }
                                                        onMouseLeave={() => setActiveSubMenu(null)}
                                                    >
                                                        {subMenuItem.label}
                                                    </Link>
                                                ))}
                                        </li>
                                    ))}
                                </ul>
                                {menuItems.categoryimg && (
                                    // <div className="menu-img flex">
                                    //     <div className="category-img">
                                    //         <img
                                    //             src={activeMenuImg}
                                    //             alt="카테고리 01"
                                    //         />
                                    //     </div>
                                    //     <div className="category-img">
                                    //         <img
                                    //             src={activeMenuImg}
                                    //             alt="카테고리 02"
                                    //         />
                                    //     </div>
                                    // </div>

                                    <ul className="menu-items">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                {item.categoryimg && <img src={item.categoryimg}></img>},
                                                {item.categoryimg2 && <img src={item.categoryimg2}></img>}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
