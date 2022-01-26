import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
    text: string;
}
const Card = ({ text }: Props) => (
    <View style={styles.container}>
        <View style={styles.item}>
            <View style={styles.icon} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </View>
)

export default Card;