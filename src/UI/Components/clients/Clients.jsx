import React from 'react';
import './Clients.css'
import firstClient from '../../uiSources/clients/lomIco.jpg'
import secondClient from '../../uiSources/clients/atlantIco.jpg'
import thirdClient from '../../uiSources/clients/22Ico.jpg'
import fourthClient from '../../uiSources/clients/zitnicaIco.jpg'
import trashIco from '../../uiSources/clients/trashIco.jpg'

const Clients = () => {
    return (
        <section className={'clients padding none'}>
            <h2 className={'clients__title'}>Клиенты</h2>
            <p className={'clients__text'}>Мы поставляем дизельное топливо более 15 лет</p>
            <div className={'clients__img-container'}>
                <a href=""><img src={firstClient} alt=""/></a>
                <a href=""><img src={secondClient} alt=""/></a>
                <a href=""><img src={thirdClient} alt=""/></a>
                <a href=""><img src={fourthClient} alt=""/></a>
                <a href=""><img src={trashIco} alt=""/></a>
            </div>
        </section>
    );
};

export default Clients;