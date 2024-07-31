import React from 'react';
import { BackComponentContainer, StyledText } from '../settings.styles';
import { i18n } from '../../../i18n';

const BackComponent: React.FC = () => (
  <BackComponentContainer>
    <StyledText>{i18n.t('comingSoon')}</StyledText>
  </BackComponentContainer>
);

export default BackComponent;
