import React, { useCallback } from 'react';
import useInput from './useInput';

const Home = () => {
    const [nickName, onChange, reset] = useInput({ text: '' });
    const okBtn = useCallback(
        (e) => {
            console.log('nickname', nickName.text);
            reset();
        },
        [nickName.text]
    );
    return (
        <div>
            <input
                type="text"
                name="text"
                value={nickName.text}
                onChange={onChange}
            />
            <button onClick={okBtn}>input 초기화</button>
        </div>
    );
};

export default Home;
