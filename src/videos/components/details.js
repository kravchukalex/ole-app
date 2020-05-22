import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';

function Details(props) {
  return (
    <ScrollView>
      <View style={styles.top}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.favourites}>Hacer Favorito</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.cover}
        source={require('../../../assets/banner-ole.png')}
      />
      <View style={styles.video}>
        <WebView
          source={{
            uri: `https://www.youtube.com/embed/PSanJ5swYBM`,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 200,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    marginBottom: 30,
  },
  favourites: {
    marginTop: 20,
    backgroundColor: '#94BE20',
    paddingVertical: 6,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  icon: {color: '#94BE20'},
  cover: {
    width: 'auto',
    resizeMode: 'contain',
    paddingVertical: 50,
    padding: 20,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#94BE20',
    paddingVertical: 6,
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white',
  },
  bottom: {padding: 20},
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
  },
});

export default Details;
