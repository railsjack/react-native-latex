import React, { Component } from "react";
import { Image } from "react-native";


const API_URL = 'http://sciencesoft.at/image/latexurl/image.png?dpi=300&src=';

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
    return <Image source={{ uri: this.state.latexURL }} />
  }
}

export default Latex;
