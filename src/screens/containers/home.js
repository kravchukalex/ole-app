import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import API from '../../../utils/api';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {firstTime: true};
  }
  async componentDidMount() {
    const categoryListAPI = await API.getList();
    const suggestionListAPI = await API.getHome();
    await this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList: suggestionListAPI,
      },
    });
    await this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList: categoryListAPI,
      },
    });
    this.setState({firstTime: false});
  }

  render() {
    if (this.state.firstTime === false) {
      return (
        <ScrollView>
          <Image
            style={styles.cover}
            source={require('../../../assets/banner-messi.png')}
          />
          <CategoryList />
          <SuggestionList />
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          <Image
            style={styles.cover}
            source={require('../../../assets/banner-messi.png')}
          />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  cover: {
    height: 205,
    width: 'auto',
    resizeMode: 'contain',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});

export default connect(null)(Home);
