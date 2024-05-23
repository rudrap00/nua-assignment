import usePagination from "../hooks/usePagination";

const Table = ({ items, books }) => {
  const [slice, pages, current, setCurrent] = usePagination(books, items);

  const sortHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={sortHandler} id="author">
              Author Name
            </th>
            <th onClick={sortHandler} id="title">
              Title
            </th>
            <th onClick={sortHandler} id="year">
              First Publish Year
            </th>
          </tr>
        </thead>
        <tbody>
          {slice.map(
            ({
              work: {
                cover_id: id,
                author_names: authors,
                title,
                first_publish_year: year,
              },
            }) =>
              id ? (
                <tr key={id}>
                  <td>{authors[0]}</td>
                  <td>{title}</td>
                  <td>{year}</td>
                </tr>
              ) : null
          )}
        </tbody>
      </table>

      <div className="pagination-container">
        {pages.map((page) => (
          <div
            key={page}
            onClick={() => setCurrent(page)}
            className={page === current ? "active" : ""}
          >
            {page}
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
