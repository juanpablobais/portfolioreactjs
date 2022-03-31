import React from 'react'
import Product from '../product/Product'
import './productList.css'
import {products} from '../../data'
import { useTranslation } from "react-i18next"

const ProductList = () => {
  const [t, i18n,] = useTranslation("productList");
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title"> {t("h1.pl-title.title")} </h1>
        <p className="pl-desc">
          {t("p.pl-desc.description")}
        </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product key={item.id} img= {item.img} link={item.link}/>
        ))}
        
      </div>
    </div>
  )
}

export default ProductList