const SelectFilter = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  });
  return (
    <div className="container col-4">
      <div className="select-filter">
        <div class="input-field col-4 s12">
          <select>
            <option value="" disabled>
              Choose your option
            </option>
            <option value="All" selected>
              All
            </option>
            <option value="Active">Active</option>
            <option value="Done">Done</option>
          </select>
          <label>Filter</label>
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
