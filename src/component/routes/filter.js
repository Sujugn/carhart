import React from 'react';

export default function Filter() {
    const priceData = [
        { id: 'price01', desc: '0원 ~ 50,000원' },
        { id: 'price02', desc: '50,000원 ~ 150,000원' },
        { id: 'price03', desc: '150,000원 ~ 250,000원' },
        { id: 'price04', desc: '250,000원 ~ 500,000원' },
        { id: 'price05', desc: '500,0000원' },
    ];

    const colorData = [
        { id: 'color01', name: 'black', code: '000000' },
        { id: 'color02', name: 'red', code: 'FF5656' },
        { id: 'color03', name: 'blue', code: '5B6CFF' },
        { id: 'color04', name: 'yellow', code: 'FCFF66' },
        { id: 'color05', name: 'light brown', code: 'C6C7A5' },
        { id: 'color06', name: 'pink', code: 'BF75CB' },
        { id: 'color07', name: 'white', code: 'FFFFFF' },
        { id: 'color08', name: 'Medium Gray', code: '9B9B9B' },
        { id: 'color08', name: 'ligh pink', code: 'FFBBBB' },
        { id: 'color09', name: 'brown', code: '887563' },
        { id: 'color10', name: 'light gray', code: 'F2F2EA' },
        { id: 'color11', name: 'orange', code: 'FF8730' },
        { id: 'color12', name: 'green', code: '44CA72' },
        { id: 'color13', name: 'navy', code: '000B70' },
    ];

    const saleData = [
        { id: 'sale01', desc: '0%~30%' },
        { id: 'sale02', desc: '30%~50%' },
        { id: 'sale03', desc: '50%~70%' },
        { id: 'sale04', desc: '70% 이상' },
    ];
    return (
        <nav className="filter">
            <div className="price-filter">
                <p>가격</p>
                {priceData.map((prices) => (
                    <label key={prices.id}>
                        <input type="checkbox"></input>
                        {prices.desc}
                    </label>
                ))}
            </div>

            <div className="color-filter">
                <p>색상</p>
                <ul className="colors">
                    {colorData.map((colors) => (
                        <li
                            key={colors.id}
                            style={{ backgroundColor: `#${colors.code}` }}
                        ></li>
                    ))}
                </ul>
            </div>

            <div className="sale-filter">
                <p>할인율</p>
                {saleData.map((sales) => (
                    <label key={sales.id}>
                        <input type="checkbox"></input>
                        {sales.desc}
                    </label>
                ))}
            </div>
        </nav>
    );
}
