const CheckList = () => {
  return (
    <div className="container col-4">
      <div className="check-list">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Todo List</h4>
          </li>
        </ul>
        <div className="collection">
          <form action="#">
            <a href="#!" className="collection-item">
              <label>
                <input type="checkbox" />
                <span>Red</span>
              </label>
            </a>
            <a href="#!" className="collection-item">
              <label>
                <input type="checkbox" />
                <span>Red</span>
              </label>
            </a>
            <a href="#!" className="collection-item">
              <label>
                <input type="checkbox" />
                <span>Red</span>
              </label>
            </a>
            <a href="#!" className="collection-item">
              <label>
                <input type="checkbox" />
                <span>Red</span>
              </label>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckList;
