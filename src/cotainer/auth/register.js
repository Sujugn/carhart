import React from 'react';
import { AuthContent, InputWithLabel, AuthButton } from 'components/Auth'; // Auth 컴포넌트들의 경로를 올바르게 수정해야 합니다.

export default function Register() {
    return (
        <AuthContent
            title="회원가입"
            SubTitle="필수입력사항을 입력해주세요"
        >
            <InputWithLabel
                label="이름"
                name="name"
            />
            <InputWithLabel
                label="이메일"
                name="email"
            />
            <AuthButton>다음</AuthButton>
        </AuthContent>
    );
}
