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
`;

const Input = styled.input`
    font-size: 14px;
`;

const P = styled.p`
    text-align: center;
`;

const EmailInputWithLabel = ({ label, options }) => (
    <Wrapper>
        <Label>{label}</Label>
        <InputWrapper>
            <Input />
            <P>@</P>
            <div>
                <select>
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </InputWrapper>
    </Wrapper>
);

export default EmailInputWithLabel;
