import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import NavBar from "../../components/navbar/NavBar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
