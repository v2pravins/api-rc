import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  customerName: string;

  @Field()
  email: string;

  @Field((type) => Int)
  country: number;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  industries?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  tier?: string;
}
