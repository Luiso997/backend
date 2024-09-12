import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/typeorm/entities/producto';
import { createProductoParams, UpdateProductoParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

    constructor(
        @InjectRepository(Producto) private productoRepository: Repository<Producto>,){}

    findProductos(){
        return this.productoRepository.find()
    }

    createProducto(productoDetails: createProductoParams){
        const newProducto = this.productoRepository.create({...productoDetails})
        return this.productoRepository.save(newProducto);
    }

    updateProducto(id:number, updateProductoDetails: UpdateProductoParams){    //Se ingresa el ID del que se desea modificar, junto con los nuevos detalles
        return this.productoRepository.update({ id }, { ...updateProductoDetails }); 
    }

    deleteProducto(id:number){
        return this.productoRepository.delete({id})
    }
}
