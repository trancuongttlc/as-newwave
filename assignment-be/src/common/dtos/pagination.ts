import { IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Trim } from "../../utils";

export class Pagination {
  // @IsNumber()
  @IsOptional()
  @Trim()
  @ApiProperty({ description: "Limit", example: 10, required: false })
  size: number;

  // @IsNumber()
  @IsOptional()
  @Trim()
  @ApiProperty({ description: "Page", example: 1, required: false })
  page: number;
}
