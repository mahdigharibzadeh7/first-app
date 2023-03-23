import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import Support from "./components/Support";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductsList />
      <Search />
      <Support />
      <Footer />
    </div>
  );
};

export default App;
