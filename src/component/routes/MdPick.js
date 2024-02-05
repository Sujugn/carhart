import React, { useState } from 'react';
import '../assets/styles/MdPick.scss';

/* 이미지 */

// 접혔을 때 이미지
import md01 from '../assets/img/md01.png';
import md02 from '../assets/img/md02.png';
import md03 from '../assets/img/md03.png';
import md04 from '../assets/img/md04.png';

// 펼쳐졌을 때 이미지
import md01hover from '../assets/img/md01hover.png';
import md02hover from '../assets/img/md02hover.png';
import md03hover from '../assets/img/md03hover.png';
import md04hover from '../assets/img/md01hover.png';

const MdPick = () => {
    // 상태 관리 함수
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(0);
    };

    // 데이터
    const mdData = [
        {
            id: 'md01',
            title: 'HOODED VISTA SWEATSHIRT',
            desc: 'SMOKE GREEN GAR MENT DYED',
            price: 135000,
            image: md01,
            hoverImg: md01hover,
        },
        {
            id: 'md02',
            title: 'CARHARTT SWEATSHIRT',
            desc: 'ASH HEATHER/LIBERTY',
            price: 82800,
            image: md02,
            hoverImg: md02hover,
        },
        {
            id: 'md03',
            title: 'SINGLE KNEE PANT DEARBORN',
            desc: 'SALT AGED CANVAS',
            price: 106800,
            image: md03,
            hoverImg: md03hover,
        },
        { id: 'md04', title: '상품이름', desc: '상품설명', price: '가격', image: md04, hoverImg: md04hover },
    ];

    return (
        <div className="mdpick">
            <div className="mdpick-inner inner">
                <h3 className="title">MDPICK</h3>
                <div className="md-content">
                    {mdData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`content-item ${hoveredIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{ width: hoveredIndex === index ? '615px' : '195px', position: 'relative' }}
                        >
                            <div className="md-img">
                                <img
                                    src={hoveredIndex === index ? item.hoverImg : item.image}
                                    alt={`MD item ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div className="hover-desc">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <p className="price">₩ {item.price.toLocaleString()}</p>
                                <button className="more-btn">보러가기</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MdPick;
