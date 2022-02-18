import React, {useContext, useState} from 'react';
import {Text} from 'react-native-paper';
import {Alert, View} from 'react-native';

import {AuthButton, AuthInput} from '../../account/components/account.styles';

import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {SafeArea} from '../../../components/utility/safe-area.component';

import {Spacer} from '../../../components/spacer/spacer.component';

export const ChangePasswordScreen = ({navigation}) => {
  const {onUpdatePassword, onLogout} = useContext(AuthenticationContext);
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const showAlert = () => {
    return Alert.alert('Fel!', 'Lösenord måste vara likadana!', [
      {
        text: 'Försök igen',
      },
    ]);
  };

  const updatePassword = () => {
    return Alert.alert('OK!', 'Lösenordet har uppdaterats!', [
      {
        text: 'Okej',
        onPress: () => {
          onUpdatePassword(password);
          onLogout();
        },
      },
    ]);
  };

  return (
    <SafeArea>
      <View style={{paddingTop: 200, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>
          Här kan du ändra ditt lösenord:{' '}
        </Text>
        <AuthInput
          label="Nytt lösenord"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={p => setPassword(p)}
        />
        <Spacer size="large" />

        <AuthInput
          label="Upprepa nytt lösenord"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={p => setRepeatedPassword(p)}
        />

        <AuthButton
          style={{width: 250, marginTop: 50}}
          icon="bookmark"
          mode="contained"
          onPress={password === repeatedPassword ? updatePassword : showAlert}>
          Uppdatera
        </AuthButton>
      </View>
    </SafeArea>
  );
};
