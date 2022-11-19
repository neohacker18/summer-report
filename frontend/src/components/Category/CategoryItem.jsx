import React from 'react'
import Sweater from '../../img/sweater.jpeg'

const CategoryItem = () => {
  return (
    <div className='home__card__container'>
        <div className='home__card__image'>
            <img src={Sweater} alt="" />
        </div>
        <div className='home__card__info'>
            <h1>Apollo Running Short</h1>
            <h1>$50.00</h1>
        </div>
    </div>
  )
}

export default CategoryItem