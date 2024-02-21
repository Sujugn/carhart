import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #000;
    margin-bottom: 1rem;
`;

const SubTitle = styled.div`
    font-size: 15px;
    color: gray;
`;

export default function AuthContent({ title, SubTitle, children }) {
    return (
        <div>
            <Title>{title}</Title>
            <SubTitle>{SubTitle}</SubTitle>
            {children}
        </div>
    );
}
