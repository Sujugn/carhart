import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UserFind = () => {
    const { tab } = useParams();

    const UserIdFind = () => {
        return (
            <div>
                <div>아이디찾기</div>
            </div>
        );
    };

    console.log(<UserIdFind />);

    const UserPwFind = () => {
        return (
            <div>
                <div>비번찾기</div>
            </div>
        );
    };

    return (
        <div className="find-tab">
            <ul className="find-tab">
                {['아이디찾기', '비밀번호찾기'].map((item) => (
                    <li
                        key={item}
                        className={tab === item ? 'findLinkOn' : 'findLinkOff'}
                    >
                        <Link to={`/userfind/${tab}`}>{item}</Link>
                    </li>
                ))}
            </ul>
            {tab === '아이디찾기' ? <UserFind /> : <UserPwFind />}
        </div>
    );
};

export default UserFind;
