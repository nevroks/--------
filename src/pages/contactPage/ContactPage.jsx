import React from 'react';
import './ContactPage.css'
const ContactPage = () => {
    return (
        <main className={'ContactPage'}>
            <div className={'ContactPage__header ContactPage__header-Bg padding'}>
                <div className={'ContactPage__header-wrapper'}>
                    <h1 className={'ContactPage__header-title'}>Контакты ООО <span>"НЕФТЕКОР ВВ"</span></h1>
                    <p className={'ContactPage__header-text'}>Поставка нефтепродуктов в Москве и Московской области</p>
                </div>
            </div>
            <section className="cta padding">
                <div className={'cta-wrapper'}>
                    <form action="" className="cta-form">
                        <p className={'cta-form__title'}><span>Свяжитесь</span> с нами</p>
                        <div>
                            <input placeholder={'Имя'} type="text"/>
                            <input placeholder={'Компания'} type="text"/>
                        </div>
                        <input placeholder={'Email'} type="text"/>
                        <input placeholder={'Телефон'} type="text"/>
                        <button className={'cta-form__button'}>
                            Отправить
                        </button>
                    </form>
                    <div className={'cta-info'}>
                        <p>141077</p>
                        <p>Московская Обл., г. Королев, ул. 50-летия ВЛКСМ, дом 4г, офис 7</p>
                        <p>ОГРН 1155018004151</p>
                        <p>ИНН 5018181082</p>
                        <p>Тел.: +7 (495) 796 53 83</p>
                        <p>Email: info@neftekor.ru</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;