import orderDetail from "./orderDetailModel";

export default interface orderHeaderModel {
  orderHeaderId?: number;
  pickupName?: string;
  pickupPhoneNumber?: string;
  pickupEmail?: string;
  pickupAddress?: string;
  applicationUserId?: string;
  user?: any;
  orderTotal?: number;
  orderDate?: Date;
  stripePaymentIntentId?: string;
  status?: string;
  totalItems?: number;
  orderDetails?: orderDetail[];
}
