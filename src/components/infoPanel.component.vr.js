import React from 'react';
import { AppRegistry, asset, StyleSheet, Pano, Text, View, Image, VrButton, Linking } from 'react-vr';

import styles from '../styles/main.stylesheet';

export default class InfoPanel extends React.Component {

  constructor(props) {
        super(props)

        this.state = {firstLink: styles.hyperlink,
                      secondLink: styles.hyperlink}
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
            <Text style={this.state.firstLink} 
                  onInput={this.openURL('https://github.com/craigkj312/node-react-vr-starter')}
                  onEnter={() => this.setState({firstLink: styles.hover})}
                  onExit={() => this.setState({firstLink: styles.hyperlink})}> Node React VR Starter App</Text>
            <Text style={styles.info}>! To get started modifying your virtual world check out the</Text>
            <Text style={this.state.secondLink} 
                  onInput={this.openURL('https://facebook.github.io/react-vr/docs/getting-started.html')}
                  onEnter={() => this.setState({secondLink: styles.hover})}
                  onExit={() => this.setState({secondLink: styles.hyperlink})}> React VR Documentation</Text>
            <Text style={styles.info}>.</Text>
          </Text>
        </View>
      </View>
    );
  }
};