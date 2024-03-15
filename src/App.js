// import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Home from './component/layout/Home';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
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

import AuthForm from './cotainer/auth/AuthForm';
import Auth from './pages/Auth';
import Login from './cotainer/auth/Login';
import UserFind from './cotainer/auth/userfind';
import Terms from './cotainer/auth/terms';
import MyPage from './component/routes/mypage';

//data
import manData from './data/madata.json';

//new
// import { Auth } from './pages';
import Home from './component/layout/Home';
import Test from './cotainer/auth/Test';

function App() {
    const { item_id } = useParams();
    const [items, setItems] = useState(manData);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>

                <Route
                    path="/Login"
                    element={<Login />}
                ></Route>

                <Route
                    path="/cart"
                    element={<CartPage />}
                ></Route>
                <Route
                    path="/Detail/:item_id"
                    element={<DetailPage items={items} />}
                ></Route>

                <Route
                    path="/Sub"
                    element={<SubPage items={items} />}
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

                <Route
                    path="/test"
                    element={<Test />}
                ></Route>

                {/* <Route
                    path="/userfind/:tab"
                    element={<UserFind />}
                ></Route> */}

                <Route
                    path="/terms"
                    element={<Terms />}
                ></Route>
                <Route
                    path="/mypage"
                    element={<MyPage />}
                ></Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
