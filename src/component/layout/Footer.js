import React from 'react';
import '../assets/styles/Footer.scss';
import { Link } from 'react-router-dom';

//icon
import { IoLogoInstagram } from 'react-icons/io';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { FaPinterestSquare } from 'react-icons/fa';
import { PiSoundcloudLogo } from 'react-icons/pi';

export default function Footer() {
    const snsData = [
        {
            id: 'sns01',
            name: '인스타',
            icon: <IoLogoInstagram size={45} />,
            url: 'https://www.instagram.com/carharttwip_kr',
        },
        { id: 'sns02', name: '페이스북', icon: <ImFacebook2 size={30} />, url: 'https://www.facebook.com/Carhartt/' },
        {
            id: 'sns03',
            name: '유투브',
            icon: <IoLogoYoutube size={40} />,
            url: 'https://www.youtube.com/hashtag/%EC%B9%BC%ED%95%98%ED%8A%B8',
        },
        {
            id: 'sns04',
            name: '핀터레스트',
            icon: <FaPinterestSquare size={35} />,
            url: 'https://www.pinterest.co.kr/Carhartt/',
        },
        {
            id: 'sns05',
            name: '사운드플레이',
            icon: <PiSoundcloudLogo size={35} />,
            url: 'https://www.carhartt-wip.com/musicplayer',
        },
    ];

    const infoData = [
        { id: 'info01', title: '대표전화', desc: '02-541-0854' },
        { id: 'info02', title: '운영시간', desc: '02-541-0854' },
        { id: 'info03', title: '휴무일', desc: '(토,일 공휴일)' },
        { id: 'info04', title: '대표전화', desc: '02-541-0854' },
        { id: 'info05', title: '이메일', desc: 'customer@carhartt-wip.co.kr' },
    ];

    const companyData = [
        { id: 'company01', desc: '주식회사 웍스아웃' },
        { id: 'company02', desc: '사업자등록번호: 106-8685373' },
        { id: 'company03', desc: '주소 : 서울시 마포구 월드컵북로23길 24' },
        { id: 'company04', desc: '통신판매업 신고 : 2014-서울마포-0219' },
        { id: 'company05', desc: '호스팅 사업자 : 아마존 웹 서비스' },
    ];

    const inquiryData = [
        { id: 'inquiry01', title: '고객지원', url: '추후 추가' },
        { id: 'inquiry02', title: '비즈니스 문의', url: '추후 추가' },
        { id: 'inquiry03', title: '배송 안내', url: '추후 추가' },
        { id: 'inquiry04', title: '나의 계정', url: '추후 추가' },
        { id: 'inquiry05', title: '자주하는질문', url: '추후 추가' },
    ];

    const termsData = [
        { id: 'term01', title: '© 칼하트윕 코리아 2023', url: '추후 추가' },
        { id: 'term02', title: '이용약관', url: '추후 추가' },
        { id: 'term03', title: '개인정보취급 방침', url: '추후 추가' },
        { id: 'term04', title: '구매안전(에스크로) 서비스 가입사실 확인', url: '추후 추가' },
    ];

    return (
        <div className="footer">
            <div style={{ backgroundColor: 'white' }}>
                <ul
                    style={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '16px',
                    }}
                >
                    <li
                        style={{
                            borderRight: '1px solid black',
                            padding: '0 50px',
                            margin: '30px 0',
                        }}
                    >
                        칼하트웹에 대하여
                    </li>
                    <li
                        style={{
                            borderRight: '1px solid black',
                            padding: '0 50px',
                            margin: '30px 0',
                        }}
                    >
                        칼하트웹에 라디오
                    </li>
                    <li
                        style={{
                            borderRight: '1px solid black',
                            padding: '0 50px',
                            margin: '30px 0',
                        }}
                    >
                        기업의 사회적 책임
                    </li>
                    <li
                        style={{
                            borderRight: '1px solid black',
                            padding: '0 50px',
                            margin: '30px 0',
                        }}
                    >
                        채용안내
                    </li>
                    <li
                        style={{
                            borderRight: '1px solid black',
                            padding: '0 50px',
                            margin: '30px 0',
                        }}
                    >
                        일반 적합 인증
                    </li>
                </ul>
            </div>
            <div className="footer-inner inner">
                <div className="section">
                    <div className="section-block">
                        <ul className="inquiry">
                            {inquiryData.map((inquiry) => (
                                <li key={inquiry.id}>
                                    <Link to={inquiry.url}>
                                        <strong>{inquiry.title}</strong>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <ul className="sns">
                            {snsData.map((sns) => (
                                <li key={sns.id}>
                                    <Link
                                        to={sns.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {sns.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section-block">
                        <ul className="company">
                            {companyData.map((company) => (
                                <li key={company.id}>
                                    <p>{company.desc}</p>
                                </li>
                            ))}
                        </ul>

                        <ul className="info">
                            {infoData.map((info) => (
                                <li key={info.id}>
                                    <strong>{info.title}</strong>
                                    <p>{info.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section-block">
                        <ul className="terms">
                            {termsData.map((term) => (
                                <li key={term.id}>
                                    <Link to={term.url}>{term.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
