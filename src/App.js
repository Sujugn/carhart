// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './component/layout/Home';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import LoginPage from './component/routes/login';
import JoinPage from './component/routes/join';
import CartPage from './component/routes/cart';
import DetailPage from './component/layout/Detail';
import SubPage from './component/layout/Sub';

function App() {
    return (
        <>
            <Header />
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
            </Routes>
            <Footer />
        </>
    );
}

export default App;
