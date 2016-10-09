import { Component } from 'skatejs';
class ludComponent extends Component{
  attachShadow() {
    return this; // disabled ShadowDom
  }

  // However, in old Chrome / Opera or old polyfills
  // you might need to do this.
  createShadowRoot() {
    return this;
  }
}

export default ludComponent