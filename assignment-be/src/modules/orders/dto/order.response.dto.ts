import { Expose } from "class-transformer";

export class OrderResponse {
  @Expose()
  id: number;

  @Expose()
  productCode: string;

  @Expose()
  description: string;

  @Expose()
  money: number;

  @Expose()
  status: number;

  @Expose()
  createdAt: Date;
}

export class ListOrderResponse {
  @Expose()
  total: number;

  @Expose()
  pageCount: number;

  @Expose()
  size: number;

  @Expose()
  page: number;

  @Expose()
  items: OrderResponse[];
}
