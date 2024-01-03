import React from 'react';
import './Footer.css'
import firstPerson from '../../uiSources/footer/person1.jpg'
import secondPerson from '../../uiSources/footer/person2.jpg'
import thirdPerson from '../../uiSources/footer/person3.jpg'
import logo from '../../uiSources/footer/logo.svg'
import logoutIco from '../../../generalSources/icons/logoutIcon2.svg'

import dzenLogo from '../../uiSources/footer/Yandex_Zen_logo_icon 1.svg'
import vkLogo from '../../uiSources/footer/VK com 1.svg'
import whatsappLogo from '../../uiSources/footer/whatsapp 1.svg'
import telegramLogo from '../../uiSources/footer/telegram_app 1.svg'
const Footer = () => {
    return (
        <footer className={'footer'}>
            <div id={'cta'} className={'footer__header padding'}>
                <p className={'footer__header-title'}>Свяжитесь <span>с нами!</span></p>
                <form className={'footer__header__cta'}  action="">
                    <input className={'footer__header__cta-input'} placeholder={'Имя'}/>
                    <input className={'footer__header__cta-input'} placeholder={'Телефон'}/>
                    <div>
                        <button className={'footer__header__cta-button'}>Отправить</button>
                        <p>Согласен с <a href=".">политикой конфиденциальности</a></p>
                    </div>
                </form>
            </div>
            <div className={'footer__our-team padding '}>
                <div className={'footer__our-team__content'}>
                    <h2 className={'footer__our-team__title'}>Наша <span>команда</span></h2>
                    <div className={'footer__our-team__persons-list'}>
                        <div className={'footer__our-team__persons-list__item'}>
                            <img className={'footer__our-team__persons-list__item-img'} src={firstPerson} alt=""/>
                            <h3 className={'footer__our-team__persons-list__item-title'}>Олег Костенко</h3>
                            <p className={'footer__our-team__persons-list__item-text1'}>Менеджер по работе с клиентами</p>
                            <p className={'footer__our-team__persons-list__item-text2'}>+ 7 999 999 99 99</p>
                        </div>
                        <div className={'footer__our-team__persons-list__item'}>
                            <img className={'footer__our-team__persons-list__item-img'} src={secondPerson} alt=""/>
                            <h3 className={'footer__our-team__persons-list__item-title'}>Олег Костенко</h3>
                            <p className={'footer__our-team__persons-list__item-text1'}>Менеджер по работе с клиентами</p>
                            <p className={'footer__our-team__persons-list__item-text2'}>+ 7 999 999 99 99</p>
                        </div>
                        <div className={'footer__our-team__persons-list__item'}>
                            <img className={'footer__our-team__persons-list__item-img'} src={thirdPerson} alt=""/>
                            <h3 className={'footer__our-team__persons-list__item-title'}>Олег Костенко</h3>
                            <p className={'footer__our-team__persons-list__item-text1'}>Менеджер по работе с клиентами</p>
                            <p className={'footer__our-team__persons-list__item-text2'}>+ 7 999 999 99 99</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer__map'} id={'map'}>

            </div>
            <div className={'footer__footer padding'}>
                <div className={'footer__footer__nav-section'}>
                    <div className={'footer__footer__nav-section__info'}>
                        <img className={'footer__footer__nav-section__info-img'} src={logo} alt=""/>
                        <div className={'footer__footer__nav-section__info-text'}>
                            <p>Отсутствие посредников на всех этапах топливного обеспечения. </p>
                            <p>Закупка напрямую с НПЗ, собственное производство емкостей, ТРК и мини АЗС. </p>
                            <p>Поставка топлива своими бензовозами.</p>
                        </div>
                    </div>
                    <nav className={'footer__footer__nav-section__nav'}>
                        <ul className={'footer__footer__nav-section__nav-list'}>
                            <li><a href=".">Главная</a></li>
                            <li><a href="/diselOil">Дизельное&nbsp;топливо</a></li>
                            <li><a href="/miniAzs">Мини-АЗС</a></li>
                            <li><a href="/furnaceOil">Печное топливо</a></li>
                            <li><a href="/shipOil">Судовое топливо</a></li>
                            <li><a href="/blog">Блог</a></li>
                        </ul>
                        <div className={'footer__footer__nav-section__nav__img-container'}>
                            <img src={logoutIco} alt=""/>
                            <p>Личный&nbsp;кабинет</p>
                        </div>

                    </nav>
                </div>
                <div className={'footer__footer__info'}>
                    <div className={"footer__footer__info-text"}>
                        <p>©2022 Все права защищены</p>
                        <a href="">Политика конфиденциальности</a>
                    </div>
                    <div className={"footer__footer__info-socials"}>
                        <p>Мы в соцсетях:</p>
                        <div className={'footer__footer__info-socials__img-container'}>
                            <a href="."><img src={dzenLogo} alt=""/></a>
                            <a href="."><img src={vkLogo} alt=""/></a>
                            <a href="."><img src={whatsappLogo} alt=""/></a>
                            <a href="."><img src={telegramLogo} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;