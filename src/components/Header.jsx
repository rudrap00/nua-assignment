const Header = ({ setItems }) => {
  const selectHandler = (e) => {
    setItems(+e.target.value);
  };

  return (
    <div className="header">
      <select
        defaultValue={10}
        name="items"
        id="items"
        onChange={selectHandler}
      >
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Header;
