import React from 'react';
import Banner from './components/Banner';
import SecuritySection from '@/modules/client/security/components/SecuritySection';
import VerifiedAuditsSection from '@/modules/client/security/components/VerifiedAuditsSection ';
import ProofOfReserve from '@/modules/client/security/components/ProofOfReserve';
import BugBountySection from '@/modules/client/security/components/BugBountySection';
import TrustConfirmation from '@/modules/client/security/components/TrustConfirmation';

const Security = () => {
  return (
    <>
      <Banner />
      <SecuritySection /> 
      <VerifiedAuditsSection />
      <ProofOfReserve />
      <BugBountySection />
      <TrustConfirmation />
    </>
  );
};

export default Security;