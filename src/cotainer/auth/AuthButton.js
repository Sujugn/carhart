import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    background: ${(props) => props.bgcColor || 'black'};
    color: ${(props) => props.color || 'white'};
    border: 1px solid black;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 12px;
    height: 35px;
    border-radius: ${(props) => (props.next ? '20px' : '')};
    margin-top: ${(props) => (props.next ? '30px' : '')};
    width: ${(props) => (props.next ? '100%' : '115px')};
`;

const AuthButton = ({ children, onClick, next, ...rest }) => (
    <Wrapper
        type="submit"
        onClick={onClick}
        next={next}
        {...rest}
    >
        {children}
    </Wrapper>
);

export default AuthButton;
