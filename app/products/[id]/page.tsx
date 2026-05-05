import { products } from "@/app/constantProducts";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const page = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-10">
      <div className="bg-transparent">
        <div className="pt-6">
          <div className="mx-auto mt-6 sm:px-6 lg:grid lg:max-w-screen lg:grid-cols-3 lg:gap-8 lg:px-8">
            {/* <img
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
              alt="Model wearing plain white basic tee."
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            /> */}

            <img
              src={product.image}
              alt={product.title}
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            />

            <div className="mt-4 px-4 sm:px-0 lg:mt-0">
              <h2 className="text-2xl text-white">{product.title}</h2>
              <p className="text-3xl tracking-tight text-white">
                ${product.price}
              </p>

              <form className="mt-10">
                {/* <!-- Colors --> */}
                <div>
                  <h3 className="text-sm font-medium text-white">
                    Choose Color
                  </h3>

                  <fieldset aria-label="Choose a color" className="mt-4">
                    <div className="flex items-center gap-x-3">
                      {product.colors.map((color, index) => (
                        <label
                          key={index}
                          className="relative flex cursor-pointer items-center justify-center"
                        >
                          <input
                            type="radio"
                            name="color"
                            value={color}
                            className="peer sr-only"
                          />

                          <div
                            className="size-8 rounded-full border border-gray-300 peer-checked:ring-2 peer-checked:ring-gray-400"
                            style={{ backgroundColor: color }}
                          />
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* <!-- Sizes --> */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">
                      Choose Size
                    </h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size, index) => (
                        <label
                          key={index}
                          className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600"
                        >
                          <input
                            type="radio"
                            name="size"
                            value={size}
                            className="absolute inset-0 appearance-none focus:outline-none cursor-pointer"
                          />

                          <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            {size}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to bag
                </button>
              </form>
            </div>
          </div>

          <div className="mx-auto px-4 pt-10 pb-16 sm:px-6 lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {product.title}
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="text-xl text-white">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-white">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-medium text-white">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-300">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-300">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-300">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-300">
                        Ultra-soft 100% cotton
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-medium text-white">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-300">
                    The 6-Pack includes two black, two white, and two heather
                    gray Basic Tees. Sign up for our subscription service and be
                    the first to get new, exciting colors, like our upcoming
                    &quot;Charcoal Gray&quot; limited release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
