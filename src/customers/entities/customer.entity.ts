import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  customerName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field((type) => Int)
  country: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  industries?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  tier?: string;
}
