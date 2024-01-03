import React from 'react';
import './ShipOilPage.css'

import firstBenefit from '../pageSources/shipOilPage/topIco.svg'
import secondBenefit from '../pageSources/shipOilPage/newIco.svg'
import thirdBenefit from '../pageSources/shipOilPage/saleIco.svg'
import Producers from "../../UI/Components/producers/Producers.jsx";
import Geography from "../../UI/Components/geography/Geography.jsx";
import Clients from "../../UI/Components/clients/Clients.jsx";
import Reviews from "../../UI/Components/reviews/Reviews.jsx";
import News from "../../UI/Components/news/News.jsx";
const ShipOilPage = () => {
    return (
        <main className={'ShipOilPage'}>
            <div className={'ShipOilPage__header ShipOilPage__header-Bg padding'}>
                <div className={'ShipOilPage__content'}>
                <h1 className={'ShipOilPage__header-title'}><span>Поставка судового</span> дизельного<span> топлива</span> в Москве и Московской области</h1>
                    <div className={'ShipOilPage__header-info'}>
                        <div className={'ShipOilPage__header-info__content'}>
                            <p>Оптовые цены</p>
                            <p>высокое качество топлива</p>
                            <p>быстрая доставка</p>
                        </div>
                        <p className={'ShipOilPage__header-info__text'}>От 1000 литров и от 46 рублей за литр</p>
                        <a className={'ShipOilPage__header-info__link'} href="#cta">Заказать звонок</a>
                    </div>
                </div>
            </div>
            <section className={'uWillGet padding'}>
                <div className={'uWillGet-wrapper'}>
                    <h2 className={'uWillGet-title'}>
                        Вы получите <span>персональные условия</span> доставки топлива <span>в любых объемах</span> и по <span>нужному вам графику.</span>
                    </h2>
                </div>
            </section>
            {/*-----from miniAzsPage.css-----*/}
            <section className={'profit padding'}>
                <h2 className={'profit-title'}><span>Преимущества</span> работы с нами</h2>
                <p className={'profit-text'}>Отработанные логистические схемы и наличие собственного автопарка гарантируют минимальные сроки поставки</p>
                <div className={'profit__list'}>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={firstBenefit} alt=""/>
                        <p className={'profit__list-item__text'}>Мы сотрудничаем с известными нефтеперерабатывающими
                            заводами России. Гарантируем
                            соответствие топлива всем требованиям
                        </p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={secondBenefit} alt=""/>
                        <p className={'profit__list-item__text'}>Точный учет объема топлива при
                            отгрузке обеспечивается современным оборудованием контроля налива.</p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={thirdBenefit} alt=""/>
                        <p className={'profit__list-item__text'}>Низкие и выгодные для вас цены, индивидуальный условия для
                            постоянных клиентов.</p>
                    </div>
                </div>
            </section>
            {/*-----from miniAzsPage.css-----*/}
            <section className={'provider padding'}>
                <div className={'provider-wrapper'}>
                    <h1 className={'provider-title'}>НЕФТЕ<span>КОР</span></h1>
                    <p className={'provider-text'}>надежный поставщик нефтепродуктов</p>
                    <a className={'provider-link'} href="/contact">Заказать звонок</a>
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

export default ShipOilPage;