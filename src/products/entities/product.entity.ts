import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  productName: string;

  @Column()
  @Field((type) => Int)
  productManufacturerId: number;

  @Column()
  @Field()
  productStatus: string;

  @Column()
  @Field()
  productPrice: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  productDescription?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  productLeadTime?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  productFamily?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  LeadTime?: string;

  // @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.manufacturerId)
  // @Field((type) => Manufacturer, { nullable: true })
  // manufacturer?: Manufacturer[];
}
