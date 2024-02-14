import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaRegTrashAlt } from 'react-icons/fa';

const MiniCartList = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid black;
    height: 350px;
`;

const MiniCartContent = styled.div``;

const MiniCartTotal = styled.div`
    padding: '15px';
`;

const MiniCartOrder = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function CartModal() {
    const [delivery, setDelivery] = useState(3000);
    const [total, setTotal] = useState(null);

    const chagneDelivery = () => {
        if (total >= 100000) {
            delivery = 0;
        }
        {
            delivery = 3000;
        }
    };

    return (
        <div>
            <MiniCartList>
                <div className="flex-between">
                    <label className="flex">
                        <input type="checkbox"></input>
                        <p>
                            전체선택 <span>(N개)</span>
                        </p>
                    </label>

                    <a>선택삭제</a>
                </div>

                <MiniCartContent>
                    {/* {데이터.length === 0 ? <div>
    <p>장바구니가 비어있습니다.</p> :(
        레이아웃 넣기
    )
</div>} */}

                    <div
                        className="item-el flex"
                        style={{
                            marginBottom: '15px',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className="flex">
                            <input type="checkbox"></input>
                            <div
                                className="item-img"
                                style={{
                                    width: '155px',
                                    height: '155px',
                                    backgroundColor: '#ccc',
                                    marginRight: '15px',
                                }}
                            >
                                이미지
                            </div>
                            <div className="item-desc">
                                <p>상품이름</p>
                                <p
                                    style={{
                                        margin: '15px 0',
                                    }}
                                >
                                    상품옵션
                                </p>
                                <p>수량</p>
                            </div>
                        </div>

                        <button>
                            <FaRegTrashAlt size={20} />
                        </button>
                    </div>
                </MiniCartContent>
            </MiniCartList>

            <MiniCartTotal>
                <ul className="flex-between">
                    <li>배송비</li>
                    <li>{delivery.toLocaleString()}</li>
                </ul>
                <ul
                    className="flex-between"
                    style={{
                        margin: '20px 0',
                    }}
                >
                    <li>총합계 금액</li>
                    <li>N</li>
                </ul>

                <p
                    style={{
                        color: 'gray',
                        fontSize: '12px',
                    }}
                >
                    미니장바구니에 담겨진 상품을 확인하고 장바구니를 실행하세요
                </p>
                <p
                    style={{
                        color: 'gray',
                        fontSize: '12px',
                    }}
                >
                    배송비는 주문서에서 확인하세요
                </p>
            </MiniCartTotal>

            <MiniCartOrder>
                <Link
                    to="/Cart"
                    style={{
                        border: '1px solid black',
                        height: '60px',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p>장바구니 이동</p>
                </Link>
                <button
                    style={{
                        border: '1px solid black',
                        height: '60px',
                        backgroundColor: 'black',
                        color: 'white',
                    }}
                >
                    주문하기
                </button>
            </MiniCartOrder>
        </div>
    );
}
