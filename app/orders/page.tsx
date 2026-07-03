import { ordersData } from "../constantProducts";
import Pagination from "../components/Pagination";

const orders = () => {
  return (
    <section className=" py-8 antialiased  md:py-2">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="mx-auto max-w-7xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-2xl">
              My orders
            </h2>

            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                <label
                  htmlFor="order-type"
                  className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="block w-full min-w-32 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option>All orders</option>
                  <option value="pre-order">Pending</option>
                  <option value="transit">Confirmed</option>
                  <option value="confirmed">Processing</option>
                  <option value="cancelled">Out for Delivery</option>
                  <option value="pre-order">Delivered</option>
                  <option value="transit">Completed</option>
                  <option value="confirmed">Cancelled</option>
                  <option value="cancelled">Returned</option>
                  <option value="pre-order">Failed Delivery</option>
                  <option value="transit">On Hold</option>
                </select>
              </div>

              <span className="inline-block text-gray-500 dark:text-gray-400">
                {" "}
                from{" "}
              </span>

              <div>
                <label
                  htmlFor="duration"
                  className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select duration
                </label>
                <select
                  id="duration"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                >
                  <option>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="lats 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            {ordersData.map((order) => (
              <div
                key={order.id}
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <div className="flex flex-wrap items-center gap-y-4 py-6">
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Order ID:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      <a href="#" className="hover:underline">
                        {order.orderId}
                      </a>
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Date:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      {order.date}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Price:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      ${order.price.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Status:
                    </dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center rounded  px-2.5 py-0.5 text-xs font-medium text-red-500 ">
                      {order.status}
                    </dd>
                  </dl>

                  <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                    <button
                      type="button"
                      className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                    >
                      Cancel order
                    </button>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                    >
                      View details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
    // </div>
  );
};

export default orders;
