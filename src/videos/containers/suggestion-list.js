import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

function mapStateToProps(state) {
  return {
    list: state.suggestionList,
  };
}

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay sugerencias" />;
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
      <Suggestion
        onPress={() => {
          this.viewVideo(item);
        }}
        {...item}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(function(props) {
  const navigation = useNavigation();

  return <SuggestionList {...props} navigation={navigation} />;
});
