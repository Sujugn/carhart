import React from 'react';
import '../assets/styles/visualsub.scss';

//IMG
import logoImg from '../assets/img/logo.png';

export default function VisualSub() {
    return (
        <div className="visualsub">
            <div className="visual-inner inner">
                <div className="visual">
                    이미지들어갈자리 visual-sub
                    <div className="visual-text">
                        <span className="category">TOP</span>
                        <p className="desc">
                            봄에 어울리는 다양한 패턴과 소재로 제작된 상의, 이번 시즌에는 놓치지 마세요!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
