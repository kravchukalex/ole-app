import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
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
    paddingHorizontal: 10,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    marginBottom: 18,
    fontWeight: 'bold',
  },
});

export default CategoryListLayout;
