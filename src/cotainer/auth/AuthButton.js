import React from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';
const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: black
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: #ccc
    }

    &:active {
        background: #ccc
    }

`;
const AuthButton = ({ children, onclick }) => <Wrapper onclick={onclick}>{children}</Wrapper>;

export default AuthButton;
