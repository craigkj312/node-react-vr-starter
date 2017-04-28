import React from 'react';
import { AppRegistry, asset, StyleSheet, Pano, Text, View, Image, Linking } from 'react-vr';

import styles from '../styles/main.stylesheet';

export default class InfoPanel extends React.Component {

  constructor(props) {
        super(props)
  }

  openURL(url) {
    console.log(url);
    // Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={styles.panel}>
        <Image style={styles.image}
          source={asset('vr-illustration.png')}
        />
        <View style={styles.panelText}>
          <Text style={styles.title}>
            Welcome to Virtual Reality on Bluemix!
          </Text>
          <Text style={styles.info}>
            Thanks for creating a 
            <Text style={styles.hyperlink} onInput={this.openURL('https://github.com/craigkj312/node-react-vr-starter')}> Node React VR Starter App</Text>
            <Text style={styles.info}>! To get started modifying your virtual world check out the</Text>
            <Text style={styles.hyperlink} onInput={this.openURL('https://facebook.github.io/react-vr/docs/getting-started.html')}> React VR Documentation</Text>
            <Text style={styles.info}>.</Text>
          </Text>
        </View>
      </View>
    );
  }
};