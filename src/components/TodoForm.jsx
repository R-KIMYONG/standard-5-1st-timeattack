import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleTodos = (e) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("빈칸있으면 안됩니다");
      return;
    }

    let newTodos = {
      id: nanoid(),
      title,
      contents,
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodos]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <form onSubmit={handleTodos}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="title">내용</label>
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </>
  );
}
