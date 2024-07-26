import DisplayItem from "../components/displayItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <DisplayItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
