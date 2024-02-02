import React from 'react';

export default function InquiryTab() {
    const inquiryList = [{}];

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px 0',
                }}
            >
                <h1>제품에 관한 궁금한 점을 올리시면 신속한 답변을 드립니다.</h1>
                <p
                    style={{
                        margin: '10px 0',
                    }}
                >
                    배송,결제,교환/반품 등에 대한 문의는
                    <span
                        style={{
                            color: 'red',
                        }}
                    >
                        고객센터이메일상담
                    </span>
                    을 이용해주세요.
                </p>
                <button
                    style={{
                        width: '195px',
                        height: '60px',
                        color: '#545ADC',
                        border: '3px solid #545ADC',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    }}
                >
                    문의하기
                </button>
            </div>

            <div>
                <p>전체(N건)</p>

                <div>
                    <ul
                        style={{
                            display: 'flex',
                            height: '80px',
                            alignItems: 'center',
                        }}
                    >
                        <li
                            style={{
                                width: '90PX',
                                marginRight: '15px',
                            }}
                        >
                            <p>미처리</p>
                        </li>
                        <li
                            style={{
                                width: '825px',
                                marginRight: '15px',
                            }}
                        >
                            <p>제품에문제가있어서 교환하고싶은뎅</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>2022-02-11</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>ha***</p>
                        </li>
                    </ul>
                    <ul
                        style={{
                            display: 'flex',
                            height: '80px',
                            alignItems: 'center',
                        }}
                    >
                        <li
                            style={{
                                width: '90PX',
                                marginRight: '15px',
                            }}
                        >
                            <p>미처리</p>
                        </li>
                        <li
                            style={{
                                width: '825px',
                                marginRight: '15px',
                            }}
                        >
                            <p>제품에문제가있어서 교환하고싶은뎅</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>2022-02-11</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>ha***</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
