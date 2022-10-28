import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';
import { CreateRegisterDto } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    
    constructor(private readonly registerService: RegisterService) {}

    @Post()
    async createRegister(@Body() req: CreateRegisterDto): Promise<string> {
        return this.registerService.createRegister(req)
        
    }

    @Get()
    async findAll(){
        return this.registerService.findAll();
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string){
        return this.registerService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() req: CreateRegisterDto){
        return this.registerService.update(id, req);
    }
}

