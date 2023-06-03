import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from './owners/owners.module';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { AuthModule } from './auth/auth.module';
import { DirectiveLocation, GraphQLDirective } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      useGlobalPrefix: true,
      installSubscriptionHandlers: true,
      context: ({req}) => ({req}),
      cors: {
        origin: 'https://revcon-init.herokuapp.com',
        credentials: true,
      },
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PetsModule,
    OwnersModule,
    CustomersModule,
    ProductsModule,
    UsersModule,
    ManufacturersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
