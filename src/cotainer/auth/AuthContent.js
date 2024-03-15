import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
    width: 615px;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 100;
    padding-bottom: 10px;
`;

const SubTitle = styled.div`
    font-size: 12px;
    color: gray;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
`;

const AuthContent = ({ title, subtitle, children }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            {children}
        </Wrapper>
    );
};

export default AuthContent;
