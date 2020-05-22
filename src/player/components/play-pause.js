import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

function PlayPause(props) {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="'rgba(90,90,90,0.7)'"
      hitSlop={{left: 5, top: 5, left: 5, bottom: 5}}>
      {props.paused ? (
        <Text style={styles.button}>PLAY</Text>
      ) : (
        <Text style={styles.button}>PAUSE</Text>
      )}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {color: 'white', fontSize: 10, fontWeight: 'bold'},
});

export default PlayPause;
