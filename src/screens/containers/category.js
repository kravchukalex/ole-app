import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../../videos/components/category-list-layout';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import Suggestion from '../../videos/components/suggestion';
import News from '../../videos/components/news';
import API from '../../../utils/api';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

function mapStateToProps(state) {
  return {
    category: state.selectedCategory,
    details: state.selectedCategoryDetails,
  };
}

class Category extends Component {
  async componentDidMount() {
    const list = await API.getCategory(this.props.route.params.id);
    this.props.dispatch({
      type: 'SET_SELECTED_CATEGORY_DETAILS',
      payload: {
        details: list,
      },
    });
  }

  keyExtractor = item => item.id;
  renderEmpty = () => <Empty text="No hay categoría." />;
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

  renderItem = prop => {
    return (
      <News
        onPress={() => {
          this.viewVideo(prop.item);
        }}
        {...prop.item}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    const {route} = this.props;
    //Aca se podria agregar un condicional que si no llega por parametro, que ponga un titulo default.
    this.props.navigation.setOptions({
      title: `${this.props.category.name}`,
    });
    return (
      // <Layout title={`${route.params.category}`}>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.props.details}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
      // </Layout>
    );
  }
}

export default connect(mapStateToProps)(function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <Category {...props} navigation={navigation} route={route} />;
});
