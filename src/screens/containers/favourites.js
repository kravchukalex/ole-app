import React, {Component, Fragment} from 'react';
import {ScrollView, Image, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import News from '../../videos/components/news';
import Layout from '../../videos/components/category-list-layout';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

function mapStateToProps(state) {
  return {
    list: state.favourites,
  };
}

class Favourites extends Component {
  keyExtractor = item => {
    item.favourite.id;
  };

  renderEmpty = () => <Empty text="No hay favoritos" />;
  itemSeparator = () => <Separator />;

  viewVideo = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        video: item,
      },
    });

    this.props.navigation.navigate('VideoDetails');
  };
  renderItem = ({item}) => {
    return (
      <News
        onPress={() => {
          this.viewVideo(item.favourite);
        }}
        {...item.favourite}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}

export default connect(mapStateToProps)(function(props) {
  const navigation = useNavigation();

  return <Favourites {...props} navigation={navigation} />;
});
