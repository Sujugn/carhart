import { useState } from 'react';

//icon
import toggleOff from '../assets/img/toggleOff.png';
import toggleOn from '../assets/img/toggleOn.png';

function Toggle({ title, content }) {
    const [isCheck, setCheck] = useState(false);

    return (
        <>
            <button
                style={{
                    width: '40px',
                    height: '40px',
                    fontSize: '0',
                    backgroundImage: `url(${isCheck ? toggleOn : toggleOff})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setCheck((e) => !e);
                }}
            >
                {isCheck ? toggleOn : toggleOff}
            </button>
            {isCheck && <div>{content}</div>}
        </>
    );
}

export default Toggle;
