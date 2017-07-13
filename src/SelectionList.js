import React from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const selected = {
  backgroundColor: '#E1E1E1'
}

class SelectionList extends React.Component {
  renderOptions () {
    if(!this.props.options) return;

    return this.props.options.map(option => {
      return (
        <MenuItem
          key={option}
          style={this.props.optionSelected === option ? selected : null}
          onTouchTap={() => {this.props.onSelect(option)}}
          >{option}</MenuItem>
      )
    })
  }

  render(){
    const { options, onSelect, optionSelected, ...rest } = this.props

    return (
      <Drawer
        {...rest}
        open>
        {this.renderOptions()}
      </Drawer>
    )
  }
}

export default SelectionList
