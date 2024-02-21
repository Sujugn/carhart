import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
font-size: 14px;
color: #000
margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 14px
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const InputwithLabel = ({ label, ...rest }) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </Wrapper>
);

export default InputwithLabel;
