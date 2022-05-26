import { Test } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";
import { OrderService } from "../src/modules/orders/service/order.service";
import { Order } from "../src/entities/order.entity";
import { TestUtil } from "./orderUtil";

describe("Order (e2e)", () => {
  let app: INestApplication;
  let mockOrder: Order;

  const mockOrderService = {
    detail: jest.fn(),
    list: jest.fn(),
    create: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(OrderService)
      .useValue(mockOrderService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();

    mockOrder = TestUtil.getMockOrder();
  });

  beforeEach(() => {
    mockOrderService.detail.mockReset();
    mockOrderService.list.mockReset();
    mockOrderService.create.mockReset();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("/order/:id (GET)", () => {
    it("should search a order by id and return it with http code 200", async () => {
      mockOrderService.detail.mockReturnValue(mockOrder);
      const response = await request(app.getHttpServer()).get("/order/1");
      expect(response.body).toMatchObject({
        ...mockOrder,
        createdAt: mockOrder.createdAt.toISOString(),
      });
      expect(response.status).toBe(200);
      expect(mockOrderService.detail).toBeCalledWith("1");
      expect(mockOrderService.detail).toBeCalledTimes(1);
    });
  });
});
