import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createRegister(req): Promise<string> {
        return `Cliente ${req.name} cadastrado com sucesso!`;
    }

    async findAll(){
        return 'Lista de Clientes';
    }

    async findOne(id: string){
        return `Cliente ${id} encontrado`;
    }

    async update(id: string, req){
        return `Cliente ${id} atualizado com sucesso!`;
    }
}

