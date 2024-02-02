import React, { useEffect, useRef, useState } from 'react';
import styles from '../assets/styles/sidebar.module.css';

const Sidebar = ({ width = 280, children, isOpen, onToggle }) => {
    const [xPosition, setX] = useState(isOpen ? 0 : -width);
    const side = useRef();

    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = (e) => {
        e.stopPropagation();
        let sideArea = side.current;
        let sideChildren = side.current.contains(e.target);
        if (isOpen && (!sideArea || !sideChildren)) {
            setX(-width);
            onToggle(false);
        }
    };

    useEffect(() => {
        setX(isOpen ? 0 : -width);
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('click', handleClose);
        return () => {
            window.removeEventListener('click', handleClose);
        };
    }, [isOpen]);

    return (
        <div className={styles.container}>
            <div
                ref={side}
                className={styles.sidebar}
                style={{ width: `${width}px`, height: '100%', transform: `translatex(${-xPosition}px)` }}
            >
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Sidebar;
