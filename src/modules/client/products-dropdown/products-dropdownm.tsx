'use client'

import React from 'react'
import Banner from './components/Banner'
import Functional from '@/modules/client/products-dropdown/components/Functional'
import FundList from '@/modules/client/products-dropdown/components/FundList'
import WhyChooseUs from '@/modules/client/products-dropdown/components/WhyChooseUs'
import CTA from '@/modules/client/products-dropdown/components/CTA'
const ProductsDropdown = () => {
  return (
    <div className="w-full">
      <Banner />
      <Functional />
      <FundList />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}

export default ProductsDropdown
