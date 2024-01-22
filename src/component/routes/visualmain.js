import React from 'react';
import '../assets/styles/visualmain.scss';

import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function VisualMain() {
    return (
        <div className="visualmain">
            <div className="visual-img">동적이미지</div>

            <div className="visualmain-inner inner">
                <Link to="/Detail">디테일페이지</Link>
            </div>
        </div>
    );
}
