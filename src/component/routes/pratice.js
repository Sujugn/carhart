import React, { useState } from 'react';
import '../assets/styles/pratice.scss';

export default function Pratice() {
    const PraticeData = [
        { id: 'p-01', name: 'Product 1', price: 36000 },
        { id: 'p-02', name: 'Product 2', price: 40000 },
        { id: 'p-03', name: 'Product 3', price: 20000 },
        { id: 'p-04', name: 'Product 4', price: 60000 },
    ];

    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [delviery, setDelivery] = useState(3000);

    const handleAddToCart = (item) => {
        const updatedCart = [...cart, { id: item.id, name: item.name, price: item.price, quantity }];
        setCart(updatedCart);
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity;
        setCart(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div
            className="inner flex"
            style={{
                justifyContent: 'space-around',
            }}
        >
            <section>
                {PraticeData.map((item, index) => (
                    <div key={item.id}>
                        <ul className="item-box">
                            <li>{item.name}</li>
                            <li>{item.price.toLocaleString()}원</li>
                            <button
                                className="cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                장바구니담기
                            </button>
                        </ul>
                    </div>
                ))}
            </section>

            <section className="pratice-cartstore">
                <h3>장바구니 담긴 리스트</h3>
                {cart.length === 0 ? (
                    <div>
                        <p>장바구니가 비어있습니다.</p>
                    </div>
                ) : (
                    <div>
                        {cart.map((cartItem, index) => (
                            <div key={cartItem.id}>
                                <p>{cartItem.name}</p>
                                <p>{cartItem.price.toLocaleString()}</p>

                                <h2>수량</h2>
                                <div className="flex">
                                    <button
                                        onClick={() => handleQuantityChange(index, Math.max(cartItem.quantity - 1, 1))}
                                    >
                                        -
                                    </button>
                                    <input
                                        value={cartItem.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(index, Math.max(parseInt(e.target.value, 10), 1))
                                        }
                                    ></input>
                                    <button
                                        onClick={() => handleQuantityChange(index, Math.max(cartItem.quantity + 1, 1))}
                                    >
                                        +
                                    </button>

                                    <h3>상품금액</h3>
                                    <div>{(cartItem.price * cartItem.quantity).toLocaleString()}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section>
                <ul className="delivery-price flex">
                    <li>배송비</li>
                    <li>{delviery.toLocaleString()}원</li>
                </ul>

                <ul className="total-price flex">
                    <li>총 합계 금액</li>
                    <li>{calculateTotalPrice().toLocaleString()}</li>
                </ul>
            </section>
        </div>
    );
}
