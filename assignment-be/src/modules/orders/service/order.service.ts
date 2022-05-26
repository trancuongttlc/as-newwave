import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { ERROR_CODE } from "../../../constants";
import { Pagination } from "../../../common/dtos/pagination";
import { calulatePagination } from "../../../utils/";

import { CreateOrderRequest, ListOrderRequest } from "../dto/order.request.dto";
import { ListOrderResponse, OrderResponse } from "../dto/order.response.dto";
import { Order, Status } from "../../../entities/order.entity";
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from "@nestjs/common";

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>
  ) {}

  async detail(id: number): Promise<OrderResponse> {
    try {
      const rawData = await this.repository.findOne(id);
      if (!rawData) {
        throw new NotFoundException(ERROR_CODE.ORDER_NOT_FOUND);
      }
      return plainToClass(OrderResponse, rawData, {
        excludeExtraneousValues: true,
      });
    } catch (e) {
      throw new ForbiddenException(e.message);
    }
  }

  async list(
    payload: ListOrderRequest,
    pagination: Pagination
  ): Promise<ListOrderResponse> {
    const { description, productCode } = payload;
    const [limit, offset] = calulatePagination(
      pagination.size,
      pagination.page
    );
    const query = this.repository.createQueryBuilder("o");
    if (productCode) {
      query.andWhere("o.productCode = :productCode", {
        productCode,
      });
    }
    if (description) {
      query.andWhere("o.description LIKE :description", {
        description: `%${description}%`,
      });
    }
    query.skip(offset).take(limit).orderBy("createdAt", "DESC");
    const [items, total] = await query.getManyAndCount();
    const data = await plainToClass(OrderResponse, items, {
      excludeExtraneousValues: true,
    });
    const pageCount: number = limit && total ? Math.ceil(total / limit) : 0;
    return {
      items: data,
      total,
      pageCount,
      size: items.length,
      page: offset / limit + 1,
    };
  }

  async create(payload: CreateOrderRequest): Promise<OrderResponse> {
    const createOrder: Order = this.repository.create({
      ...payload,
    });
    await this.repository.save(createOrder);
    this.handlePaymentStatus(createOrder);
    return plainToClass(OrderResponse, createOrder, {
      excludeExtraneousValues: true,
    });
  }

  async handlePaymentStatus(createOrder: CreateOrderRequest) {
    const timer: number = 45000;
    setTimeout(async () => {
      await this.repository.save(
        this.repository.create({
          ...createOrder,
          status: this.getRandomInt(Status.FAILED, Status.SUCCEED),
        })
      );
    }, timer);
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
