import React from 'react';

export default function ReviewTab() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    margin: '20px 0',
                }}
            >
                <p>전체(총5건)</p>
                <button
                    style={{
                        backgroundColor: '#4136BF',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        justifyContent: 'space-between',
                    }}
                >
                    Best 후기 게시판
                </button>
            </div>

            <div>
                <div
                    className="inquiry-block"
                    style={{
                        borderTop: '2px solid black',
                        borderBottom: '2px solid black',
                        marginBottom: '30px',
                    }}
                >
                    <ul
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '115px',
                            alignItems: 'center',
                            borderBottom: '3px solid #e8e8e8',
                        }}
                    >
                        <li
                            style={{
                                width: '610px',
                                marginRight: '120px',
                            }}
                        >
                            <p>봄에오버해서입기</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '120px',
                            }}
                        >
                            <p>★★★★★</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>2023-01-01</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                            }}
                        >
                            <p>아이디</p>
                        </li>
                    </ul>
                    <ul
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '115px',
                            alignItems: 'center',
                        }}
                    >
                        <li
                            style={{
                                width: '610px',
                                marginRight: '120px',
                            }}
                        >
                            <p>봄에오버해서입기</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '120px',
                            }}
                        >
                            <p>★★★★★</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                                marginRight: '15px',
                            }}
                        >
                            <p>2023-01-01</p>
                        </li>
                        <li
                            style={{
                                width: '90px',
                            }}
                        >
                            <p>아이디</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
