import React from 'react';
import { WelcomeText, CompanyName, Wrapper } from '../home.styes';
import { i18n } from '../../../i18n';

const MiddleComponent = () => {
  return (
    <Wrapper>
      <WelcomeText>{i18n.t('welcome')}</WelcomeText>
      <CompanyName>{i18n.t('companyName')}</CompanyName>
    </Wrapper>
  );
};

export default MiddleComponent;
