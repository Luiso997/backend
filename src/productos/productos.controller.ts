import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProducto } from './dto/CreateProducto.dto';
import { ProductosService } from './servicios/productos/productos.service';
import { UpdateProducto } from './dto/UpdateProducto.dto';

@Controller('productos')
export class ProductosController {
    constructor(private productoService: ProductosService){

    }
    @Get()
    getProductos(){
        return this.productoService.findProductos();
       
    }

    @Post()
    createProducto(
        @Body()createProductoDto: CreateProducto){
        return this.productoService.createProducto(createProductoDto)
    }

    @Put(':id')
    async updateUserById(                       // Se usa async ya que no es necesario regresar el cambio que se hizo
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateProductoDto: UpdateProducto){
        await this.productoService.updateProducto(id,updateProductoDto)
    }

    @Delete(':id')
    deleteUserById(
        @Param('id', ParseIntPipe) id: number){ 
        return this.productoService.deleteProducto(id)
        
    }
}
