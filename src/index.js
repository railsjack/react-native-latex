import React, { Component } from "react";
import FastImage from 'react-native-fast-image';


const API_URL = 'http://sciencesoft.at/image/latexurl/image.png?dpi=600&src=';

class Latex extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    latexURL: ''
  }

  componentDidMount() {
    if (typeof this.props.children === 'string') {
      this.setState({ latexURL: API_URL + this.props.children })
    }
  }

  render() {
    return (this.state.latexURL ?
      <FastImage
          style={this.props.style}
          resizeMode={FastImage.resizeMode.contain}
          source={{ uri: this.state.latexURL }} />
      : null
    )
  }
}

export default Latex;
