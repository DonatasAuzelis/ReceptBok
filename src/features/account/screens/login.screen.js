import React, {useState, useContext} from 'react';
import {ActivityIndicator, Colors, Button} from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styles';
import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';
import {AuthenticationContext} from '../../../services/authentication/authentication.context';

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, isLoading, error} = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Min Receptbok</Title>
      <AccountContainer style={{alignItems: 'center'}}>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />

        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}>
            Logga In
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </AccountContainer>
      <Spacer size="small">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Tillbaka
        </AuthButton>
      </Spacer>
      <Button
        icon="lock"
        labelStyle={{fontSize: 15, color: 'black'}}
        style={{paddingTop: 30}}
        color="black">
        Glömt lösenordet?
      </Button>
    </AccountBackground>
  );
};
