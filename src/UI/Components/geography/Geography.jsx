import React from 'react';
import './Geography.css'
import img from '../../uiSources/geography/image 4.png'
const Geography = () => {
    return (
        <section className={'geography padding'}>
            <div className={'geography__wrapper'}>
                <h2 className={'geography__title'}>География <span>поставок</span></h2>
                <div className={'geography__img-container'}>
                    <img className={'geography__img'} src={img} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Geography;