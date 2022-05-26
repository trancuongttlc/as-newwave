import { Order } from './order.entity';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([
            Order,
        ]),
    ],
    exports: [
        TypeOrmModule.forFeature([
            Order,
        ]),
    ]
})
export class RepositoryModule { }
