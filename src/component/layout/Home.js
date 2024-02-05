import React from 'react';
import VisualMain from '../routes/visualmain';
import ProductSlider from '../routes/ProductSlider';
import LookBook from '../routes/LookBook';
import MdPick from '../routes/MdPick';
import Insta from '../routes/Insta';

export default function Home() {
    return (
        <div>
            <VisualMain />
            <ProductSlider />
            <LookBook />
            <MdPick />
            <Insta />
        </div>
    );
}
