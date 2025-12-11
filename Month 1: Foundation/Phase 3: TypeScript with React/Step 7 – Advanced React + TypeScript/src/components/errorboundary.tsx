import React from "react";

interface State { hasError: boolean};

class ErrorBoundary extends React.Component<{children: React.ReactNode}, State>{
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    state: Readonly<State>; getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: Error): void {
        console.error("Error caught: ", error);
    }

    render(): React.ReactNode {
        if(this.state.hasError) return <h2>Something went wrong</h2>;
        return this.props.children;
    }

}

export default ErrorBoundary;