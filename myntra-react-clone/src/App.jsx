import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import FetchItems from "./components/FetchItems";
import { useSelector } from "react-redux";
import Loading from "./components/loading";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <div>
        <Header />
        <FetchItems />
        {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
        <Footer />
      </div>
    </>
  );
}

export default App;
