// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BluescreenPage from "./component/bluescreen/bluescreenPage";
import QuestionCard from "./component/QuestionCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" component={BluescreenPage} />
        <Route path="/quiz" component={QuestionCard} />
      </Routes>
    </div>
  );
}

export default App;
