import React, { useState, navigate } from 'react';
import '../assets/styles/Detail.scss';
import { Link } from 'react-router-dom';
import SizeModal from '../routes/size';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//데이터
import mandata from '../../data/madata.json';

//PAGE
import Tabs from '../routes/tabs';
// import Sidebar from '../routes/Sidebar';
// import CartSidebar from '../routes/AddCart';

//ICON
import deliveryIcon from '../assets/img/delivery.png';
import cardIcon from '../assets/img/card.png';
import npayIcon from '../assets/img/npay.png';
import sizeIcon from '../assets/img/size.png';
import facebookIcon from '../assets/img/facebook.png';
import twitterIcon from '../assets/img/twitter.png';
import heartredIcon from '../assets/img/heartred.png';
import Modal from '../routes/Modal';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function DetailPage(props) {
    //동적 url 주소
    const { item_id } = useParams();

    //선택 border css값 변경
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null);

    //구매하기 버튼 클릭 핸들러
    const handleButtonClick = () => {
        if (selectedSizeIndex === null && selectedColorIndex === null) {
            alert('필수옵션을 선택해주세요');
        } else if (selectedColorIndex === null) {
            alert('색상을 선택해주세요');
        } else if (selectedSizeIndex === null) {
            alert('사이즈를 선택해주세요');
        } else {
        }
    };

    //썸네일 이미지 변경 handler
    const [hoveredImage, setHoveredImage] = useState(props.items[item_id]?.images[0].defaultimg);
    const handleThumbnailHover = (imageSrc) => {
        setHoveredImage(imageSrc);
    };

    //컬러옵션 이미지
    const colorSelect = props.items.filter((item) => item.desc === props.items[item_id].desc);

    //상세이미지 썸네일
    const thumbnails = [
        { src: props.items[item_id].images[0].detail01 },
        { src: props.items[item_id].images[0].detail02 },
        { src: props.items[item_id].images[0].detail03 },
        { src: props.items[item_id].images[0].detail04 },
        { src: props.items[item_id].images[0].detail05 },
    ];

    //사이즈 데이터
    const sizeData = [{ size: 'XS' }, { size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }];

    //별점 아이콘
    // const renderStars = (rating) => {
    //     const stars = [];

    //     for (let i = 0; i < Math.floor(rating); i++) {
    //         stars.push(<FaStar key={i} />);
    //     }

    //     if (rating % 1 === 0.5) {
    //         stars.push(<FaStarHalfAlt key={stars.length} />);
    //     }

    //     return stars;
    // };

    // 함께 착용한 상품
    // const outfitData = [
    //     {
    //         id: props.items[item_id].outfits[0].outfit01.id,
    //         src: props.items[item_id].outfits[0].outfit01.defaultimg,
    //         title: props.items[item_id].outfits[0].outfit01.title,
    //         color: props.items[item_id].outfits[0].outfit01.color,
    //         price: props.items[item_id].outfits[0].outfit01.price,
    //     },
    // ];

    //함께 착용한 상품
    // const outfitData = props.items[item_id].outfits.map((outfit, index) => ({
    //     id: outfit[`outfit${index + 1}`].id,
    //     defaultimg: outfit[`outfit${index + 1}`].defaultimg,
    //     title: outfit[`outfit${index + 1}`].title,
    //     color: outfit[`outfit${index + 1}`].color,
    //     price: outfit[`outfit${index + 1}`].price,
    // }));

    //적립금액 계산
    const calculatedReserve = props.items[item_id].price * 0.005;

    return (
        <div className="detailpage">
            <div className="detailpage-inner inner">
                <div className="product-img">
                    <div className="style-name">
                        <strong>{props.items[item_id].code}</strong>
                    </div>

                    <div className="main-block">
                        <img
                            src={hoveredImage}
                            alt="defaultImg"
                        ></img>
                    </div>
                    <ul className="sub-block">
                        {thumbnails.map((item, index) => (
                            <li key={index}>
                                <img
                                    src={item.src}
                                    alt={`Thumbnail ${index + 1}`}
                                    onMouseEnter={() => handleThumbnailHover(item.src)}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="matching-product sub-product">
                        <p className="title">함께 착용한 상품</p>
                        <ul>
                            {/* {outfitData.map((outfit, index) => (
                                <li key={index}>
                                    <div className="product-img">
                                        <img
                                            src={outfit.defaultimg}
                                            alt={outfit.title}
                                        ></img>
                                    </div>
                                    <p className="product-name">{outfit.title}</p>
                                    <p className="product-color">{outfit.color}</p>
                                    <strong className="product-price">{outfit.price}</strong>
                                </li>
                            ))} */}
                        </ul>
                    </div>

                    <div className="recent-product  sub-product">
                        <p className="title">최근 본 상품</p>
                        <ul>
                            <li>
                                <div className="product-img">상품이미지</div>
                                <p className="product-name">상품이름</p>
                                <p className="product-color">색상</p>
                                <strong className="product-price">가격</strong>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-form">
                    <div className="desc">
                        <strong className="product-name">{props.items[item_id].title}</strong>

                        <div className="label">
                            <span className="label-new">{props.items[item_id].label[0].new}</span>
                            <span className="label-best"></span>
                        </div>

                        <div className="product-sns">
                            <div className="rating">{props.items[item_id].starRating}</div>
                            <div className="sns-box">
                                <button className="wish-btn">
                                    <img src={heartredIcon}></img>
                                </button>
                                <button className="facebook-btn">
                                    <img src={facebookIcon}></img>
                                </button>
                                <button className="twitter-btn">
                                    <img src={twitterIcon}></img>
                                </button>
                            </div>
                        </div>

                        <strong className="product-price">₩{props.items[item_id].price.toLocaleString()}</strong>
                        <p className="product-reserve">적립 {calculatedReserve}원(0.5%)</p>
                    </div>
                    <hr />

                    <div className="delivery">
                        <ul>
                            <li className="title">
                                <div className="icon">
                                    <img src={deliveryIcon}></img>
                                </div>
                                배송정보
                            </li>

                            <li className="desc">
                                10만원이하 3,000원, 10만원이상 무료배송
                                <br />
                                <span>2시이전 주문시 내일(수) 도착 예정</span>
                            </li>
                        </ul>

                        <ul>
                            <li className="title">
                                <div className="icon">
                                    <img src={cardIcon}></img>
                                </div>
                                무이자할부
                            </li>
                            <li className="desc">
                                최대 6개월
                                <span>(단, 일시불 할인 및 법인 카드 사용 불가)</span>
                            </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="option">
                        <div className="product-color">
                            <p>색상</p>
                            <ul className="colors">
                                {colorSelect.map((color, index) => (
                                    <li
                                        key={color.id} // 각 아이템의 고유한 ID를 사용합니다.
                                        className={`${selectedColorIndex === index ? 'border-active' : ''}`}
                                        onClick={() => setSelectedColorIndex(index)}
                                    >
                                        <img
                                            src={color.images[0].hoverimg} // 이미지 URL을 사용합니다.
                                            alt={color.color} // 색상에 대한 alt 텍스트를 설정합니다.
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-size">
                            <p>사이즈</p>
                            <ul className="sizes">
                                {sizeData.map((item, index) => (
                                    <li
                                        className={`${selectedSizeIndex === index ? 'border-active' : ''}`}
                                        onClick={() => setSelectedSizeIndex(index)}
                                    >
                                        {item.size}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="purchase">
                        <div className="naver">
                            <div className="flex-box">
                                <div className="icon">
                                    <img src={npayIcon}></img>
                                </div>
                                <p>네이버페이 포인트 혜택</p>
                            </div>
                            <span>최대 3퍼센트 적립</span>
                        </div>

                        <div>
                            <button className="size-btn">
                                <div className="icon">
                                    <img src={sizeIcon} />
                                </div>

                                <button>고객님의 사이즈를 찾아보세요</button>

                                <Modal>
                                    <SizeModal />
                                </Modal>
                            </button>
                        </div>

                        <div className="flex-box">
                            <button className="cart-btn">장바구니</button>
                            <button
                                className="purchase-btn"
                                onClick={handleButtonClick}
                            >
                                구매하기
                            </button>
                        </div>

                        <p className="delivery-desc">
                            주문/배송/반품 등 일반 문의는 1:1문의를 이용해 주시기 바랍니다.{' '}
                        </p>
                    </div>
                </div>
            </div>
            <Tabs></Tabs>
        </div>
    );
}
