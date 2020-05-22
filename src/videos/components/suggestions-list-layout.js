import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SuggestionListLayout(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    marginBottom: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default SuggestionListLayout;
