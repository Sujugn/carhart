import React from 'react';
import { useState } from 'react';
import '../assets/styles/FindLayout.css';

export default function FindLayout({ title }) {
    const [isPhoneSelected, setIsPhoneSelected] = useState(true);

    const handleRadioChange = (event) => {
        const selectedValue = event.target.value === 'phone';
        setIsPhoneSelected(selectedValue);
    };

    return (
        <div className="findlayout">
            <div className="title-block">
                <h3>{title}</h3>
            </div>

            <div className="radio-block flex">
                <label className="flex">
                    <input
                        type="radio"
                        name="option"
                        id="radio-phone"
                        value="phone"
                        checked={isPhoneSelected}
                        onChange={handleRadioChange}
                    ></input>
                    <p>휴대폰 번호</p>
                </label>

                <label className="flex">
                    <input
                        type="radio"
                        name="option"
                        id="radio-email"
                        value="email"
                        checked={!isPhoneSelected}
                        onChange={handleRadioChange}
                    ></input>
                    <p>이메일</p>
                </label>
            </div>

            <div className="input-block">
                <div>
                    <div className="all-margin">
                        <p>이름</p>
                        <input className="border-style"></input>
                    </div>

                    {isPhoneSelected && (
                        <div className="all-margin">
                            <p>휴대폰</p>

                            <div className="flex">
                                <select>
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                </select>
                                <p>-</p>
                                <input
                                    className="border-style"
                                    id="phone-second"
                                ></input>
                                <p>-</p>
                                <input
                                    className="border-style"
                                    id="phone-last"
                                ></input>
                            </div>
                        </div>
                    )}

                    {!isPhoneSelected && (
                        <div className="all-margin">
                            <p>이메일</p>
                            <input className="border-style"></input>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex-center mt-margin">
                <button className="black-btn">확인</button>
            </div>
        </div>
    );
}
