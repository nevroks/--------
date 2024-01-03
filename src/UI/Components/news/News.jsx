import React from 'react';
import './News.css'
import img from '../../../generalSources/emptyImg.jpg'
const News = () => {
    return (
        <section className={'news padding'}>
            <div className={'news__content'}>
                <h2 className={'news__title'}><span>Новости </span>топливного рынка</h2>
                <div className={'news__list'}>
                    <div className={'news__list-item'}>
                        <div className={'news__list-item__img-container'}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={'news__list-item__text-container'}>
                            <h6 className={'news__list-item__title'}>Заголовок новости</h6>
                            <p className={'news__list-item__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости
                                Текст новости  новости Текст новости  новости Текст новости Текст новости
                            </p>
                            <a className={'news__list-item__button'} href="/blog/#new">Подробнее</a>
                        </div>
                    </div>
                    <div className={'news__list-item'}>
                        <div className={'news__list-item__img-container'}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={'news__list-item__text-container'}>
                            <h6 className={'news__list-item__title'}>Заголовок новости</h6>
                            <p className={'news__list-item__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости
                                Текст новости  новости Текст новости  новости Текст новости Текст новости
                            </p>
                            <a className={'news__list-item__button'} href="/blog/#new">Подробнее</a>
                        </div>
                    </div>
                    <div className={'news__list-item'}>
                        <div className={'news__list-item__img-container'}>
                            <img src={img} alt=""/>
                        </div>
                        <div className={'news__list-item__text-container'}>
                            <h6 className={'news__list-item__title'}>Заголовок новости</h6>
                            <p className={'news__list-item__text'}>Текст новости  новости Текст новости  новости Текст новости Текст новости
                                Текст новости  новости Текст новости  новости Текст новости Текст новости
                            </p>
                            <a className={'news__list-item__button'} href="/blog/#new">Подробнее</a>
                        </div>
                    </div>
                </div>
                <a className={'news__button'} href="/blog">Смотреть все новости</a>
            </div>
        </section>
    );
};

export default News;