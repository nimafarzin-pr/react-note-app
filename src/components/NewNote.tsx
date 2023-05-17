import { NoteData } from "../App";
import NoteForm from "./NoteForm";

type NoteDataProps = {
  onSubmit: (data: NoteData) => void;
};

export default function NewNote({ onSubmit }: NoteDataProps) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
}
