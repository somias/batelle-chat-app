import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#94BD59" />
    </View>
  );
};

export default LoadingSpinner;
