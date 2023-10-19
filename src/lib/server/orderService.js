import { getOrder } from "./database/orderrepository";
import order from "$lib/server/spi/order";

export default () => {
  return {
    serverOrder: (orderId) => order().getOrder(orderId),
    dbOrder: (orderId) => getOrder(orderId),
  };
};
