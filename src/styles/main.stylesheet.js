import React from 'react';
import { StyleSheet } from 'react-vr';

const styles = StyleSheet.create({

  panel: {
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 0, -130]}],
    width: 150,
    backgroundColor: '#323232'
  },

  image: { 
    width: 41,
    height: 28
  },

  panelText: {
      flex: 1,
      flexDirection: 'column',
      paddingLeft: 10
  },

  title: {
    fontSize: 8,
    fontWeight: '400',
    color: '#ffffff'
  },

  info: {
    fontSize: 3,
    fontWeight: '400',
    color: '#aaaaaa'
  },

  hyperlink: {
      color: '#eeeeee'
  },

  hover: {
      color: '#5596e6'
  }

});

export default styles;