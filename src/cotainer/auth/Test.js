import React, { useCallback, useState } from 'react';
import { UseDispatch } from 'react-redux';
import InputWithLabel from './InputWithLabel';
import AuthContent from './AuthContent';
import AuthButton from './AuthButton';
import EmailInputWithLabel from './emailInputWithLabel';
import PhoneInputWithLabel from './phoneInputWithLabel';
import AddressInputWithLabel from './addreessInputWithLabel';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Test = () => {
    // const [name, setName] = useState('');
    // const [phone, setphone] = useState('');
    // const [emaill, setEmail] = useState('');
    // const [id, setId] = useState('');
    // const [pwd, setPwd] = useState('');
    // const [pwd1, setPwd1] = useState('');
    // const [address, setAddress] = useState('');

    // const onChangeName = useCallback((e) => {
    //     setName(e.target.value);
    // });

    // const onChangephone = useCallback((e) => {
    //     setphone(e.target.value);
    // });

    // const onChangeEmail = useCallback((e) => {
    //     setEmail(e.target.value);
    // });

    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // });

    // const onChangePwd = useCallback((e) => {
    //     setPwd(e.target.value);
    // });

    // const onChangePwd1 = useCallback((e) => {
    //     setPwd1(e.target.value);
    // });

    // const onChangeAddress = useCallback((e) => {
    //     setAddress(e.target.value);
    // });

    return (
        <AuthForm>
            <AuthContent
                title="회원가입"
                subtitle="*은 필수입력사항입니다. 회원가입을 완료하려면 항목을 모두 작성하세요"
            >
                <form>
                    <InputWithLabel
                        label="이름"
                        type="name"
                        name="name"
                        placeholder="이름을 입력하세용"
                    />

                    <PhoneInputWithLabel
                        label="휴대폰번호"
                        name="phone"
                        options={['010', '011', '016', '017', '018', '019']}
                    />

                    <EmailInputWithLabel
                        label="이메일"
                        type="email"
                        options={['직접입력', 'naver.com', 'daum.net', 'kakako.com']}
                        // value={email}
                    />

                    <div className="flex-end">
                        <InputWithLabel
                            label="아이디"
                            name="id"
                            placeholder="아이디를 입력하세요"
                            type="text"
                        />
                        <AuthButton>중복확인</AuthButton>
                    </div>

                    <InputWithLabel
                        label="비밀번호 입력"
                        placeholder="비번을 입력하세요"
                        type="password"
                        name="password"
                    />

                    <div className="flex-end">
                        <InputWithLabel
                            label="비밀번호 확인"
                            placeholder=""
                            type="password"
                            name="password"
                        />
                        <AuthButton>비밀번호 확인</AuthButton>
                    </div>

                    <AddressInputWithLabel
                        label="주소"
                        name="address"
                    ></AddressInputWithLabel>
                </form>
                <AuthButton
                    next={true}
                    type="submit"
                >
                    다음단계
                </AuthButton>

                <Link to="/terms">약관동의 페이지 이동</Link>
            </AuthContent>
        </AuthForm>
    );
};

export default Test;
