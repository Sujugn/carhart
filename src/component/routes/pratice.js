import React, { useState } from 'react';
import '../assets/styles/pratice.scss';

export default function Pratice() {
    return (
        <form>
            <div className="flex">
                <label>아이디</label>
                <input type="text"></input>
            </div>

            <div className="flex">
                <label>비밀번호</label>
                <input type="password"></input>
            </div>
        </form>
    );
}
