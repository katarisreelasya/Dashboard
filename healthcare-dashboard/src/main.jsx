import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/App.css'; // Import your Tailwind CSS file

const App = () => (
  <div>
    <h1 className="text-3xl font-bold text-right text-red-700 underline">
      Hello world!
    </h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
