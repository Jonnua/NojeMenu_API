import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi.ts";
import OrderList from "../../Components/Page/Order/OrderList.tsx";
import MainLoader from "../../Components/Page/Common/MainLoader.tsx";
import withAdminAuth from "../../HOC/withAdminAuth.tsx";
import inputHelper from "../../Helper/inputHelper.ts";
import { SD_Status } from "../../Utility/SD.ts";
import orderHeaderModel from "../../Interfaces/orderHeaderModel.ts";
const filterOptions = [
  "All",
  SD_Status.CONFIRMED,
  SD_Status.BEING_COOKED,
  SD_Status.READY_FOR_PICKUP,
  SD_Status.CANCELLED,
];

function AllOrders() {
  const [filters, setFilters] = useState({ searchString: "", status: "" });
  const [orderData, setOrderData] = useState([]);

  const [apiFilters, setApiFilters] = useState({
    searchString: "",
    status: "",
  });

  const { data, isLoading } = useGetAllOrdersQuery({
    ...(apiFilters && {
      searchString: apiFilters.searchString,
      status: apiFilters.status,
    }),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const tempValue = inputHelper(e, filters);
    setFilters(tempValue);
  };

  const handleFilters = () => {
    setApiFilters({
      searchString: filters.searchString,
      status: filters.status,
    });
  };

  useEffect(() => {
    if (data) {
      setOrderData(data.result);
    }
  }, [data]);

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <>
          <div className="d-flex align-items-center justify-content-between mx-5 mt-5">
            <h1 className="text-success">Order List</h1>
            <div className="d-flex" style={{ width: "40%" }}>
              <input
                type="text"
                className="form-control mx-2"
                placeholder="Search Name, Email or Phone"
                name="searchString"
                onChange={handleChange}
              />
              <select
                className="form-select w-50 mx-2"
                onChange={handleChange}
                name="status"
              >
                {filterOptions.map((item, index) => (
                  <option key={index} value={item === "All" ? "" : item}>
                    {item}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-outline-success"
                onClick={handleFilters}
              >
                Filter
              </button>
            </div>
          </div>
          <OrderList isLoading={isLoading} orderData={orderData} />
        </>
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
