import React from 'react';

export default function SizeModal() {
    return (
        <div className="sizemodal">
            <h2>대제목</h2>
            <div className="sizemodal-inner">
                <div className="block">
                    <p className="sub-title">제목1</p>
                    <div className="size-input">
                        <label>
                            <p>키CM</p>
                            <input maxLength={3}></input>
                        </label>
                        <label>
                            <p>몸무게 kg</p>
                            <input maxLength={3}></input>
                        </label>
                    </div>

                    <button className="size-btn">사이즈를 찾아보세요</button>

                    <div className="size-result">
                        <h2>당신의 사이즈는</h2>
                        <p className="result-value">결과값</p>
                        <p>
                            비슷한 체형을 가진 사람들이 구매한 사이즈와 <br />
                            사이즈 피드백을 분석한 결과입니다.
                        </p>
                    </div>
                </div>

                <div className="block">
                    <p className="sub-title">제목2</p>
                    <div>
                        <div className="size-img">사이즈 이미지</div>
                        <p className="size-recommend">
                            추천사이즈 <span>M 사이즈</span>
                        </p>
                    </div>
                    <div className="size-table">사이즈표</div>
                    <div className="lining-table">안감표</div>
                </div>
            </div>
        </div>
    );
}
