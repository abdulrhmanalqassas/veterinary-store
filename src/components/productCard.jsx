import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
   return (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-white">
                <Link to="/product" className="text-white">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-white">{product.color}</p>
            </div>
            <p className="text-sm font-medium text-white">
              {product.price}
            </p>
          </div>
        </div>
      )
}