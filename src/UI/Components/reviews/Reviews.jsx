import React from 'react';
import './Reviews.css'
import firstReview from '../../uiSources/reviews/1review.svg'
const Reviews = () => {
    return (
        <section className={'reviews padding'}>
            <div className={'reviews__content'}>
                <h2 className={'reviews__title'}>Отзывы</h2>
                <div className={'reviews__card-wrapper'}>
                    <div className={'reviews__card1'}>
                    <div className={'reviews__card1__img-container'}>
                        <p>Наведите, чтобы <br/> посмотреть письмо</p>
                        <img src={firstReview} alt=""/>
                    </div>
                    <div className={'reviews__card1__info'}>
                        <h3>ООО "ДЭКА"</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>
                    </div>
                </div>
                    <div className={'reviews__card2'}>
                    <div className={'reviews__card2__img-container'}>
                        <p>Наведите, чтобы <br/> посмотреть письмо</p>
                        <img src={firstReview} alt=""/>
                    </div>
                    <div className={'reviews__card2__info'}>
                        <h3>ООО "Уваровская ПМК 22"</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>
                    </div>
                </div>
                    <div className={'reviews__card3'}>
                    <div className={'reviews__card3__img-container'}>
                        <p>Наведите, чтобы <br/> посмотреть письмо</p>
                        <img src={firstReview} alt=""/>
                    </div>
                    <div className={'reviews__card3__info'}>
                        <h3>ООО "ВТОРМЕТАЛЛ"</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;