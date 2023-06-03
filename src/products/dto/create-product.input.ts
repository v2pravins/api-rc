import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  productName: string;

  @Field((type) => Int)
  productManufacturerId: number;

  @Field()
  productStatus: string;

  @Field()
  productPrice: number;

  @Field({ nullable: true })
  productDescription?: string;

  @Field({ nullable: true })
  productLeadTime?: string;

  @Field({ nullable: true })
  productFamily?: string;

  @Field({ nullable: true })
  LeadTime?: string;
}
