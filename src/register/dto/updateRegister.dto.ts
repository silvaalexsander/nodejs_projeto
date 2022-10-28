import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './createRegister.dto';

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {}