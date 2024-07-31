import React from 'react';
import { useTheme } from 'styled-components';
import FlippableMenuItem from '../../components/flippable-menu-item/flippable-menu-item';
import SettingsSvg from '../../assets/images/settings.svg';
import UserSvg from '../../assets/images/user.svg';
import PrivacySvg from '../../assets/images/privacy.svg';
import { i18n } from '../../i18n';
import BackComponent from './ui/back-component.ui';
import SimpleScreen from '../../components/simple-screen/simple-screen.component';
import {
  Container,
  ProfileContainer,
  ProfileName,
  SectionTitle,
} from './settings.styles';

const SettingsScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <SimpleScreen>
      <Container>
        <ProfileContainer>
          <UserSvg width="80" height="80" fill={theme.colors.labelDefault} />
          <ProfileName>{i18n.t('userName')}</ProfileName>
        </ProfileContainer>

        <SectionTitle>{i18n.t('personalDetails')}</SectionTitle>

        <FlippableMenuItem
          title={i18n.t('personalInfoSettings')}
          subtitle={i18n.t('personalInfoSettingsMore')}
          onPress={() => {}}
          LeftIcon={UserSvg}
          iconColor={theme.colors.techBlue}
          BackComponent={BackComponent}
        />

        <SectionTitle>{i18n.t('securityAndPrivacy')}</SectionTitle>
        <FlippableMenuItem
          title={i18n.t('securityAndPrivacySettings')}
          subtitle={i18n.t('securityAndPrivacySettingsMore')}
          onPress={() => {}}
          LeftIcon={PrivacySvg}
          iconColor={theme.colors.techBlue}
          BackComponent={BackComponent}
        />

        <SectionTitle>{i18n.t('preferences')}</SectionTitle>
        <FlippableMenuItem
          title={i18n.t('preferencesSettings')}
          subtitle={i18n.t('preferencesSettingsMore')}
          onPress={() => {}}
          LeftIcon={SettingsSvg}
          iconColor={theme.colors.techBlue}
          BackComponent={BackComponent}
        />
      </Container>
    </SimpleScreen>
  );
};

export default SettingsScreen;
