import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            This is a sample React component.
            This is a test.
        </div>
    );
}

export default app;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
