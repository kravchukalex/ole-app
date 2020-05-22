import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function VerticalSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default VerticalSeparator;
