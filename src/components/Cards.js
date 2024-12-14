import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these images</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="Exploooooooooooooooooooore"
              label='Adventure'
              path='/services'
            />
              <CardItem
              src='images/img-5.jpg'
              text="Exploooooooooooooooooooore"
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text="Exploooooooooooooooooooore"
              label='Adventure'
              path='/services'
            />
              <CardItem
              src='images/img-5.jpg'
              text="Exploooooooooooooooooooore"
              label='Adventure'
              path='/services'
            />
              <CardItem
              src='images/img-7.jpg'
              text="Exploooooooooooooooooooore"
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
