import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Movie name:</label>
        <input type="text" name="movieName"/>
        <label>Review</label>
        <input type="text" name="movieName"/>
        <button type="submit">Submit</button>
      </div>    
    </div>
  );
}

export default App;
