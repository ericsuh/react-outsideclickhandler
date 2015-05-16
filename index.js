/**
 * Copyright 2015 Eric Suh
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
var React = require('react');

var OutsideClickHandler = React.createClass({
  propTypes: {
    onOutsideClick: React.PropTypes.func
  },
  componentDidMount: function () {
    document.addEventListener('click', this.handleDocumentClick, false);
  },
  componentWillUnmount: function () {
    document.removeEventListener('click', this.handleDocumentClick, false);
  },
  render: function () {
    return React.DOM.div(
      {onClick: this.handleMyClick},
      this.props.children
    );
  },
  handleDocumentClick: function (event) {
    if (this.props.onOutsideClick !== null) {
      return this.props.onOutsideClick(event);
    }
  },
  handleMyClick: function (event) {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }
});

module.exports = OutsideClickHandler;
