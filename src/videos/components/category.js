import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

function Category(props) {
  let nameCategory = props.name;
  let nameCategoryUppercase = nameCategory.toUpperCase();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        style={styles.wrapper}
        source={{uri: props.background_image}}>
        <Text style={styles.category}>{nameCategoryUppercase}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    paddingHorizontal: 30,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#94BE20',
  },
  category: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(90,90,90,0.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
});

export default Category;
