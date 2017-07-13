import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addNeos, selectDate, selectObject } from './actions'

import SelectionList from './SelectionList'
import ObjectDetail from './ObjectDetail'

class App extends Component {
  componentDidMount() {
    fetch('https://api.nasa.gov/neo/rest/v1/feed?api_key=ePoAhyzJop2XzV7ZBImq8Fux8pH7v7WJSCJnbMNO')
    .then(response => response.json())
    .then(response => {
      this.props.addNeos(response.near_earth_objects)
    })
    .catch()
    Object.keys(this.props.neos)
  }

  selectedDateObjects() {
    const selectedDateObjects = this.props.neos[this.props.selectedDate];
    if(!selectedDateObjects) return

    return selectedDateObjects
    .map(object =>  object.name)
  }

  findObject() {
    if(!(this.props.selectedDate && this.props.neos[this.props.selectedDate])) return;
    return this.props.neos[this.props.selectedDate]
    .find(object => object.name === this.props.selectedObject)
  }

  render() {
    return (
      <div className="App">
        <SelectionList
          containerStyle={{
            width: 560,
            paddingLeft: 260
          }}
          className="ObjectList"
          options={this.selectedDateObjects()}
          onSelect={object => { this.props.selectObject(object) }}
          optionSelected={this.props.selectedObject}
        />
        <SelectionList
          options={Object.keys(this.props.neos)}
          onSelect={(option) => { this.props.selectDate(option) }}
          optionSelected={this.props.selectedDate}
        />

        <ObjectDetail
          object={this.findObject()}
        />


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  neos: state.neos,
  selectedDate: state.selectedDate,
  selectedObject: state.selectedObject,
})

const mapDispatchToProps = (dispatch) => ({
  addNeos: (neos) => dispatch(addNeos(neos)),
  selectDate: (date) => dispatch(selectDate(date)),
  selectObject: (date) => dispatch(selectObject(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
