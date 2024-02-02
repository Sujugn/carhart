import React from 'react';
import '../assets/styles/visualmain.scss';

import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function VisualMain() {
    return (
        <div className="visualmain">
            <div className="visual-img">동적이미지</div>

            <div className="visualmain-inner inner">
                <Link to="/Detail">디테일페이지</Link>
                <Link to="/sub">서브페이지</Link>
                <Link to="/toggle">토글페이지</Link>
                <Link to="/Map">지도찾기</Link>
            </div>
        </div>
    );
}
