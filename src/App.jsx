import { useEffect, useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(
      "https://openlibrary.org/people/mekBot/books/want-to-read.json?limit=300"
    );
    const data = await res.json();

    const { reading_log_entries: entries } = data;

    setBooks(entries);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Header setItems={setItemsPerPage} />
      <div className="App">
        <Table items={itemsPerPage} books={books} />
      </div>
    </>
  );
}

export default App;
