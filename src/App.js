// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './component/layout/Home';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import LoginPage from './component/routes/login';
import JoinPage from './component/routes/join';
import CartPage from './component/routes/cart';
import DetailPage from './component/layout/Detail';
import SubPage from './component/layout/Sub';
// import SearchSidebar from './component/routes/Search';
import MapPage from './component/routes/Map';
import Modal from './component/Modal/Modal';
import Pratice from './component/routes/pratice';
import Form from './component/layout/Form';
import FindLayout from './component/layout/FindLayout';
import ProductList from './component/routes/ProductList';

function App() {
    //데이터 불러오기
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://datalab.naver.com/shoppingInsight/getKeywordRank.naver?timeUnit=date&cid=50000000')
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    // //모달 상태관리함수
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalTitle('');
        setModalContent(null);
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                <Header openModal={openModal} />
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={modalTitle}
                >
                    {modalContent}
                </Modal>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>

                <Route
                    path="/login"
                    element={<LoginPage />}
                ></Route>

                <Route
                    path="/join"
                    element={
                        <Form
                            title="Join"
                            subtitle="*은 필수입력사항입니다. 회원가입을 완료하려면 항목을 모두 작성해주세요"
                        >
                            <JoinPage />
                        </Form>
                    }
                />
                <Route
                    path="/cart"
                    element={<CartPage />}
                ></Route>
                <Route
                    path="/Detail"
                    element={<DetailPage />}
                ></Route>

                <Route
                    path="/Sub"
                    element={<SubPage />}
                    render={(props) => (
                        <SubPage
                        // {...props}
                        // data={data}
                        />
                    )}
                ></Route>

                <Route
                    path="/Map"
                    element={<MapPage />}
                ></Route>
                <Route
                    path="/pratice"
                    element={<Pratice />}
                ></Route>

                <Route
                    path="/FindLayout"
                    element={<FindLayout title="아이디 찾기" />}
                ></Route>
            </Routes>

            <ProductList></ProductList>

            <Footer />

            <div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={modalTitle}
                >
                    {modalContent}
                </Modal>
            </div>
        </>
    );
}

export default App;
