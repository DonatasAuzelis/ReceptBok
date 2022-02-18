import React, {useContext, useState} from 'react';
import {List} from 'react-native-paper';
import {ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {Text} from '../../../components/typography/text.component';
import {Spacer} from '../../../components/spacer/spacer.component';

import {AuthenticationContext} from '../../../services/authentication/authentication.context';
import {SafeArea} from '../../../components/utility/safe-area.component';

import ImagePicker from 'react-native-image-crop-picker';

import {doc, getDoc} from 'firebase/firestore';
import {firestore} from '../../../services/authentication/auth';

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({navigation}) => {
  const {onLogout, user, onUpdateProfile} = useContext(AuthenticationContext);
  const [profileImage, setProfileImage] = useState(
    'https://www.shareicon.net/data/256x256/2016/07/05/791221_man_512x512.png',
  );
  const [displayName, setDisplayName] = useState('');

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfileImage(image.path);
    });
  };

  return (
    <SafeArea>
      <AvatarContainer style={{paddingTop: 20}}>
        <TouchableOpacity onPress={choosePhoto}>
          <ImageBackground
            source={{uri: user.photoURL}}
            style={{height: 150, width: 150}}
            imageStyle={{borderRadius: 15}}
          />
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">Hej, {user.displayName}!</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{padding: 16}}
          title="Mina Recept"
          left={props => <List.Icon {...props} color="black" icon="food" />}
          onPress={() => navigation.navigate('UserRecipes')}
        />
        <SettingsItem
          style={{padding: 16}}
          title="Mina Favoriter"
          left={props => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          style={{padding: 16}}
          title="Profil Inställningar"
          left={props => <List.Icon {...props} color="black" icon="account" />}
          onPress={() => navigation.navigate('ProfileSettings')}
        />
        <SettingsItem
          style={{padding: 16}}
          title="Ändra Lösenord"
          left={props => <List.Icon {...props} color="black" icon="safe" />}
          onPress={() => navigation.navigate('ChangePassword')}
        />
        <Spacer position="top" size="xxl" />
        <SettingsItem
          style={{padding: 16}}
          title="Logga Ut"
          left={props => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
