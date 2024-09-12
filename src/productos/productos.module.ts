import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './servicios/productos/productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/typeorm/entities/producto';

@Module({
  imports:[TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
