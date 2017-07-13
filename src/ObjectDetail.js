import React from 'react'

class ObjectDetail extends React.Component {
  renderObject() {
    const object = this.props.object;
    if(!object) return (
      <h1> Please, select an object </h1>
    )

    return (
      <h1>{object.name}</h1>
    )
  }

  render () {
    return (
      <div className="ObjectDetail">
        {this.renderObject()}
      </div>
    )
  }
}

export default ObjectDetail;
