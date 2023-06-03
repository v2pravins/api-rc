import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  createAt?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  lastLogin?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  status?: string;
}
