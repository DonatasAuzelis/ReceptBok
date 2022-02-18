import React from 'react';

import {Spacer} from '../../../components/spacer/spacer.component';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../components/account.styles';

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Min Receptbok</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          Logga In
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Registrera
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
