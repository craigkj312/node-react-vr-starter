import React from 'react';
import { AppRegistry, asset, StyleSheet, Pano, Text, View } from 'react-vr';
import InfoPanel from './src/components/infoPanel.component.vr';

export default class Main extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('cloud-pano.png')}/>
        <InfoPanel/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Main', () => Main);
