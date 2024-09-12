import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './typeorm/entities/producto';
import { ProductosModule } from './productos/productos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: 'Standinghigh12!',
      database: 'ejemplo',
      entities: [Producto],
      synchronize: true,

  }),
    ProductosModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
