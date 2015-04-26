'use strict';

var React = require('react-native');
var {
  StyleSheet,
  MapView,
} = React;

var Map = React.createClass({
  _getAnnotations: function() {
    return [{
      latitude: this.props.earthquake.latitude,
      longitude: this.props.earthquake.longitude,
      title: this.props.earthquake.humanReadableLocation,
    }]
  },

  _getRegion: function() {
    return {
      latitude: this.props.earthquake.latitude,
      longitude: this.props.earthquake.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }
  },

  render: function() {
    return (
      <MapView annotations={this._getAnnotations()} region={this._getRegion()} style={styles.map} />
    );
  },
});

var styles = StyleSheet.create({
  map: {
    height: 250,
  },
});

module.exports = Map;
