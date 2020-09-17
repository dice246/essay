import React, { Component} from "react";

const ValueContext = React.createContext();

export class  Provider extends Component {
  render() {
    return (
      <ValueContext.Provider value={this.props.store}>
        {this.props.children}
      </ValueContext.Provider>
    );
  }
}

export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps = {}
) => WrappedComponent => {
  return class extends Component {
    static contextType = ValueContext

    constructor(props) {
      super(props);

      this.state = {
        props: {}
      }
    }

    componentDidMount() {
      this.update();

      const { subscribe } = this.context;

      subscribe(() => this.update())
    }

    update () {
      const { getState, dispatch } = this.context;
      const stateProps = mapStateToProps(getState());

      let dispatchProps;

      if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      } else if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch, this.props)
      } else {
        dispatchProps = { dispatch }
      }

      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps
        }
      })
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state.props}/>;
    }
  }
}

function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

function bindActionCreators(creators, dispatch) {
  const obj = {};

  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  return obj;
}
