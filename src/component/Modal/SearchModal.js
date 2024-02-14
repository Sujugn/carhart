import React from 'react';
import styled from 'styled-components';

import { CiSearch } from 'react-icons/ci';

const SearchContent = styled.div`
disflay:'flex`;

const SearchInput = styled.div`
    dispaly: 'flex';
    background-color: '#e8e8e8';
    border-radius: '20px';
    padding: '10px 5px';
    border-radius: '20px';
`;
const SearchRecent = styled.div``;
const SearchrPopular = styled.div``;

export default function SearchModal() {
    return (
        <SearchContent>
            <SearchInput>
                <button
                    style={{
                        marginRight: '10px',
                    }}
                >
                    <CiSearch />
                </button>

                <input
                    placeholder="검색어를입력하세요"
                    style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                    }}
                ></input>
            </SearchInput>

            <SearchRecent>
                <h3>최근검색어</h3>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        className="item-el"
                        style={{
                            width: 'calc(100% /3)',
                        }}
                    >
                        <div
                            className="item-img"
                            style={{
                                backgroundColor: '#ccc',
                                width: '100%',
                                height: '156.66px',
                            }}
                        >
                            이미지
                        </div>
                        <div className="item-desc">
                            <p>상품명</p>
                            <p>상품설명</p>
                            <p>가격</p>
                        </div>
                    </div>

                    <div
                        className="item-el"
                        style={{
                            width: 'calc(100% /3)',
                            margin: '0 15px',
                        }}
                    >
                        <div
                            className="item-img"
                            style={{
                                backgroundColor: '#ccc',
                                width: '100%',
                                height: '156.66px',
                            }}
                        >
                            이미지
                        </div>
                        <div className="item-desc">
                            <p>상품명</p>
                            <p>상품설명</p>
                            <p>가격</p>
                        </div>
                    </div>

                    <div
                        className="item-el"
                        style={{
                            width: 'calc(100% /3)',
                        }}
                    >
                        <div
                            className="item-img"
                            style={{
                                backgroundColor: '#ccc',
                                width: '100%',
                                height: '156.66px',
                            }}
                        >
                            이미지
                        </div>
                        <div className="item-desc">
                            <p>상품명</p>
                            <p>상품설명</p>
                            <p>가격</p>
                        </div>
                    </div>
                </div>
            </SearchRecent>

            <SearchrPopular>
                <h3>인기검색어</h3>
            </SearchrPopular>
        </SearchContent>
    );
}
