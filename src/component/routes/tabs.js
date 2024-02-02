import React, { useState } from 'react';

import InquiryTab from './inquiry';
import ReviewTab from './review';

export default function Tabs() {
    const tabContent = [
        { id: 'tab01', title: '탭메뉴01', subtitle: '서브타이틀', content: '컨텐츠내용' },
        { id: 'tab02', title: '탭메뉴02', subtitle: '', content: <ReviewTab /> },
        { id: 'tab03', title: '탭메뉴03', subtitle: '', content: <InquiryTab /> },
        { id: 'tab04', title: '배송안내', subtitle: '배송안내', content: '컨텐츠내용' },
        { id: 'tab05', title: '안내사항', subtitle: '안내사항', content: '컨텐츠내용' },
    ];

    //색상변경 상태함수
    const [activeTab, setActiveTab] = useState('tab01');

    //컨텐츠 스크롤 함수
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);

        const element = document.getElementById(tabId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="tabs"
            style={{
                width: '1245px',
                margin: '30px auto',
            }}
        >
            <div className="tab-title">
                {tabContent.map((tabs) => (
                    <button
                        key={tabs.id}
                        style={{
                            width: 'calc(100% /5 )',
                            height: '35px',
                            lineHeight: '35px',
                            backgroundColor: activeTab === tabs.id ? '#ccc' : '#fff', // 색상 변경
                            color: activeTab === tabs.id ? '#000' : '#333', // 글자색 변경
                            cursor: 'pointer',
                            border: '1px solid #000',
                        }}
                        onClick={() => handleTabClick(tabs.id)}
                    >
                        <span>{tabs.title}</span>
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabContent.map((tabs) => (
                    <div
                        key={tabs.id}
                        id={tabs.id}
                        style={{
                            border: '1px solid black',
                            padding: '10px',
                        }}
                    >
                        <span>{tabs.subtitle}</span>

                        {typeof tabs.content === 'string' ? (
                            tabs.content
                        ) : (
                            <React.Fragment key={tabs.id}>{tabs.content}</React.Fragment>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
