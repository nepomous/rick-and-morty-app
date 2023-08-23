import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SecondScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type SecondScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SecondScreen'
>;
