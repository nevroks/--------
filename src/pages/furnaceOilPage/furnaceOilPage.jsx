import React from 'react';
import './furnaceOilPage.css'

import lightOil from '../pageSources/furnaceOilPage/lightOilImg.jpg'

import profit1 from '../pageSources/furnaceOilPage/centralHeatingIco.svg'
import profit2 from '../pageSources/furnaceOilPage/smellLesIco.svg'
import profit3 from '../pageSources/furnaceOilPage/subtractIco.svg'

import scope1 from '../pageSources/furnaceOilPage/scope1.jpg'
import scope2 from '../pageSources/furnaceOilPage/scope2.jpg'
import scope3 from '../pageSources/furnaceOilPage/scope3.jpg'

import Producers from "../../UI/Components/producers/Producers.jsx";
import Geography from "../../UI/Components/geography/Geography.jsx";
import Clients from "../../UI/Components/clients/Clients.jsx";
import Reviews from "../../UI/Components/reviews/Reviews.jsx";
import News from "../../UI/Components/news/News.jsx";
const FurnaceOilPage = () => {
    return (
        <main className={'FurnaceOilPage'}>
            <div className={'FurnaceOilPage__header FurnaceOilPage__header-Bg padding'}>
                <div className={'FurnaceOilPage__content'}>
                    <h1 className={'FurnaceOilPage__header-title'}><span>Поставка</span> светлого <span>печного топлива</span> в Москве и Московской области</h1>
                    <div className={'FurnaceOilPage__header-info'}>
                        <div className={'FurnaceOilPage__header-info__content'}>
                            <p>Оптовые цены</p>
                            <p>высокое качество топлива</p>
                            <p>быстрая доставка</p>
                        </div>
                        <p className={'FurnaceOilPage__header-info__text'}>От 1000 литров и от 46 рублей за литр</p>
                        <a className={'FurnaceOilPage__header-info__link'} href="#cta">Заказать звонок</a>
                    </div>
                </div>
            </div>
            <section className={'lightFuel padding'}>
                <div className={'lightFuel-wrapper'}>
                    <img src={lightOil} alt=""/>
                    <div className={'lightFuel__info'}>
                        <h3 className={'lightFuel__info-title'}>Светлое печное топливо</h3>
                        <p className={'lightFuel__info-text'}>В целом процесс получения топлива является высокотехнологичным, для его изготовления используется особое современное оборудование. Различие между дизельным и печным топливом заключается главным образом в наличии примесей и органических соединений.</p>
                        <a className={'lightFuel__info-link'} href="/contact">Заказать</a>
                    </div>
                </div>
            </section>
            {/*-----from miniAzsPage.css-----*/}
            <section className={'profit padding'}>
                <h2 style={{marginBottom:20}} className={'profit-title'}><span>Почему выгодно</span> заказывать мини-АЗС у нас?</h2>
                <div className={'profit__list'}>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={profit1} alt=""/>
                        <p className={'profit__list-item__text'}>Высокая теплоотдача</p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={profit2} alt=""/>
                        <p className={'profit__list-item__text'}>Отсутствие запаха при горении</p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={profit3} alt=""/>
                        <p className={'profit__list-item__text'}>Низкая температура замерзания</p>
                    </div>
                </div>
            </section>
            {/*-----from miniAzsPage.css-----*/}
            <section className={'scope'}>
                <h2 className={'scope-title'}><span>Где используют</span> светлое печное топливо</h2>
                <p className={'scope-text'}>Топливо можно использовать для всех видов отечественных и зарубежных котлов</p>
                <div className={'scope__img-container'}>
                    <div className={'scope__img-container__container'}>
                        <img src={scope1} alt=""/>
                    </div>
                    <div className={'scope__img-container__container'}>
                        <img src={scope2} alt=""/>
                    </div>
                    <div className={'scope__img-container__container'}>
                        <img src={scope3} alt=""/>
                    </div>
                </div>
            </section>
            <Producers/>
            <Geography/>
            <Clients/>
            <Reviews/>
            <News/>
        </main>
    );
};

export default FurnaceOilPage;