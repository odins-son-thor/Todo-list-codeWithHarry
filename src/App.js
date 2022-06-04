import "./styles.css";
import Header from "./components/Header";
import Todos from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      {/* title and searchbar will be called in Header.js file */}
      <Header title="Hello" nosearchbar="true" />
      <Todos />
    </div>
  );
}
