// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function Users() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.get('https://www.carhartt-wip.co.kr/');
//             return res.data;
//         };

//         fetchData().then((res) => setData(res));
//     }, []);

//     return (
//         <div>
//             {data.map((d) => (
//                 <Link
//                     key={d.id}
//                     to={`${d.id}`}
//                 >
//                     {d.title}
//                 </Link>
//             ))}
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Users({ onDataFetched }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://www.carhartt-wip.co.kr/');
                onDataFetched(res.data); // 데이터를 부모 컴포넌트로 전달
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [onDataFetched]);

    return (
        <div>
            {data.map((d) => (
                <Link
                    key={d.id}
                    to={`${d.id}`}
                >
                    {d.title}
                </Link>
            ))}
        </div>
    );
}
