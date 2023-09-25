/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { formatISO9075 } from "date-fns";
import copyToClipboard from "../../utils/copyToClipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClipboard,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function AdminOrder() {
  // Retrieve the token from local storage
  const getToken = localStorage.getItem("userInfo");
  const token = getToken.replace(/["']/g, "");
  const [orders, setOrders] = useState([]);
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiBaseDomain}/order/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((orderInfo) => {
        console.log(orderInfo.data.orders);
        setOrders(orderInfo.data.orders);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col m-5 pt-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address(Delivery Address)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Paid
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  TRXID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order Place At
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.customerId.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.address}, {order.city}/ {order.postalCode}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.totalPrice}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.status}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.isPaid ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-green-500"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="text-red-500"
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.transactionId}
                      <button
                        className="ml-2 text-indigo-500"
                        onClick={() => copyToClipboard(order.transactionId)}
                      >
                        <FontAwesomeIcon icon={faClipboard} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order._id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatISO9075(new Date(order.createdAt))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                    <button className="ml-2 text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminOrder;
