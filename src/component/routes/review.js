import React from 'react';

export default function ReviewTab() {
    return (
        <div>
            <div>
                <button>Best 후기 게시판</button>
            </div>

            <div>
                <p>전체</p>
                <ul
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '115px',
                        borderTop: '3px solid black',
                        borderBottom: '3px solid black',
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
    );
}
