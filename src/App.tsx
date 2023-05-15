import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NewNote from "./components/NewNote";
function App() {
  return (
    <Container className="my-4">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1>show </h1>}></Route>
            <Route path="edit" element={<h1>edit </h1>}></Route>
          </Route>
          /* if the router url dont exist with the help of below code we back
          tohome screen */
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
