import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import WalletCard from '../../../components/wallet/wallet.component'; // Make sure this path is correct
import { Wallet } from '../../../types/wallet.types';
import Button from '../../../components/button/button.component';
import { i18n } from '../../../i18n';
import Loader from '../../../components/loader/loader.component';
import Error from '../../../components/error/error.component';
import {
  Container,
  Header,
  ContentContainer,
  Informations,
  WalletListContainer,
  CurrenciesText,
  ButtonLabel,
  InformationText,
} from '../home.styes';

interface ContentProps {
  data: Wallet[];
  isLoading: boolean;
  theme: any; // Adjust type as needed
  error?: boolean | string;
  refreshing: boolean;
  onRefresh: () => void;
  buttonNavigate: () => void;
}

/**
 * Content component displays a list of wallets with different states (loading, error, empty).
 *
 * @component
 * @param {ContentProps} props - The props for the component.
 * @returns {JSX.Element} The rendered content component.
 *
 */
const Content: React.FC<ContentProps> = ({
  data,
  isLoading,
  theme,
  error,
  refreshing,
  onRefresh,
  buttonNavigate,
}) => {
  return (
    <Container>
      <Header>
        <CurrenciesText>{i18n.t('yourCurrencies')}</CurrenciesText>
        <Button
          onPress={buttonNavigate}
          label={i18n.t('viewAll')}
          disabled={isLoading || data?.length < 1}
          textStyle={<ButtonLabel />}
        />
      </Header>
      <ContentContainer>
        {isLoading && (
          <Informations>
            <Loader
              color={theme.colors.techBlue}
              size="large"
              loadingText={i18n.t('fetchingWallets')}
              textStyle={InformationText}
            />
          </Informations>
        )}
        {!isLoading && data.length === 0 && !error && (
          <Informations>
            <InformationText>{i18n.t('userNoWallets')}</InformationText>
          </Informations>
        )}
        {!isLoading && error && (
          <Informations>
            <Error errorText={i18n.t('errorWallet')} />
          </Informations>
        )}
        <WalletListContainer>
          {!isLoading && data && (
            <FlatList
              style={styles.flatListStyle}
              data={data?.slice(0, 3)}
              renderItem={({ item }) => (
                <WalletCard
                  amount={item?.amount?.amount}
                  currency={item?.amount?.currency}
                />
              )}
              keyExtractor={(item) => item?.accountId}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  progressViewOffset={-350}
                />
              }
            />
          )}
        </WalletListContainer>
      </ContentContainer>
    </Container>
  );
};

export default Content;
const styles = StyleSheet.create({
  flatListStyle: {
    marginBottom: 50,
  },
});
