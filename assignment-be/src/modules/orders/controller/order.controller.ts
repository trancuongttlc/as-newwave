import { Pagination } from "../../../common/dtos/pagination";
import { Controller, Get, Param, Post, Body, Query, HttpCode } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";

import {
  CreateOrderRequest,
  ListOrderRequest,
} from "../dto/order.request.dto";
import { OrderService } from "../service/order.service";
import { OrderResponse } from "../dto/order.response.dto";

@ApiTags("order")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: "Get detail order" })
  @Get(":id")
  @HttpCode(200)
  async detail(@Param('id') id: number): Promise<OrderResponse> {
    return this.orderService.detail(id);
  }

  @ApiOperation({ summary: "Get list order" })
  @HttpCode(200)
  @Get()
  list(@Query() payload: ListOrderRequest, @Query() pagination: Pagination) {
    return this.orderService.list(payload, pagination);
  }

  @ApiOperation({ summary: "Create order" })
  @HttpCode(201)
  @Post()
  async create(@Body() request: CreateOrderRequest) {
    return await this.orderService.create(request);
  }
}
