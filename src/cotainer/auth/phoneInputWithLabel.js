import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    & + & {
        margin: 10px;
    }

    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 16px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    & > * {
        flex: 1;
        margin-right: 5px; /* 각 입력 요소 사이의 간격 조정 */
    }
`;

const Input = styled.input`
    font-size: 14px;
`;

const PhoneInputWithLabel = ({ label, options, valuePrev, valueNext }) => (
    <Wrapper>
        <Label>{label}</Label>
        <InputWrapper>
            <select>
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            <p style={{ textAlign: 'center' }}>-</p>
            <Input
                value={valuePrev}
                maxLength="4"
            />
            <p>-</p>
            <Input
                value={valueNext}
                maxLength="4"
            />
        </InputWrapper>
    </Wrapper>
);

export default PhoneInputWithLabel;
