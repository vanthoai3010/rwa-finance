import React from 'react'
import Banner from './components/Banner'
import OurMission from '@/modules/client/about/components/OurMission'
import OurTeam from '@/modules/client/about/components/Ourteam'
import TrustedBy from '@/modules/client/about/components/TrustedBy'
import JoinUs from '@/modules/client/about/components/JoinUs'


const about = () => {
  return (
    <>
      <Banner />
      <OurMission />
      <OurTeam />
      <TrustedBy />
      <JoinUs />
    </>
  )
}

export default about