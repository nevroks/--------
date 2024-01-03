import React from 'react';
import './MiniAzsPage.css'

import firstAzs from '../pageSources/miniAzsPage/azs4500.jpg'
import gasPumpIco from '../pageSources/miniAzsPage/gasPumpIco.svg'
import gasStationIco from '../pageSources/miniAzsPage/gasStationIco.svg'
import synchronizeIco from '../pageSources/miniAzsPage/synchronizeIco.svg'

import example1 from '../pageSources/miniAzsPage/example1.jpg'
import example2 from '../pageSources/miniAzsPage/example2.jpg'
import example3 from '../pageSources/miniAzsPage/example3.jpg'
import example4 from '../pageSources/miniAzsPage/example4.jpg'
import example5 from '../pageSources/miniAzsPage/example5.jpg'
import example6 from '../pageSources/miniAzsPage/example6.jpg'

import certificate1 from '../pageSources/miniAzsPage/certificate1.jpg'
import certificate2 from '../pageSources/miniAzsPage/certificate2.jpg'
import certificate3 from '../pageSources/miniAzsPage/certificate3.jpg'
import certificate4 from '../pageSources/miniAzsPage/certificate4.jpg'
import certificate5 from '../pageSources/miniAzsPage/certificate5.jpg'
import Geography from "../../UI/Components/geography/Geography.jsx";
import Clients from "../../UI/Components/clients/Clients.jsx";
import Reviews from "../../UI/Components/reviews/Reviews.jsx";
import News from "../../UI/Components/news/News.jsx";

const MiniAzsPage = () => {
    return (
        <main className={'MiniAzsPage'}>
            <div className={'MiniAzsPage__header padding none'}>
                <div className={'MiniAzsPage__header-wrapper'}>
                    <h1 className={'MiniAzsPage__header-title'}><span>Мини-АЗС</span> НЕФТЕКОР</h1>
                    <p className={'MiniAzsPage__header-text'}>Получите собственную АЗС на вашем предприятии</p>
                    <a className={'MiniAzsPage__header-link'} href="#cta">Заказать звонок</a>
                </div>
            </div>
            <section className={'azsCatalog padding none'}>
                <div className={'azsCatalog__wrapper'}>
                    <h2 className={'azsCatalog-title'}>
                        У нас <span>есть решение для любого
                        объема</span> потребления
                    </h2>
                    <div className={'azsCatalog__list'}>
                        <div className={'azsCatalog__list-item'}>
                            <img src={firstAzs} alt=""/>
                            <h5 className={'azsCatalog__list-item__title'}>Мини АЗС на <span>4500 литров</span></h5>
                            <p className={'azsCatalog__list-item__text'}>Оптимально для потребления от 10 до 15 тысяч литров в месяц</p>
                            <ul className={'azsCatalog__list-item__benefits-list'}>
                                <li>Цена от 888 888 тысяч рублей</li>
                                <li>Производство за 20 дней</li>
                                <li>Бесплатная доставка</li>
                                <li>Монтаж за 1 день</li>
                            </ul>
                            <a className={'azsCatalog__list-item__link'} href="/contact">Заказать звонок</a>
                        </div>
                        <div className={'azsCatalog__list-item'}>
                            <img src={firstAzs} alt=""/>
                            <h5 className={'azsCatalog__list-item__title'}>Мини АЗС на <span>4500 литров</span></h5>
                            <p className={'azsCatalog__list-item__text'}>Оптимально для потребления от 10 до 15 тысяч литров в месяц</p>
                            <ul className={'azsCatalog__list-item__benefits-list'}>
                                <li>Цена от 888 888 тысяч рублей</li>
                                <li>Производство за 20 дней</li>
                                <li>Бесплатная доставка</li>
                                <li>Монтаж за 1 день</li>
                            </ul>
                            <a className={'azsCatalog__list-item__link'} href="/contact">Заказать звонок</a>
                        </div>
                        <div className={'azsCatalog__list-item'}>
                            <img src={firstAzs} alt=""/>
                            <h5 className={'azsCatalog__list-item__title'}>Мини АЗС на <span>4500 литров</span></h5>
                            <p className={'azsCatalog__list-item__text'}>Оптимально для потребления от 10 до 15 тысяч литров в месяц</p>
                            <ul className={'azsCatalog__list-item__benefits-list'}>
                                <li>Цена от 888 888 тысяч рублей</li>
                                <li>Производство за 20 дней</li>
                                <li>Бесплатная доставка</li>
                                <li>Монтаж за 1 день</li>
                            </ul>
                            <a className={'azsCatalog__list-item__link'} href="/contact">Заказать звонок</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'profit padding none'}>
                <h2 className={'profit-title'}><span>Почему выгодно</span> заказывать мини-АЗС у нас?</h2>
                <p className={'profit-text'}>Доставим, подключим и проведем обучение персонала</p>
                <div className={'profit__list'}>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={gasPumpIco} alt=""/>
                        <p className={'profit__list-item__text'}>Мы производим
                            Мини АЗС более
                            8 лет и наработали
                            большой опыт</p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={gasStationIco} alt=""/>
                        <p className={'profit__list-item__text'}>За это время мы
                            ввели в
                            эксплуатацию
                            более 100 Мини-АЗС</p>
                    </div>
                    <div className={'profit__list-item'}>
                        <img className={'profit__list-item__img'} src={synchronizeIco} alt=""/>
                        <p className={'profit__list-item__text'}>У нас возможно <br/> приобретение Мини
                            АЗС <br/> Б/У</p>
                    </div>
                </div>
            </section>
            <section className="azsExamples padding none">
                <h2 className={'azsExamples-title'}>Примеры наших <span>АЗС на предприятиях</span></h2>
                <div className={'azsExamples__img-container'}>
                    <div>
                        <img src={example1} alt=""/>
                        <img src={example2} alt=""/>
                    </div>

                    <div className={'annoy'}>
                        <img src={example3} alt=""/>
                        <img src={example4} alt=""/>
                    </div>

                    <div>
                        <img src={example5} alt=""/>
                        <img src={example6} alt=""/>
                    </div>
                </div>
            </section>
            <section className="certified padding">
                <h2 className={'certified-title'}>Мини-АЗС Нефтекор <br/><span>сертефицированы</span></h2>
                <p className={'certified-text'}>Мы поставляем продукцию с полным комплектом разрешительной документации</p>
                <div className={'certified__img-container__wrapper'}>
                    <div className="certified__img-container">
                        <img src={certificate1} alt=""/>
                        <img src={certificate2} alt=""/>
                        <img src={certificate3} alt=""/>
                        <img src={certificate4} alt=""/>
                        <img src={certificate5} alt=""/>

                    </div>
                </div>
            </section>
            <Geography/>
            <Clients/>
            <Reviews/>
            <News/>
        </main>
    );
};

export default MiniAzsPage;