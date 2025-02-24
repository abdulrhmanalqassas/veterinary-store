import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useParams, useLocation } from "react-router-dom";
import cover from "../assets/cover.jpg";
import holder from "../assets/holder.svg";
export default function ProductOverviews() {
  const location = useLocation();
  const { productName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Assuming the products are loaded from the JSON file
  const products = location.state?.products || [];
  const product = products.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === productName
  );
  // Convert Google Drive sharing URL to direct image URL
  // const getDirectUrl = (url) => {
  //   try {
  //     // Handle different types of Google Drive URLs
  //     if (url.includes("drive.google.com/file/d/")) {
  //       // Format: https://drive.google.com/file/d/FILE_ID/view
  //       const fileId = url.split("/file/d/")[1].split("/")[0];
  //       return `https://drive.google.com/uc?export=view&id=${fileId}`;
  //     } else if (url.includes("drive.google.com/open?id=")) {
  //       // Format: https://drive.google.com/open?id=FILE_ID
  //       const fileId = url.split("open?id=")[1];
  //       return `https://drive.google.com/uc?export=view&id=${fileId}`;
  //     }
  //     return url;
  //   } catch (err) {
  //     setError("Invalid Drive URL format");
  //     return null;
  //   }
  // };

  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  // const handleImageError = () => {
  //   setError(
  //     "Failed to load image. Make sure the Drive link is publicly accessible."
  //   );
  //   setIsLoading(false);
  // };

  const directUrl = product.images[0];

  if (!product) {
    return <div className="text-black">Product not found</div>;
  }

  return (
    <div className="pt-12 bg-gradient-inverse">
      {console.log(">>>>>>>> img link ", product.images[0])}
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3  overflow-hidden rounded-lg ">
            <img
              alt={"prodect image"}
              src={directUrl == "" ? holder : product.images[0]}
              className="mb-1 h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {directUrl && (
                <img
                  src={directUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
             
                  style={{ display: isLoading ? "none" : "block" }}
                />
              )}
            </div> */}
            {/* <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product.name}
                src={cover}
                className="h-full w-full object-cover object-center"
              />
            </div> */}
          </div>
          {/* <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product.name}
              src={cover}
              className="h-full w-full object-cover object-center"
            />
          </div> */}
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-black">
              Category: {product.category}
            </p>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-black">Dosage</h3>
              <p className="text-sm text-black">{product.dose}</p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-black">Packaging</h3>
              <p className="text-sm text-black">{product.pack}</p>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
           

            <div className="">
              <h3 className="text-sm font-medium text-black">Ingredients</h3>
              <div className="mt-4 space-y-6">
                <ul className="text-sm text-black">
                  {Object.entries(
                    product.ingredients_per_liter ||
                      product.ingredients_per_kg ||
                      product.ingredients_per_100_ml
                  ).map(([ingredient, amount]) => (
                    <li key={ingredient}>
                      {ingredient}: {amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-black">Indications</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.indications.map((indication, index) => (
                    <li key={index} className="text-black">
                      {indication}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
