// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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

function App() {
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
                    element={<JoinPage />}
                ></Route>
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
                ></Route>

                <Route
                    path="/Map"
                    element={<MapPage />}
                ></Route>
                <Route
                    path="/pratice"
                    element={<Pratice />}
                ></Route>
            </Routes>
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
