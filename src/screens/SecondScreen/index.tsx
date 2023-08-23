import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SecondScreenProps} from '../../Navigation/types';

// import { Container } from './styles';

export const SecondScreen: React.FC<SecondScreenProps> = ({
  navigation,
}: SecondScreenProps) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={goBack}>
        <Text> Next Screen</Text>
      </TouchableOpacity>
      ;
    </View>
  );
};
