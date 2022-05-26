import { Trim } from "../../../utils";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  @Trim()
  @ApiProperty({ description: "product" })
  productCode: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  @ApiProperty({ description: "description order" })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: "money" })
  money: number;
}

export class ListOrderRequest {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: "product", required: false })
  productCode?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: "description order", required: false })
  description?: string;
}

export class OrderIdRequest {
  @IsNotEmpty()
  @ApiProperty()
  id: number;
}
