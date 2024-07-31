import React from 'react';
import { i18n } from '../../../i18n';
import { HeaderText } from '../products.style';

const MiddleComponent: React.FC = () => {
  return <HeaderText>{i18n.t('products')}</HeaderText>;
};

export default MiddleComponent;
