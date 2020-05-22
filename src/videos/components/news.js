import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Player from '../../player/containers/player';

function News(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.cover}>
            <Player video={props} />
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10,
    width: '95%',
    shadowColor: 'red',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowRadius: 20,
  },
  top: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  bottom: {
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    marginTop: 20,
    backgroundColor: '#94BE20',
    paddingVertical: 6,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
});

export default News;
