import React from 'react';
import './Producers.css'
import producer1 from '../../uiSources/producers/tatneftIco.png'
import producer2 from '../../uiSources/producers/rosneftIco.png'
import producer3 from '../../uiSources/producers/gazpromIco.jpg'
import producer4 from '../../uiSources/producers/lykoilIco.jpg'
import producer5 from '../../uiSources/producers/bashneftIco.jpg'
const Producers = () => {
    return (
        <section className={'producers paddings'}>
            <h2 className={'producers__title'}><span>Производители</span> качественного топлива</h2>
            <p className={'producers__text'}>С которыми у нас прямые договора. Вы получите топливо без посредников</p>
            <ul className={'producers__list'}>
                <li className={'producers__list-item1'}><a href=""><img src={producer1} alt=""/></a></li>
                <li className={'producers__list-item2'}><a href=""><img src={producer2} alt=""/></a></li>
                <li className={'producers__list-item3'}><a href=""><img src={producer3} alt=""/></a></li>
                <li className={'producers__list-item4'}><a href=""><img src={producer4} alt=""/></a></li>
                <li className={'producers__list-item5'}><a href=""><img src={producer5} alt=""/></a></li>
            </ul>
        </section>
    );
};

export default Producers;