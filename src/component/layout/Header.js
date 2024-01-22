import React from 'react';
import '../assets/styles/Header.scss';
import { Link, NavLink } from 'react-router-dom';

//공통
import logoWhite from '../assets/img/logoWhite.png';

export default function Header() {
    return (
        <div className="header">
            <div className="header-inner">
                <nav className="gnb">
                    <div className="logo-block">
                        <Link to="/">
                            <img src={logoWhite} />
                        </Link>
                    </div>

                    <div className="login-block">
                        <Link to="/login"> 로그인 </Link>
                        <Link to="/join"> 회원가입 </Link>
                        <Link> 주문조회 </Link>
                        <Link> 검색</Link>
                        <Link to="/cart"> 장바구니 </Link>
                    </div>
                </nav>

                <nav className="lnb">
                    <div className="lnb-block">
                        <NavLink activeclassname="active">NEW</NavLink>
                        <NavLink>TOP</NavLink>
                        <NavLink>BOTTOM</NavLink>
                        <NavLink>ACC</NavLink>
                        <NavLink>PROMOTION</NavLink>
                        <NavLink>SALE</NavLink>
                        <NavLink>BRAND</NavLink>
                    </div>

                    <div className="rank-block">
                        <p>인기순위</p>
                    </div>
                </nav>
            </div>
        </div>
    );
}
