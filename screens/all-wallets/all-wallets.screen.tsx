import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import SimpleScreen from '../../components/simple-screen/simple-screen.component';
import WalletCard from '../../components/wallet/wallet.component';
import { getCurrencyName } from '../../utils/helperFunctions/currencyFunctions';
import Slider from '@react-native-community/slider';
import { i18n } from '../../i18n';
import { Wallet } from '../../types/wallet.types';
import { RootState } from '../../redux/store';
import { useTheme } from 'styled-components';
import {
  Container,
  SearchInputContainer,
  StyledSearchInput,
  PlaceholderText,
  FilterContainer,
  SliderLabel,
  NoWalletsText,
} from './all-wallets.styles';

interface AllWalletsScreenProps {
  wallets: Wallet[];
}

const AllWalletsScreen: React.FC<AllWalletsScreenProps> = ({ wallets }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWallets, setFilteredWallets] = useState(wallets);
  const [amountFilter, setAmountFilter] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const inputRef = useRef<TextInput>(null);

  const theme = useTheme();

  useEffect(() => {
    const max = Math.max(
      ...wallets.map((wallet) => parseFloat(wallet.amount.amount)),
    );
    setMaxAmount(max);
  }, [wallets]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filterWallets = useCallback(() => {
    let filtered = wallets;
    if (searchQuery !== '') {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (wallet) =>
          wallet.amount.currency.toLowerCase().includes(lowercasedQuery) ||
          getCurrencyName(wallet.amount.currency)
            .toLowerCase()
            .includes(lowercasedQuery),
      );
    }
    if (amountFilter > 0) {
      filtered = filtered.filter(
        (wallet) => parseFloat(wallet.amount.amount) >= amountFilter,
      );
    }
    setFilteredWallets(filtered);
  }, [searchQuery, amountFilter, wallets]);

  useEffect(() => {
    filterWallets();
  }, [searchQuery, amountFilter, wallets, filterWallets]);

  return (
    <SimpleScreen>
      <Container>
        <SearchInputContainer>
          {searchQuery === '' && (
            <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
              <PlaceholderText>{i18n.t('currencySearch')}</PlaceholderText>
            </TouchableWithoutFeedback>
          )}
          <StyledSearchInput
            ref={inputRef}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </SearchInputContainer>
        <FilterContainer>
          <SliderLabel>
            {i18n.t('minnimumAmount')}
            {amountFilter}
          </SliderLabel>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={maxAmount}
            step={100}
            value={amountFilter}
            onValueChange={setAmountFilter}
            minimumTrackTintColor={theme.colors.labelDefault}
            maximumTrackTintColor={theme.colors.primary}
            thumbTintColor={theme.colors.primary}
          />
        </FilterContainer>
        {filteredWallets.length === 0 ? (
          <NoWalletsText>{i18n.t('noWalletsSearch')}</NoWalletsText>
        ) : (
          <FlatList
            data={filteredWallets}
            renderItem={({ item }) => (
              <WalletCard
                amount={item.amount.amount}
                currency={item.amount.currency}
              />
            )}
            keyExtractor={(item) => item.accountId}
          />
        )}
      </Container>
    </SimpleScreen>
  );
};

const mapStateToProps = (state: RootState) => ({
  wallets: state.wallet.allWallets,
});

export default connect(mapStateToProps)(AllWalletsScreen);
const styles = StyleSheet.create({
  slider: { width: '100%', height: 40 },
});
