React OutsideClickHandler
=========================

A React component to handle cases where you want to detect clicks outside
of a component tree, such as clicking outside of a field, menu, modal dialog,
etc.

Example Usage
=============

An example of how to use this:

    var React = require('react');
    var OutsideClickHandler = require('react-outsideclickhandler');

    var MyBox = React.createClass({
      getInitialState: function () {
        return {isOpen: true};
      },
      render: function () {
        if (this.state.isOpen) {
            return (
              <div>
                <OutsideClickHandler onOutsideClick={this.close}>
                  This is my box text
                  <button>Do nothing!</button>
                </OutsideClickHandler>
              </div>
            );
        } else {
          return (<div>I am closed now!</div>);
        }
      },
      close: function () {
        this.setState({isOpen: false});
      }
    });

Clicks on or within `OutsideClickHandler` will do nothing, while clicks
outside of it will close the box.

License
=======

Copyright 2015 Eric Suh

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
