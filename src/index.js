import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const defaultOptions = {
  messageStyle: 'none',
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  tex2jax: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
  },
  TeX: {
    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
  }
};

class MathJax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 1,
      width: 1,
      opacity: 0,
    };
  }

  handleMessage(message) {
    try {
      const { width, height } = JSON.parse(message.nativeEvent.data);
      this.setState({
        width,
        height,
      });
    } catch (error) {
      console.log('error on displaying latex')
    }
  }

  wrapMathjax(content) {
    const options = JSON.stringify(
      Object.assign({}, defaultOptions, this.props.mathJaxOptions)
    );

		return `
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <script type="text/x-mathjax-config">
        MathJax.Hub.Config(${options});
				MathJax.Hub.Queue(function() {
          var width = document.documentElement.scrollWidth;
          var height = document.documentElement.scrollHeight;
					window.ReactNativeWebView.postMessage(JSON.stringify({width: width, height: height}));
				});
      </script>
      
      <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background-color: transparent;
        overflow: hidden;
      }
      </style>
      <script async src="./MathJax/MathJax.js"></script>
      <body onselectstart="return false" ontouchstart="return false" scroll="no">
			${content}
		`;
  }
  render() {
    const html = this.wrapMathjax(this.props.html);
    const props = Object.assign({}, this.props, { html: undefined });
    return (
      <View style={{ width: this.state.width, height: this.state.height, ...props.style, }}>
        <WebView
          style={{ backgroundColor: 'transparent' }}
          scrollEnabled={false}
          onMessage={this.handleMessage.bind(this)}
          source={{ html }}
        />
      </View>
    );
  }
}

export default MathJax;