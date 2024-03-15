import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import InputWithLabel from './InputWithLabel';

import AuthContent from './AuthContent';
import AuthButton from './AuthButton';
import AuthForm from './AuthForm';

import userData from '../../data/users.json';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    return (
        <AuthForm>
            <AuthContent
                title="Login"
                subtitle="칼하트웹에 오신것을 환영합니다"
            >
                <form>
                    <InputWithLabel
                        label="아이디"
                        id="id"
                        type="text"
                        name="id"
                    />

                    <InputWithLabel
                        label="비밀번호"
                        id="pwd"
                        type="password"
                        name="password"
                    />

                    <div className="flex-between">
                        <label className="flex">
                            <input
                                type="checkbox"
                                style={{
                                    backgroundColor: 'black',
                                }}
                            ></input>
                            <p>아이디 저장</p>
                        </label>

                        {/* <button onClick={LoginSearch}>아이디/비번찾기</button> */}
                    </div>

                    <AuthButton next={true}>로그인하기</AuthButton>
                </form>
            </AuthContent>
        </AuthForm>
    );
};

export default Login;
