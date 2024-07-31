import React from 'react';
import { StyleSheet } from 'react-native';
import BaseScreen from '../../components/base-screen/base-screen.component';
import ContentComponent from './ui/content-component.ui';
import MiddleComponent from './ui/middle-component.ui';

const ProductsScreen: React.FC = () => {
  return (
    <BaseScreen
      topContainerHeight={194}
      ContentComponent={<ContentComponent />}
      MiddleComponent={<MiddleComponent />}
      headerStyle={styles.header}
      shouldCloudsOverlap
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  header: {
    height: 25,
  },
});
