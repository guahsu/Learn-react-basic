import React, { Component } from 'react'

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardRef} {...this.props}/>
        </div>
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardRef={ref} />
  })
}

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

export default withClass