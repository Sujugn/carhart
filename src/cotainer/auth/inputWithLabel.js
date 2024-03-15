import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    // & + & {
    //     margin: 20px;
    // }

    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 14px;
    padding-bottom: 5px;
`;

const Input = styled.input`
    font-size: 14px;
    padding: 5px;
`;

const InputWithLabel = ({ label, ...rest }) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest} />
    </Wrapper>
);

export default InputWithLabel;
