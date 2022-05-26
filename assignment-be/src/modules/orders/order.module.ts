import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { PaginationMiddleware } from "../../common/middlewares";
import { OrderController } from "./controller/order.controller";
import { OrderService } from "./service/order.service";

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        PaginationMiddleware({
          sortFields: ["id"],
          defaultSort: { field: "id", order: "DESC" },
        })
      )
      .forRoutes({ path: "order", method: RequestMethod.GET });
  }
}
