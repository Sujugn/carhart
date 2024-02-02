import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickMenu() {
    return (
        <div>
            <div>
                <Link>홈메뉴</Link>
                <Link>고객지원</Link>
                <Link>매장찾기</Link>
            </div>
        </div>
    );
}
