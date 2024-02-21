import React from 'react';
import styled from 'styled-components';

//로고이미지
import LogoImg from '../assets/img/logo.png';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Width = styled.div`
    width: 500px;
`;

const LogoWrapper = styled.div`
    width : 250px
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contents = styled.div`
    padding: 2rem;
`;

export default function AuthForm({ children }) {
    return (
        <Positioner>
            <Width>
                <LogoWrapper>
                    <img
                        src={LogoImg}
                        style={{
                            width: '100%',
                        }}
                    ></img>
                </LogoWrapper>

                <Contents>{children}</Contents>
            </Width>
        </Positioner>
    );
}
