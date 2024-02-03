import React, { useState } from 'react';
import '../assets/styles/MdPick.scss';

const MdPick = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(0);
    };

    return (
        <div className="mdpick">
            <div className="mdpick-inner inner">
                <h3 className="title">MDPICK</h3>
                <div className="md-content">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div
                            key={index}
                            className={`content-item ${hoveredIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{ width: hoveredIndex === index ? '615px' : '195px' }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MdPick;
