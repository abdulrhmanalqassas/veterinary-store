// import { useEffect, useState } from "react";
// import cover from "../assets/cover.jpg";
// import ProductCard from "./productCard";

// export default function ProductLists() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const fileId = "145qTL-Moux7j9n-v7zM-0GDSQoY0Izw9";
//       const apiKey = "AIzaSyBAUrxM3-bqdhfOZbqQIridp3N7mXwgLYo";
//       const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=AIzaSyBAUrxM3-bqdhfOZbqQIridp3N7mXwgLYo`;

//       // `https://drive.google.com/file/d/145qTL-Moux7j9n-v7zM-0GDSQoY0Izw9/view?usp=drivesdk`;

//       try {
//         setIsLoading(true);
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("data", data);
//         setProducts(data.products);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching the JSON file:", error);
//         setError(error.message);
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//     const fetchDriveJSONContent = async () => {
//       try {
//         const publicLink =
//           "https://drive.google.com/file/d/145qTL-Moux7j9n-v7zM-0GDSQoY0Izw9/view?usp=drivesdk";
//         const fileId = publicLink.match(/d\/(.*?)\/view/)[1];
//         if (!fileId) throw new Error("Invalid Google Drive link.");

//         const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;
//         const response = await fetch(downloadUrl);

//         if (!response.ok) {
//           throw new Error(`Failed to fetch file. Status: ${response.status}`);
//         }

//         const jsonData = await response.json();
//         console.log("data", jsonData);
//         setProducts(jsonData);
//       } catch (error) {
//         console.error("Error fetching JSON content:", error.message);
//       }
//     };

//     fetchDriveJSONContent();
//   }, []);

//   if (isLoading) {
//     return <div className="text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="bg-gradient-inverse">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-white">
//           Customers also purchased
//         </h2>
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <ProductCard key={product.name} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import cover from "../assets/cover.jpg";
import ProductCard from "./productCard";

export default function ProductLists() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const fileId = "145qTL-Moux7j9n-v7zM-0GDSQoY0Izw9";
      const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=AIzaSyBAUrxM3-bqdhfOZbqQIridp3N7mXwgLYo`;

      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the JSON file:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gradient-inverse">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Veterinary Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              products={products}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
