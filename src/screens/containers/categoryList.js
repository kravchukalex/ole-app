import React, {Component, Fragment} from 'react';
import {ScrollView, Image, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Empty from '../../videos/components/empty';
import Separator from '../../videos/components/vertical-separator';
import Category from '../../videos/components/category';
import Layout from '../../videos/components/category-list-layout-screen';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

function mapStateToProps(state) {
  return {
    list: state.categoryList,
  };
}

class CategoryListScreen extends Component {
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
      <Layout title="">
        <FlatList
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

const styles = StyleSheet.create({
  cover: {
    height: 205,
    width: 'auto',
    resizeMode: 'contain',
    paddingVertical: 30,
    paddingHorizontal: 10,
    //  backgroundColor: 'red',
  },
});

export default connect(mapStateToProps)(function(props) {
  const navigation = useNavigation();

  return <CategoryListScreen {...props} navigation={navigation} />;
});
