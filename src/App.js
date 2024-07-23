import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./pages/Todos";
import Home from "./pages/Home";
import TodoProvider from "./context/TodoProvider";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/todos" element={
              <TodoProvider>
                <Todos />
              </TodoProvider>}
            />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
