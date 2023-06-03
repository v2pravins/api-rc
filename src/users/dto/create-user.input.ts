import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  createAt?: string;

  @Field({ nullable: true })
  lastLogin?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  status?: string;
}
