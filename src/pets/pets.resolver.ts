import {
  Int,
  Args,
  Mutation,
  Query,
  Resolver,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => Pet)
  getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return this.petsService.findOne(id);
  }

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

  @ResolveField((returns) => Owner)
  owner(@Parent() pet: Pet): Promise<Owner> {
    return this.petsService.getOwner(pet.ownerId);
  }

  @Mutation((returns) => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    // const newPet = this.petsRepository.create(createPetInput);
    // return this.petsRepository.save(newPet);
    return this.petsService.createPet(createPetInput);
  }
}
