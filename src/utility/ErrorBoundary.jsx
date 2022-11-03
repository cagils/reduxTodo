import { Component } from "react";
import "./ErrorBoundary.css";

const ErrorView = ({ error, errorInfo }) => (
  <div className="error-boundary">
    <h2>Something went wrong.</h2>
    <div>
      <pre>
        {error && error.toString()}
        <br />
        {errorInfo.componentStack}
      </pre>
    </div>
  </div>
);

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      // Error path
      return (
        <div>
          <ErrorView {...{ error, errorInfo }} />
          {/* {this.props.children} */}
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export function errorBoundary(WrappedComponent) {
  return class extends ErrorBoundary {
    render() {
      const { error, errorInfo } = this.state;
      if (errorInfo) {
        // Error path
        return (
          <div>
            <ErrorView {...{ error, errorInfo }} />
            {this.props.children}
          </div>
        );
      }
      //Normally, just render wrapped component
      return <WrappedComponent {...this.props} />;
    }
  };
}
