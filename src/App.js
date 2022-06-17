
import "./App.css";
import nameData from "./components/nameData.js"
import Name from "./components/Name.js";

function App() {
  const firstAndLast = nameData.map(x => {
    return <Name first={x.first} last={x.last} />
  })
  return (
    <>
      {firstAndLast}
    </>
  );
}

export default App;
