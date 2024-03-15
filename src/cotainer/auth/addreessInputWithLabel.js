import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import AuthButton from './AuthButton';

const Wrapper = styled.div`
    & + & {
        margin: 10px;
    }

    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 16px;
`;

const Input = styled.input`
    font-size: 14px;
    width: 100%;
`;

const Flex = styled.div`
    display: flex;
`;

const AddressInputWithLabel = ({ label }) => {
    //우편검색창 상태
    const [openPostcode, setOpenPostcode] = useState(false);

    //주소검색창 반영 상태
    const [address, setAddress] = useState('');

    const handle = {
        //버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode((current) => !current);
        },
        selectAddress: (data) => {
            console.log(
                `
            주소: ${data.address},
            우편번호: ${data.zonecode}
            `
            );
            setAddress(data.address);
            setOpenPostcode(false);
        },
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            <Flex>
                <Input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <AuthButton
                    bgcColor="white"
                    color="black"
                    onClick={handle.clickButton}
                >
                    우편찾기
                </AuthButton>
            </Flex>
            <Input placeholder="상세주소를 입력해주세요 (예: 건물명 또는 동/ 호수)" />

            {/* {openPostcode && (
                <Modal>
                    <DaumPostcode
                        onComplete={handle.selectAddress}
                        autoClose={false}
                        defaultQuery="판교역로 235"
                    />
                </Modal>
            )} */}
        </Wrapper>
    );
};

export default AddressInputWithLabel;
