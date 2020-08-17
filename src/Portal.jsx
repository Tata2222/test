import { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends Component {

  el = document.createElement('div');

  componentDidMount() {
    document.getElementById('container').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('container').removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;