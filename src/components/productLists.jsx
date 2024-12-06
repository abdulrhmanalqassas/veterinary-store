import cover from "../assets/cover.jpg";
import ProductCard from "./productCard";
// import { DefaultAccordion } from "./test";
const products = [
  {
    id: 2,
    name: " Tee",
    href: "#",
    imageSrc: cover,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "trer",
  },
  {
    id: 32,
    name: " Tee",
    href: "#",
    imageSrc: cover,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "trer",
  },
  {
    id: 24,
    name: " Tee",
    href: "#",
    imageSrc: cover,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "trer",
  },
  {
    id: 552,
    name: " Te",
    href: "#",
    imageSrc: cover,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "trer",
  },
  {
    id: 2545,
    name: " Tee",
    href: "#",
    imageSrc: cover,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "trer",
  },
  // More products...
];

export default function ProductLists() {
  return (
    <div className="bg-gradient-inverse">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>
        {/* <DefaultAccordion /> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
