import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

interface Props {
    onPress: () => void;
    icon: string,
}
const IconButton = ({ onPress, icon }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Text>{icon}</Text>
    </View>
  </TouchableOpacity>
);

export default IconButton;
