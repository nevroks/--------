import React from 'react';
import './DiselOilPage.css'

import summerOil from '../pageSources/diselOilPage/summerOil.svg'
import Producers from "../../UI/Components/producers/Producers.jsx";
import Geography from "../../UI/Components/geography/Geography.jsx";
import Clients from "../../UI/Components/clients/Clients.jsx";
import Reviews from "../../UI/Components/reviews/Reviews.jsx";
import News from "../../UI/Components/news/News.jsx";
const DiselOilPage = () => {
    return (
        <main className={'DiselOilPage'}>
            <div className={'DiselOilPage__header DiselOilPage__header-Bg padding'}>
                <div className={'DiselOilPage__content'}>
                    <h1 className={'DiselOilPage__header-title'}><span>Поставка</span> дизельного топлива <span>Евро 5</span> в Москве и Московской области</h1>
                    <div className={'DiselOilPage__header-info'}>
                        <div className={'DiselOilPage__header-info__content'}>
                            <p>Оптовые цены</p>
                            <p>высокое качество топлива</p>
                            <p>быстрая доставка</p>
                        </div>
                        <p className={'DiselOilPage__header-info__text'}>От 1000 литров и от 46 рублей за литр</p>
                        <a className={'DiselOilPage__header-info__link'} href="#cta">Заказать звонок</a>
                    </div>
                </div>
            </div>
            <section className={'typesOfDiselOil padding'}>
                <h2 className={'visually-hidden'}>Летнее дизельное топливо (Сорт С) Межсезонное дизельное топливо (Сорт Е) Зимнее дизельное топливо (Сорт F)</h2>
                <div className={'typesOfDiselOil__list'}>
                    <div className={'typesOfDiselOil__list-item'}>
                        <div className={'typesOfDiselOil__list-item__img-container'}>
                            <img src={summerOil} alt=""/>
                        </div>
                        <div className={'typesOfDiselOil__list-item__info-container'}>
                            <h3>Летнее дизельное топливо (Сорт С)</h3>
                            <p>Летнее дизтопливо получают в результате перегонки сырой нефти, путём смешивания гидроочищенных прямогонных и вторичных углеводородных фракций с температурой выкипания от 40 до 250 град С. </p>
                            <a href="/contact">Заказать</a>
                        </div>
                    </div>
                    <div className={'typesOfDiselOil__list-item'}>
                        <div className={'typesOfDiselOil__list-item__img-container'}>
                            <img src={summerOil} alt=""/>
                        </div>
                        <div className={'typesOfDiselOil__list-item__info-container'}>
                            <h3>Межсезонное дизельное топливо (Сорт Е)</h3>
                            <p>Предназначено для работы двигателей при температуре окружающей среды до -15 °С. Обеспечивает быстрый запуск двигателя и его стабильную работу, подходит для сельскохозяйственной и грузовой техники. </p>
                            <a href="/contact">Заказать</a>
                        </div>
                    </div>
                    <div className={'typesOfDiselOil__list-item'}>
                        <div className={'typesOfDiselOil__list-item__img-container'}>
                            <img src={summerOil} alt=""/>
                        </div>
                        <div className={'typesOfDiselOil__list-item__info-container'}>
                            <h3>Зимнее дизельное топливо (Сорт F)</h3>
                            <p>Это особая марка дизельного топлива, которое обладает морозоустойчивыми свойствами. Именно такое топливо необходимо для корректной и безопасной работы двигателей при минусовых температурах.  </p>
                            <a href="/contact">Заказать</a>
                        </div>
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

export default DiselOilPage;