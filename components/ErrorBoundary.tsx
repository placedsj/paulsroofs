import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white p-4">
                    <div className="bg-zinc-800 p-8 rounded-2xl border border-red-500/30 max-w-md w-full">
                        <h1 className="text-2xl font-bold mb-4 text-red-400">Something went wrong.</h1>
                        <p className="text-zinc-400 mb-6">The dashboard encountered an unexpected error.</p>

                        {this.state.error && (
                            <div className="bg-black/50 p-4 rounded-lg text-xs font-mono text-zinc-500 mb-6 overflow-auto max-h-40">
                                {this.state.error.toString()}
                            </div>
                        )}

                        <button
                            onClick={() => window.location.reload()}
                            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-bold transition-all"
                        >
                            Reload Page
                        </button>
                        <a href="/" className="block text-center mt-4 text-zinc-500 hover:text-white text-sm">Return to Home</a>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
