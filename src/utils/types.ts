export type createProductoParams = { /*Estos existen para no reutilizar los DTO (Data Transfer Object),
                                       ya sea que se utilize informacion que no se vaya a utilizar en la base de datos*/
    nombre: string;
    empresa:string;
    cantidad:number;
    precio:number
}

export type UpdateProductoParams = {
nombre: string;
empresa:string;
cantidad:number;
precio:number
}