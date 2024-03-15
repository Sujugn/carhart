import React, { useState } from 'react';
import styled from 'styled-components';

const SideWrapper = styled.div`
    width: rgba(0, 0, 0, 0.3);
`;

const TopArea = styled.div`
    display: flex,
    justify-contents: between,
`;

const Title = styled.p`
    font-size: 20px;
`;

const CloseBtn = styled.button`
    color: 'black';
`;

const Contents = styled.div`
    width: ${(props) => props.width || '500px'};
    position: fixed;
    right: 0;
    height: 100vh;
`;

const SideModal = ({ title, width, children, isOpen, onClose }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOnModal = () => {
        setOpenModal(true);
    };

    <SideWrapper>
        <TopArea>
            <Title>{title}</Title>
            <CloseBtn onClick={onClose}>X</CloseBtn>
        </TopArea>

        {isOpen && <Contents width={width}>{children}</Contents>}
    </SideWrapper>;
};

export default SideModal;
