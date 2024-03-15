import React from 'react';
import styled from 'styled-components';

import logoImg from '../../component/assets/img/logo.png';

const Positioner = styled.div`
    width: 615px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoWrapper = styled.div`
    width: 150px;
`;

const Contents = styled.div`
    padding: 15px;
`;

const AuthForm = ({ children }) => {
    return (
        <Positioner>
            <LogoWrapper>
                <img
                    src={logoImg}
                    style={{
                        width: '100%',
                    }}
                />
            </LogoWrapper>
            <Contents>{children}</Contents>
        </Positioner>
    );
};

export default AuthForm;
