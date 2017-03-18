'use strict'
import React, { Component } from 'react';
import Dimensions from 'Dimensions'

const ScreenSize = {
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
}

export default ScreenSize;