import React, {useState} from 'react';
import logo from '../../uiSources/header/logo.svg'
import logoutIco from '../../../generalSources/icons/logoutIcon.svg'
import logoutIco2 from '../../../generalSources/icons/Logout 1.svg'
const MyHeader = () => {
    const [modal,setModal]=useState( false)
    return (
        <header className={'header padding'}>
            <nav>
                {modal && <div className={'header__nav-list1-mobile'}>
                    <ul className={''}>
                        <li><a href="/main">Главная</a></li>
                        <li><a href="/diselOil">Дизельное топливо</a></li>
                        <li><a href="/miniAzs">Мини-АЗС</a></li>
                        <li><a href="/furnaceOil">Печное топливо</a></li>
                        <li><a href="/shipOil">Судовое топливо</a></li>
                        <li><a href="/blog">Блог</a></li>
                        <li><a href="/contact">Контакты</a></li>
                        <li className={'nav-list1__item-logout'}><a href=""><img src={logoutIco2} alt=""/><p>Личный кабинет</p></a></li>
                    </ul>
                </div>}
                <img className={'header__img'} src={logo} alt=""/>
                <div className={'header__navigation'}>
                    <ul className={'header__nav-list1'}>
                        <li><a href=".">Главная</a></li>
                        <li><a href="/diselOil">Дизельное топливо</a></li>
                        <li><a href="/miniAzs">Мини-АЗС</a></li>
                        <li><a href="/furnaceOil">Печное топливо</a></li>
                        <li><a href="/shipOil">Судовое топливо</a></li>
                        <li><a href="/blog">Блог</a></li>
                        <li><a href="/contact">Контакты</a></li>
                        <li className={'nav-list1__item-logout'}><a href=""><img src={logoutIco} alt=""/><p>Личный кабинет</p></a></li>
                    </ul>
                    <ul className={'header__nav-list2'}>
                        <li className={'nav-list2__item nav-list2__item1'}>Пн-Пт: 9:00 – 19:00</li>
                        <li className={'nav-list2__item nav-list2__item2'}>info@neftekor.ru</li>
                        <li className={'nav-list2__item nav-list2__item3'}>+7(495)7965383</li>
                    </ul>
                    <div className={'header__nav-btn'}>
                        <button onClick={()=>setModal(!modal)} className={'nav-icon-btn'}>
                            <div className={modal ? 'nav-icon nav-icon--active' : 'nav-icon'}>

                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default MyHeader;