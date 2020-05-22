import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/containers/home';
import VideoDetails from './screens/containers/videoDetails';
import Category from './screens/containers/category';
import CategoryList from '../src/screens/containers/categoryList';
import Favourites from '../src/screens/containers/favourites';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Ayuda"
        onPress={() => Alert.alert('Link to another URL.')}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <Stack.Navigator
      //   initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#94BE20',
        //title: 'Overview 2',
        //     headerTitleAllowFontScaling: false,
        //     headerBackTitle: 'Back',
        //     gestureEnabled: true,
        cardStyle: {backgroundColor: 'white'},
        //     headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        // headerTintColor: 'blue',
      }}
      //   //headerMode="float"
      //   mode="card"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
        }}
      />
      {/* <Stack.Screen name="Movie" component={Movie} /> */}

      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}

const CategoryStack = createStackNavigator();
function CategoryStackNavigator() {
  return (
    <CategoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#94BE20',
        cardStyle: {backgroundColor: 'white'},
      }}>
      <CategoryStack.Screen name="Categorías" component={CategoryList} />
      <CategoryStack.Screen name="Category" component={Category} />
    </CategoryStack.Navigator>
  );
}

const FavouritesStack = createStackNavigator();
function FavouritesStackNavigator() {
  return (
    <FavouritesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#94BE20',
        cardStyle: {backgroundColor: 'white'},
      }}>
      <FavouritesStack.Screen name="Favoritos" component={Favourites} />
    </FavouritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#94BE20',
        inactiveTintColor: 'black',
        //activeBackgroundColor: '#94BE20',
      }}>
      <Tab.Screen name="Inicio" component={HomeStackNavigator} />
      <Tab.Screen name="Favoritos" component={FavouritesStackNavigator} />
      <Tab.Screen name="Categorías" component={CategoryStackNavigator} />
    </Tab.Navigator>
  );
}

const MainStack = createStackNavigator();
function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        cardStyle: {backgroundColor: 'white'},
      }}
      headerMode="none"
      mode="modal">
      <MainStack.Screen name="Main" component={MainTabNavigator} />
      <MainStack.Screen name="VideoDetails" component={VideoDetails} />
    </MainStack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#ffffff',
          width: 240,
          paddingTop: 42,
        }}
        drawerContentOptions={{
          activeTintColor: '#94BE20',
          itemStyle: {
            // marginTop: 30,
            //marginVertical: 30,
            // borderBottomWidth: 0.5,
            // borderBottomColor: 'rgba (0,0,0,.5)',
          },
          //activeBackgroundColor: '#ff2068',
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Home">
        <Drawer.Screen name="Inicio" component={MainStackNavigator} />
        <Drawer.Screen name="Favoritos" component={FavouritesStackNavigator} />
        <Drawer.Screen name="Categorías" component={CategoryStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
