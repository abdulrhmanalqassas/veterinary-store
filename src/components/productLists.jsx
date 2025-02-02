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
//     return <div className="text-black">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="bg-gradient-inverse">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-black">
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
import { use } from "react";

export default function ProductLists() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // const fileId = "145qTL-Moux7j9n-v7zM-0GDSQoY0Izw9";
      const url = "https://api.jsonbin.io/v3/qs/679fc148ad19ca34f8f8a24a";

      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(">>>>>D>D>>D>D>D>D>DD>D>D>D>D>D>", data);
        setProducts(data.record.products);

        setIsLoading(false);
      } catch (error) {
        // console.error("Error fetching the JSON file:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  // const x = {
  //   products: [
  //     {
  //       name: "G-FORT",
  //       category: "Immune Stimulant",
  //       ingredients_per_liter: {
  //         "Oregano oil": "80000 mg",
  //         Lectin: "150000 mg",
  //         "Mushroom extract": "50000 mg",
  //         "Echinacea purpura extract": "25000 mg",
  //         "Star anise oil": "25000 mg",
  //         "Zinc methionine": "20000 mg",
  //         "Vitamin E": "5000 mg",
  //         "Sodium selenite": "1000 mg",
  //         Excipient: "up to 1 liter",
  //       },
  //       indications: [
  //         "Builds up immunity in birds naturally.",
  //         "Helps to resist secondary diseases.",
  //         "Helps to resist viral diseases.",
  //         "Provides resistance power against diseases and stress in poultry.",
  //         "Speeds recovery from viral infections.",
  //         "Improves general health and productivity.",
  //         "Prevents clinical and subclinical infections.",
  //       ],
  //       dose: "0.5 – 1 ml/Liter of drinking water",
  //       pack: "Plastic bottle of 500 ML",
  //       images: [
  //         "https://drive.google.com/file/d/14hmRZOoAbzgqQ7sfYrheinuHJJNNlmTJ/",
  //       ],
  //     },
  //     {
  //       name: "BIOJECT",
  //       category: "Nutritional Supplement",
  //       ingredients_per_100_ml: {
  //         "Biological extracts": "Mixture",
  //         Betaglucan: "",
  //         "Multi-vitamins": "",
  //       },
  //       indications: [
  //         "Provides complete nutritional supplement to optimize growth rate.",
  //         "Enhances biological functions and improves productive performance.",
  //         "Boosts immune response.",
  //         "Improves daily weight gain, metabolic functions, and conversion rate.",
  //       ],
  //       dose: "100 ml/4 ton Bwt",
  //       pack: "Glass bottle of 100 ML",
  //       images: [
  //         "https://drive.google.com/file/d/14ftbT8H0VLaAf7WFbaWIppctZNHgh7bI/",
  //       ],
  //     },
  //     {
  //       name: "G-TONIC",
  //       category: "Tonic",
  //       ingredients_per_liter: {
  //         "Sorbitol liquid 70%": "200 gm",
  //         "Beetroot extract (natural betaine)": "50 gm",
  //         "D-L Methionine": "25 gm",
  //         "L-Lysine": "25 gm",
  //         Nicotinamide: "25 gm",
  //         "L-Carnitine": "10 gm",
  //         "Cynarin (Artichoke plant)": "10 gm",
  //         Silymarin: "10 gm",
  //         "Vitamin B1": "2 gm",
  //         "Vitamin B2": "2 gm",
  //         "Vitamin B6": "2 gm",
  //         "Distilled water": "up to 1 liter",
  //       },
  //       indications: [
  //         "Enhances liver functions.",
  //         "Decreases the incidence of umbilical inflammation.",
  //         "Increases yolk sac in the first days.",
  //         "Protects the liver from the accumulation of toxins and fats.",
  //         "Contains sorbitol and vitamin B complex to enhance liver functions.",
  //       ],
  //       dose: "0.5 – 1 ml/Liter of drinking water",
  //       pack: "Plastic bottle of 1 liter",
  //       images: [
  //         "https://drive.google.com/file/d/14pqJRJPKKn79L_MWnw5vzM_8RwV494w4/",
  //       ],
  //     },
  //     {
  //       name: "CLONET",
  //       category: "Anti-diarrheal",
  //       ingredients_per_kg: {
  //         Metronidazole: "60 gm",
  //         "Copper Sulphate": "25 gm",
  //         "Garlic oil": "80 gm",
  //         "Thyme oil": "20 gm",
  //         MannanOligosaccharide: "100 gm",
  //         "Capsicum oil": "40 gm",
  //         "Lactic acid": "55 gm",
  //         "Propionic acid": "55 gm",
  //         "Formic acid": "60 gm",
  //         "Phosphoric acid": "65 gm",
  //         "Acetic acid": "50 gm",
  //         "Citric acid": "10 gm",
  //         Dextrose: "up to 1 Kg",
  //       },
  //       indications: [
  //         "Effective against serious enteric pathogens such as Clostridia spp.",
  //         "Recommended for gastro-intestinal infections like Salmonellosis.",
  //         "Boosts the immune system during severe enteric infections.",
  //       ],
  //       dose: "0.5 gm/Liter of drinking water",
  //       pack: "Plastic pack of 250 GM",
  //       images: [
  //         "https://drive.google.com/file/d/14kGQT9fy_iRESVcaDr62Jc5LEHpEOB8-/",
  //       ],
  //     },
  //     {
  //       name: "D-TURBO",
  //       category: "Tonic",
  //       ingredients_per_liter: {
  //         "Vitamin D3": "1,500,000 IU",
  //         "Calcium (Ca)": "60 gm",
  //         "Phosphorus (PH)": "120 gm",
  //         "Zinc (Zn)": "3500 mg",
  //         "Cobalt (CO)": "150 mg",
  //         "Selenium (SE)": "200 mg",
  //         "Copper (CU)": "2200 mg",
  //         "Manganese (MN)": "3200 mg",
  //         "Magnesium (MG)": "3800 mg",
  //         "Distilled water": "up to 1 L",
  //       },
  //       indications: [
  //         "Prevents vitamin D3, calcium, and phosphorus deficiency.",
  //         "Improves eggshell quality and egg production.",
  //         "Enhances egg quality and hatchability in breeders.",
  //         "Provides the optimum concentration of trace elements.",
  //       ],
  //       dose: "1 ml/Liter of drinking water",
  //       pack: "Plastic bottle of 1 L",
  //       images: [
  //         "https://drive.google.com/file/d/14jGYhNOzrpu51SxyKy8vYOhkthcpFFSW/",
  //       ],
  //     },
  //   ],
  // };
  // useEffect(() => {
  //   setProducts(x.products);
  // }, []);

  // if (isLoading) return <div className="text-black">Loading...</div>;
  // if (error) return <div className="text-red-500">Error: {error}</div>;
  if (isLoading) return <div className="text-black">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gradient-inverse">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-black">
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
