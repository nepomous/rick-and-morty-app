import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenProps} from '../../Navigation/types';

// import { Container } from './styles';

export const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  const goToNextScreen = () => {
    navigation.navigate('SecondScreen');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={goToNextScreen}>
        <Text> Next Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
