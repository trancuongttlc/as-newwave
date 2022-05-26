import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export const Status = {
  FAILED: 0,
  SUCCEED: 1,
  PENDING: 2,
};

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  description: string;

  @Column()
  productCode: string;

  @Column("decimal", { precision: 15, scale: 2, default: 0 })
  money: number;

  @Column({ type: "tinyint", default: Status.PENDING })
  status: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
