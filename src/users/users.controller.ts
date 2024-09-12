import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /* 
    GET - POST PATCH - DELETE 
    NO LOGIC, JUST ROUTE
    */

    @Get()
    findAll(){
        return []
    }    
    
    @Get('interns')// GET
    findAllaInterns(){
        return []
    }
    @Get(':id') // GET USERS/:id
    findOne(@Param('id') id: string){
        return {id}
    }

}

