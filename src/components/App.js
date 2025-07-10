import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // ✅ used below

function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML...
      </p>
      <ExampleComponent />
      <TestComponent /> {/* ✅ this fixes the warning */}
    </div>
  );
}

export default App;
