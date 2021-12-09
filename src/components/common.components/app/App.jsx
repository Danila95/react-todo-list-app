import M from "materialize-css";
import Header from "../header/header";
import Footer from "../footer/footer";
import SelectFilter from "../../select-filter/SelectFilter";
import CheckList from "../../check-list/CheckList";

const App = () => {
  return (
    <div className="wrapper">
      <main>
        <Header />
        <CheckList />
        <SelectFilter />
        <Footer />
      </main>
    </div>
  );
};

export default App;
