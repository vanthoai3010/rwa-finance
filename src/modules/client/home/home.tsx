import React from 'react'
import Banner from './components/Banner'
import FeaturesSection from '@/modules/client/home/components/FeaturesSection'
import FundList from '@/modules/client/home/components/FundList'
import TrustSection from '@/modules/client/home/components/TrustSection'
import HowItWorksSection from '@/modules/client/home/components/HowItWorksSection'
import CallToAction from '@/modules/client/home/components/CallToAction'

const home = () => {
  return (
    <>
      <Banner />
      <FeaturesSection />
      <FundList />
      <TrustSection />
      <HowItWorksSection />
      <CallToAction />
    </>
  )
}

export default home