import React from 'react';
import '../assets/styles/join.css';

export default function JoinPage() {
    return (
        <div className="joinpage">
            <div>
                <p>아름</p>
                <input className="border-style"></input>
            </div>

            <div>
                <p>휴대폰번호</p>
                <div className="flex-between">
                    <select>
                        <option>010</option>
                        <option>011</option>
                        <option>012</option>
                    </select>
                    <input className="border-style"></input>
                    <p>-</p>
                    <input className="border-style"></input>

                    <button className="black-btn">중복확인</button>
                </div>
            </div>

            <div>
                <p>이메일</p>
                <div className="flex">
                    <input className="border-style"></input>
                    <p>@</p>
                    <select>
                        <option>직접선택</option>
                        <option value="naver.com">naver.com</option>
                    </select>
                    <button className="black-btn">중복확인</button>
                </div>
            </div>

            <div>
                <p>아이디</p>
                <div className="flex">
                    <input
                        placeholder="6글자이하 20자 이하 숫자 혹은 특수문자 하나를 포함하여 작성해주세요"
                        className="border-style"
                    ></input>

                    <button className="black-btn">중복확인</button>
                </div>
            </div>

            <div>
                <p>비밀번호 입력</p>
                <input
                    placeholder="6글자이하 20자 이하 숫자 혹은 특수문자 하나를 포함하여 작성해주세요"
                    className="border-style"
                    type="password"
                ></input>
            </div>

            <div>
                <p>비밀번호 재입력</p>
                <div className="flex">
                    <input className="border-style"></input>
                    <button className="black-btn">중복확인</button>
                </div>
            </div>

            <div>
                <p>주소</p>
                <input className="border-style"></input>

                <div className="flex">
                    <input className="border-style"></input>
                    <button className="white-btn">우편번호 찾기</button>
                </div>
            </div>
        </div>
    );
}
