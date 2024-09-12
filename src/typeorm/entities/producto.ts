import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'productos'})
export class Producto { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nombre: string;

    @Column()
    empresa: string;
    
    @Column()
    cantidad: number;
    @Column()
    precio: number;
}