import { Button } from "../components/ui/button/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BusinessCard from "../components/BusinessCard";
import VarietiesHighlight from "../components/VarietiesHighlight";
import { useFetchVendorsCategories } from "../controllers/vendor";
import { useParams } from "react-router-dom"; // To get itemId from URL params

//========================================================================================
export default function VendorShowcase() {
  const { vendorId } = useParams(); // Get itemId from URL

  const { vendorsCategories, vendorError, vendorIsLoading } = useFetchVendorsCategories(vendorId); // Updated variable names

  console.log('=========vendorsCategories==========', vendorsCategories);

  const categories = [
    { name: "Biryani", image: "pizza.png" },
    { name: "Pasta", image: "pizza.png" },
    { name: "Burgers", image: "pizza.png" },
    { name: "Sushi", image: "pizza.png" },
    { name: "Pizza", image: "pizza.png" },
  ];
  //========================================================================================
  return (
    <div className="container mx-auto p-2">
      <Navbar />

      {/* <BusinessCard /> */}

      <div className="p-1 sm:p-4">
        <VarietiesHighlight categories={vendorsCategories} />
      </div>


      <div className="mt-6 flex justify-center">
        <Button className="bg-primary text-white px-6 py-3 rounded-lg">Order Now</Button>
      </div>
      <Footer />
    </div>
  );
}

//========================================================================================
