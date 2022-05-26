import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from '@nestjs/typeorm';
import { TestUtil } from "../../../../test/orderUtil";
import { Order } from "../../../entities/order.entity";
import { OrderService } from "../service/order.service";

describe("OrderService", () => {
  let service: OrderService;
  let mockOrder: Order;

  const mockRepository = {
    findOne: jest.fn(),
    list: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: getRepositoryToken(Order), useValue: mockRepository },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
    mockOrder = TestUtil.getMockOrder();
  });

  beforeEach(() => {
    mockRepository.findOne.mockReset();
    mockRepository.list.mockReset();
    mockRepository.create.mockReset();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe('when search order by id', () => {
    it('should find a existing order', async () => {
      mockRepository.findOne.mockResolvedValueOnce(mockOrder);

      const order = await service.detail(1);
      expect(order).toMatchObject(mockOrder);
      expect(mockRepository.findOne).toBeCalledWith(1);
      expect(mockRepository.findOne).toBeCalledTimes(1);
    });
  });

  describe('when create product', () => {
    it('should create a product', async () => {
      mockRepository.create.mockReturnValueOnce(mockOrder);
      mockRepository.save.mockReturnValueOnce(mockOrder);
      const order = {
        productCode: mockOrder.productCode,
        description: mockOrder.description,
        money: mockOrder.money,
        createdAt: mockOrder.createdAt,
      };
      const savedProduct = await service.create(order);
      expect(savedProduct).toHaveProperty('id', 1);
      expect(savedProduct).toMatchObject(mockOrder);
      expect(mockRepository.create).toBeCalledWith(order);
      expect(mockRepository.create).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

});
