import React from 'react';
import '../assets/styles/LookBook.scss';

export default function LookBook() {
    return (
        <div className="lookbook">
            <div className="lookbook-inner inner">
                <h3 className="title">LOOK BOOK - S/S 2024</h3>
                <div className="content">
                    <div className="tab-block flex">
                        <div className="content-left">왼쪽</div>
                        <div className="content-right">
                            <div className="content-top">위</div>
                            <div className="content-bottom flex">
                                <div>왼</div>
                                <div>오</div>
                            </div>
                        </div>
                    </div>

                    <div className="change-block">
                        <div className="change-img"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
