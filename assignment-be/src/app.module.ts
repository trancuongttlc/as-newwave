import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderModule } from "./modules/orders/order.module";
import { RepositoryModule } from "./entities";
import ormconfig from "./ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), RepositoryModule, OrderModule],
  controllers: [],
})
export class AppModule {}
