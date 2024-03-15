// import React, { useState } from 'react';

// import AuthContent from './AuthContent';
// import AuthForm from './AuthForm';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const TermsWrapper = styled.div`
//     font-size: 14px;
//     padding: 10px;
//     display: flex;
//     background: ${(props) => (props.allterms ? 'black' : 'none')};
//     color: ${(props) => (props.allterms ? 'white' : 'black')};
//     // border-radius: ${(props) => (props.allterms ? '10px' : '')};
// `;

// const CheckBox = styled.input`
//     margin-right: 5px;
//     &:checked {
//         background-color: black;
//     }
// `;

// const ArticleName = styled.p``;

// const ReadContents = styled.div`
//     color: gray;
//     font-size: 14px;
// `;

// const Terms = () => {
//     const [checkList, setCheckList] = useState(false);

//     return (
//         <AuthForm>
//             <AuthContent title="약관동의"></AuthContent>

//             <TermsWrapper allterms={true}>
//                 <CheckBox
//                     type="checkbox"
//                     name="all"
//                     onchange={changeAll}
//                     checked={checkList.length === 5 ? true : false}
//                 ></CheckBox>
//                 <ArticleName>이용약관 전체동의</ArticleName>
//             </TermsWrapper>

//             <TermsWrapper>
//                 <CheckBox
//                     type="checkbox"
//                     name="terms"
//                     onchange={check}
//                     checked={checkList.include('terms') ? true : false}
//                 ></CheckBox>
//                 <ArticleName>개인정보 수집 및 이용 동의(필수)</ArticleName>
//                 <ReadContents>내용보기</ReadContents>
//             </TermsWrapper>

//             <TermsWrapper>
//                 <CheckBox
//                     type="checkbox"
//                     name="terms"
//                     onchange={check}
//                     checked={checkList.include('terms') ? true : false}
//                 ></CheckBox>
//                 <ArticleName>개인정보 제 3자 동의(필수)</ArticleName>
//                 <ReadContents>내용보기</ReadContents>
//             </TermsWrapper>

//             <TermsWrapper>
//                 <CheckBox
//                     type="checkbox"
//                     name="terms"
//                     onchange={check}
//                     checked={checkList.include('terms') ? true : false}
//                 ></CheckBox>
//                 <ArticleName>개인정보 처리 위탁 동의(필수)</ArticleName>
//                 <ReadContents>내용보기</ReadContents>
//             </TermsWrapper>

//             <Link to="/Test">이전페이지</Link>
//         </AuthForm>
//     );
// };

// export default Terms;
