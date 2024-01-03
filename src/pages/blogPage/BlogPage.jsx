import React from 'react';
import './BlogPage.css'

import emptyImage from '../../generalSources/emptyImg.jpg'
import Clients from "../../UI/Components/clients/Clients.jsx";
const BlogPage = () => {
    return (
        <main className={'BlogPage'}>
            <div className={'BlogPage__header BlogPage__header-Bg padding'}>
                <div className={'BlogPage__header-wrapper'}>
                    <h1 className={'BlogPage__header-title'}>Блог</h1>
                    <p className={'BlogPage__header-text'}>Поставка нефтепродуктов в Москве и Московской области</p>
                </div>
            </div>
            <section className={'blogPostList padding'}>
                <div className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
                <div className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
                <div className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
                <div className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
                <div className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
                <div id={'new'} className={'blogPostList-item'}>
                    <div className={'blogPostList-item__img-container'}>
                        <img src={emptyImage} alt=""/>
                    </div>
                    <div className={'blogPostList-item__txt-container'}>
                        <h5 className={'blogPostList-item__txt-container__title'}>Заголовок новости Заголовок новости Заголовок</h5>
                        <div>
                            <p>Дата: 12.05.2022</p>
                            <p>Автор: Admin</p>
                            <p>Просмотров: 695</p>
                            <p>Комментариев: 16</p>
                        </div>
                        <p className={'blogPostList-item__txt-container__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                        <a className={'blogPostList-item__txt-container__link'} href="">Читать далее</a>
                    </div>
                </div>
            </section>
            <Clients/>
        </main>
    );
};

export default BlogPage;