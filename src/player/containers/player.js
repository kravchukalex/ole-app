import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
  state = {
    // loading: true,
    paused: true,
  };
  // onBuffer = ({isBuffering}) => {
  //   this.setState({
  //     loading: isBuffering,
  //   });
  // };
  // onLoad = () => {
  //   this.setState({
  //     loading: false,
  //   });
  // };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  render(props) {
    if (this.props.video !== undefined) {
      let URL = this.props.video.videoFiles.mp4;
      return (
        <Layout
          video={
            <Video
              source={{
                uri: `${URL}`,
              }}
              style={styles.video}
              resizeMode="contain"
              paused={this.state.paused}
            />
          }
          loader={<ActivityIndicator color="red" />}
          controls={
            <ControlLayout>
              <PlayPause onPress={this.playPause} paused={this.state.paused} />
            </ControlLayout>
          }
        />
      );
    } else {
      return (
        <Layout
          // loading={this.state.loading}
          video={
            <Video
              source={require('../../../assets/tom_and_jerry_31.mp4')}
              style={styles.video}
              resizeMode="contain"
              // onBuffer={this.onBuffer}
              // onLoad={this.onLoad}
              paused={this.state.paused}
            />
          }
          loader={<ActivityIndicator color="red" />}
          controls={
            <ControlLayout>
              <PlayPause onPress={this.playPause} paused={this.state.paused} />
            </ControlLayout>
          }
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
