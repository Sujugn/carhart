import React from 'react';
import styled from 'styled-components';

import { IoMdClose } from 'react-icons/io';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 25px 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
`;

const ModalInner = styled.div`
    width: 500px;
    height: 100%;
    background: white;
    padding: 30px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
`;

const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #000;
    padding-bottom: 20px;
    margin: 30 0px;
`;

const ModalContent = styled.div`
    margin: 30px 0;
`;

const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <>
            {isOpen && (
                <ModalOverlay onClick={onClose}>
                    <ModalInner>
                        <ModalTitle>
                            <h3>{title}</h3>
                            <button onClick={onClose}>
                                <IoMdClose size={30} />
                            </button>
                        </ModalTitle>

                        <ModalContent>{children}</ModalContent>
                    </ModalInner>
                </ModalOverlay>
            )}
        </>
    );
};

export default Modal;
