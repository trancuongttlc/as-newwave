import { Order } from "../src/entities/order.entity";

export class TestUtil {
  static getMockOrder(): Order {
    const order = new Order();
    order.id = 1;
    order.productCode = "Apple";
    order.description = "Iphone 16";
    order.money = 100;
    order.createdAt = new Date();
    return order;
  }
}
