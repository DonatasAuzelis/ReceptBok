import React, {useContext, useState} from 'react';
import {ImageBackground, TouchableOpacity, View, Alert} from 'react-native';
import styled from 'styled-components/native';

import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {SafeArea} from '../../../components/utility/safe-area.component';
import ImagePicker from 'react-native-image-crop-picker';
import {
  AuthButton,
  AuthInput,
} from '../../../features/account/components/account.styles';

const AvatarContainer = styled.View`
  align-items: center;
`;

export const ProfileSettingsScreen = ({navigation}) => {
  const {onUpdateUsername, onUpdateImage} = useContext(AuthenticationContext);

  const [image, setImage] = useState(
    'https://camo.githubusercontent.com/d6c9b8a720c63ecff51c6f6117a4b19a355f6c78a55374e50cc75e3c4f35bc31/68747470733a2f2f63646e332e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f617661746172732d392f3134352f4176617461725f526f626f742d3531322e706e67',
  );

  const [username, setUsername] = useState('');

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(i => {
      setImage(i.path);
      onUpdateImage(i.path);
    });
  };

  const updateProfile = () => {
    return Alert.alert('OK!', 'Användarnamn har uppdaterats!', [
      {
        text: 'Okej',
        onPress: () => {
          onUpdateUsername(username);
        },
      },
    ]);
  };

  return (
    <SafeArea>
      <View style={{alignItems: 'center'}}>
        <AvatarContainer style={{paddingTop: 20}}>
          <TouchableOpacity onPress={choosePhoto}>
            <ImageBackground
              source={{uri: image}}
              style={{height: 150, width: 150}}
              imageStyle={{borderRadius: 15}}
            />
          </TouchableOpacity>
          <View style={{padding: 30}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 20}}>
              Här kan du ändra dina profil uppgifter och bild
            </Text>
          </View>
        </AvatarContainer>
        <AuthInput
          label="Användarnamn"
          value={username}
          onChangeText={input => setUsername(input)}
        />
        <Spacer size="large" />

        <AuthButton
          style={{width: 250, marginTop: 50}}
          icon="bookmark"
          mode="contained"
          onPress={() => {
            username !== ''
              ? updateProfile()
              : console.log('username', username);
          }}>
          Uppdatera
        </AuthButton>
      </View>
    </SafeArea>
  );
};
