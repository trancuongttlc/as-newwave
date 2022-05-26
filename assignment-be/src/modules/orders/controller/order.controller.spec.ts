import { Test, TestingModule } from "@nestjs/testing";
import { TestUtil } from "../../../../test/orderUtil";
import { Order } from "../../../entities/order.entity";
import { OrderService } from "../service/order.service";
import { OrderController } from "./order.controller";

describe("OrderController", () => {
  let controller: OrderController;
  let mockOrder: Order;

  const mockOrderService = {
    detail: jest.fn(),
    list: jest.fn(),
    create: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [{ provide: OrderService, useValue: mockOrderService }],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    mockOrder = TestUtil.getMockOrder();
  });

  beforeEach(() => {
    mockOrderService.detail.mockReset();
    mockOrderService.list.mockReset();
    mockOrderService.create.mockReset();
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe('when create product', () => {
    it('should create a product and return it', async () => {
      mockOrderService.create.mockReturnValue(mockOrder);
      const order = {
        productCode: "Apple",
        description: "Iphone 16",
        money: 100,
        createdAt: new Date(),
      };
      const createdProduct = await controller.create(order);
      expect(createdProduct).toHaveProperty('id', 1);
      expect(createdProduct).toMatchObject(mockOrder);
      expect(mockOrderService.create).toBeCalledWith(order);
      expect(mockOrderService.create).toBeCalledTimes(1);
    });
  });

  describe("when search order by id", () => {
    it("should find a existing order and return it", async () => {
      mockOrderService.detail.mockReturnValue(mockOrder);
      const order = await controller.detail(1);
      expect(order).toMatchObject(mockOrder);
      expect(mockOrderService.detail).toBeCalledWith(1);
      expect(mockOrderService.detail).toBeCalledTimes(1);
    });
  });

  describe("when search all orders", () => {
    it("should search all orders and return them", async () => {
      mockOrderService.list.mockReturnValue([mockOrder]);
      const order = await controller.list(
        {},
        {
          size: 10,
          page: 1,
        }
      );
      expect(order).toHaveLength(1);
      expect(order).toMatchObject([mockOrder]);
      expect(mockOrderService.list).toBeCalledTimes(1);
    });
  });
});
