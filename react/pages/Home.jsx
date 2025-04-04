import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Vendor from "../components/Vendor";
import PromoBanner from "../components/PromoBanner";
import { useFetchVendors } from "../controllers/vendor";
import { useNavigate } from "react-router-dom";

//==================================================================
export default function Home() {
  const { vendors, vendorError, vendorIsLoading } = useFetchVendors(); // Updated variable names
  const navigate = useNavigate();

  //==================================================================
  return (
    <div className="container mx-auto p-2 ">
      <Navbar />
      <PromoBanner
        title="Limited Time Offer!"
        subtitle="Get 20% off on all orders above $50. Hurry, offer ends soon!"
        image="promoBanner.png"
        ctaText="Shop Now"
        ctaLink="/shop"
      />

      {/* Handle Loading State */}
      {vendorIsLoading && <p className="text-center">Loading vendors...</p>}

      {/* Handle Error State */}
      {vendorError && (
        <p className="text-center text-red-500">
          Error loading vendors: {vendorError.message}
        </p>
      )}

      {/* Render Vendors Dynamically */}
      <h2
        className="font-bold text-primary-text text-4xl mt-8 ">
        Our Vendors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-1 sm:p-4">


        {vendors?.length > 0 ? (
          vendors?.map((vendor, index) => (
            <Vendor
              onClick={() => navigate(`/vendor/${vendor?._id}`)} // Navigate on click
              key={index}
              name={vendor.name}
              category={vendor.category}
              image={vendor.image || "cafe-bg.jpg"}
              location={vendor.address || "Unknown Location"}
            />
          ))
        ) : (
          !vendorIsLoading && <p className="text-center">No vendors found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}


//==================================================================
