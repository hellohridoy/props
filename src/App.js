import "./App.css";
import ClassComponents from "./components/ClassComponents";
import Greet from "./components/Greet";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Greet name="hridoy" id = {1} >
          <p>This is children porps</p>
      </Greet>
      <Greet name="mamun" id = {2} >
        <button>Actions</button>
      </Greet>
      <Greet name="kamal" id = {3} />
      <ClassComponents name = "hridoy" id = {25}/>
      <ClassComponents name = "kaml" id = {235}/>
      <ClassComponents name = "abul" id = {245}/>
      <Message/>
    </div>
  );
}

export default App;
