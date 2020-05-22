import React, {Component} from 'react';
import VideoLayout from '../components/videoLayout';
import Player from '../../player/containers/player';
import Details from '../../videos/components/details';
import {connect} from 'react-redux';
import {Animated} from 'react-native';

function mapsStateToPros(state) {
  return {
    videoSelected: state.selectedVideo,
    favourites: state.favourites,
  };
}

class VideoDetails extends Component {
  state = {
    opacity: new Animated.Value(0),
  };
  favouriteVideo = info => {
    this.props.dispatch({
      type: 'SET_FAVOURITES',
      payload: {
        favourite: this.props.videoSelected,
      },
    });
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  render() {
    return (
      <Animated.View style={{flex: 1, opacity: this.state.opacity}}>
        <VideoLayout>
          <Player video={this.props.videoSelected} />
          <Details
            onPress={this.favouriteVideo}
            {...this.props.videoSelected}
          />
        </VideoLayout>
      </Animated.View>
    );
  }
}

export default connect(mapsStateToPros)(VideoDetails);
