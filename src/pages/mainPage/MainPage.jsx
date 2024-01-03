import React from 'react';
import './MainPage.css'
import firstAzs from '../pageSources/mainPage/4500azs.png'
import secondAzs from '../pageSources/mainPage/10000azs.png'
import thirdAzs from '../pageSources/mainPage/20000azs.png'
import Producers from "../../UI/Components/producers/Producers.jsx";
import Geography from "../../UI/Components/geography/Geography.jsx";
import Clients from "../../UI/Components/clients/Clients.jsx";
import Reviews from "../../UI/Components/reviews/Reviews.jsx";
import News from "../../UI/Components/news/News.jsx";
const MainPage = () => {
    return (
        <main className={'MainPage'}>
            <section className={"header__part padding"}>
                <div className={"header__contentWrapper"}>
                    <div className={"header__content"}>
                        <h1 className={"header__title"}><span>Поставка нефтепродуктов</span> в Москве и Московской области</h1>
                        <p className={"header__text"}>От 1000 литров и от 46 рублей за литр</p>
                        <a className={"header__button"} href="#cta">Заказать звонок</a>
                    </div>

                </div>
                <div className={"header__footer"}>
                    <h2>Нефтепродукты</h2>
                </div>
            </section>
            <section className={"typesOfOil"}>
                    <h2 className={'visually-hidden'}>Дизельное топливо,Судовое топливо,Печное топливо</h2>
                <div className={'typesOfOil__wrapper'}>
                    <div className={"typesOfOil__oil1"}>
                        <div className={"typesOfOil__oil1--content"}>
                            <h3>Дизельное топливо</h3>
                            <p className={"typesOfOil__oil1--content-text"}>Мы являемся надежным поставщиком дизельного топлива в Москве и Московской области.</p>
                            <a className={"typesOfOil__oil1--content-link"} href="/diselOil">Подробнее</a>
                        </div>
                    </div>
                    <div className={"typesOfOil__oil2"}>
                        <div className={"typesOfOil__oil2--content"}>
                            <h3>Судовое топливо</h3>
                            <p className={"typesOfOil__oil2--content-text"}>Мы предоставляем судовое дизельное топливо как для физических лиц, так и компаниям</p>
                            <a className={"typesOfOil__oil2--content-link"} href="/shipOil">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div className={"typesOfOil__oil3"}>
                    <div className={"typesOfOil__oil3--content"}>
                        <h3>Печное топливо</h3>
                        <p className={"typesOfOil__oil3--content-text"}>Печное топливо может служить для отопления коммерческой недвижимости и частных домов, строительных площадок, в качестве топлива для небольших котельных и сельхоз организаций.</p>
                        <a className={"typesOfOil__oil3--content-link"} href="/furnaceOil">Подробнее</a>
                    </div>
                </div>
            </section>
            <section className={'neftekore padding'}>
                <div className={'neftekore__wrapper'}>
                    <h2 className={'neftekore__header-title'}>Умная <span>АЗС НЕФТЕКОР</span></h2>
                    <p className={'neftekore__header-text'}>Мы предоставляем АЗС с комплектом разрешительной документации. У нас есть решение для любого объема потребления</p>
                    <div className={'neftekore__content-list'}>
                        <div className={'neftekore__content-list__item1'}>
                            <img className={'neftekore__content-list__item1-img'} src={firstAzs} alt=""/>
                            <h5 className={'neftekore__content-list__item1-title'}>Мини АЗС на<span> 4500 литров</span></h5>
                            <p className={'neftekore__content-list__item1-text'}>Оптимально для потребления от 10 до 15 тысяч литров в месяц</p>
                        </div>
                        <div className={'neftekore__content-list__item2'}>
                            <img className={'neftekore__content-list__item2-img'} src={secondAzs} alt=""/>
                            <h5 className={'neftekore__content-list__item2-title'}>Мини АЗС на<span> 10 000 литров</span></h5>
                            <p className={'neftekore__content-list__item2-text'}>Оптимально для потребления от 15 до 35 тысяч литров в месяц</p>
                        </div>
                        <div className={'neftekore__content-list__item3'}>
                            <img className={'neftekore__content-list__item3-img'} src={thirdAzs} alt=""/>
                            <h5 className={'neftekore__content-list__item3-title'}>Мини АЗС на<span> 20 000 литров</span></h5>
                            <p className={'neftekore__content-list__item3-text'}>Оптимально для потребления от 35 тысяч литров в месяц</p>
                        </div>
                        
                    </div>
                    <a className={'neftekore__footer'} href="/miniAzs">Заказать Мини АЗС</a>
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

export default MainPage;