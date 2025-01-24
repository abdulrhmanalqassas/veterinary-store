import { Link } from "react-router-dom"
import cover from "../assets/cover.jpg"

export default function ProductCard({ product, products }) {
   return (
        <div key={product.name} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt={product.name}
              src={cover}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-white">
                <Link 
                  to={`/product/${product.name.replace(/\s+/g, '-').toLowerCase()}`}
                  state={{ products }}
                  className="text-white"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-white">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">
                Dose: {product.dose}
              </p>
              <p className="text-xs text-gray-300">
                {product.pack}
              </p>
            </div>
          </div>
        </div>
      )
}