import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.categoryList,
  };
}

class CategoryList extends Component {
  keyExtractor = item => item._id;
  renderEmpty = () => <Empty text="No hay categorías" />;
  itemSeparator = () => <Separator />;

  viewCategory = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_CATEGORY',
      payload: {
        category: item,
      },
    });
    this.props.navigation.navigate('Category', {
      category: item.name,
      id: item._id,
    });
  };

  renderItem = ({item}) => {
    return (
      <Category
        onPress={() => {
          this.viewCategory(item);
        }}
        {...item}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <Layout title="Categorías">
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

  return <CategoryList {...props} navigation={navigation} />;
});
