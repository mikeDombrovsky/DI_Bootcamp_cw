import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: null,
            error: ''
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo, hasError: true });
        console.log(error, errorInfo);
    }

    render() {

        if (this.state.hasError) {
            return (

                <>
                    <h1>Something went wrong</h1>
                    <p>{this.state.error.toString()}</p>
                </>
            )
        }
        console.log(this.state.hasError);
        return this.props.children;
    }
};

export default ErrorBoundary;