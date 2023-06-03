import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ManufacturersService } from './manufacturers.service';
import { Manufacturer } from './entities/manufacturer.entity';
import { CreateManufacturerInput } from './dto/create-manufacturer.input';
import { UpdateManufacturerInput } from './dto/update-manufacturer.input';

@Resolver(() => Manufacturer)
export class ManufacturersResolver {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Mutation(() => Manufacturer)
  createManufacturer(@Args('createManufacturerInput') createManufacturerInput: CreateManufacturerInput) {
    return this.manufacturersService.create(createManufacturerInput);
  }

  @Query(() => [Manufacturer], { name: 'manufacturers' })
  findAll() {
    return this.manufacturersService.findAll();
  }

  @Query(() => Manufacturer, { name: 'manufacturer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.manufacturersService.findOne(id);
  }

  @Mutation(() => Manufacturer)
  updateManufacturer(@Args('updateManufacturerInput') updateManufacturerInput: UpdateManufacturerInput) {
    return this.manufacturersService.update(updateManufacturerInput.id, updateManufacturerInput);
  }

  @Mutation(() => Manufacturer)
  removeManufacturer(@Args('id', { type: () => Int }) id: number) {
    return this.manufacturersService.remove(id);
  }
}
