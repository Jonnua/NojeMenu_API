import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Storage/Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi.ts";
import OrderList from "../../Components/Page/Order/OrderList.tsx";
import MainLoader from "../../Components/Page/Common/MainLoader.tsx";
import withAdminAuth from "../../HOC/withAdminAuth.tsx";

function AllOrders() {
  const { data, isLoading } = useGetAllOrdersQuery("");

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <OrderList isLoading={isLoading} orderData={data.result} />
      )}
    </>
  );
}

export default withAdminAuth(AllOrders);
