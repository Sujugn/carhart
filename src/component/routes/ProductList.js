// import React, { useState } from 'react';
// import '../assets/styles/ProductList.scss';
// import Users from '../data/Users';
// import { MdOutlineShoppingCart } from 'react-icons/md';
// import Sidebar from './Sidebar';

// export default function ProductList() {
//     // const data = props.data;

//     // const productListItems = data.map((item) => (
//     //     <li key={item.rank}>
//     //         {item.keyword} - {item.linkId}
//     //     </li>
//     // ));

//     return (
//         <div className="productlist">
//             {/* 데이터를 전달하는 콜백 함수를 Users 컴포넌트에 전달
//             <Users onDataFetched={handleDataFetched} /> */}

//             {/* <ul className="content-block">{productListItems}</ul> */}
//         </div>
//     );
// }

// // {data.map((item) => (
// //     <li key={item.linkId}>
// //         <div className="product-info">
// //             {/* 이미지를 동적으로 렌더링 */}
// //             <div className="product-img">
// //                 {/* <img
// //                     src={d.img}
// //                     alt={d.title}
// //                 /> */}
// //             </div>
// //             <div className="label">
// //                 <strong className="label-new">new</strong>
// //                 <strong className="label-best">best</strong>
// //             </div>
// //         </div>
// //         <strong className="product-name">{item.keyword}</strong>
// //         <p className="product-desc">상품정보</p>
// //         <div className="flex">
// //             {/* <strong className="product-price">₩ {d.price}</strong> */}
// //             <button
// //                 className="cart-btn"
// //                 // onClick={() => handleSidebarToggle}
// //             >
// //                 <MdOutlineShoppingCart size={30} />
// //             </button>
// //         </div>
// //     </li>
// // ))}

import React from 'react';

const ProductList = ({ products }) => {
    if (!products || !Array.isArray(products) || products.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.title}>
                        <img
                            src={product.image_url}
                            alt={product.title}
                        />
                        <a href={product.url}>{product.title}</a>
                        <p>{product.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
