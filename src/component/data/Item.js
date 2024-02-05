import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.carhartt-wip.co.kr/p/%EB%82%A8%EC%84%B1/15');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 데이터를 불러옴

    return (
        <div>
            <h1>Data from API:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Item;
