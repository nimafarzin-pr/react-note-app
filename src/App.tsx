import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Navigate,
} from "react-router-dom";
import NewNote from "./components/NewNote";
import useLocalStorage from "./components/useLocalStorage";
import { useMemo } from "react";

export type Note = {
  id: string;
} & NoteData;
export type RawNote = {
  id: string;
} & RawNoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};
export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const noteWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNote) => {
      return [
        ...prevNote,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }
  return (
    <Container className="my-4">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
          <Route path="/new" element={<NewNote onSubmit={()=> onCreateNote}  />} />
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
