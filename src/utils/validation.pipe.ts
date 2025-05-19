/* eslint-disable @typescript-eslint/no-unsafe-return */
// utils/validation.pipe.ts
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      ...options,
    });
  }

  override async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      if (error instanceof BadRequestException) {
        // const response = error.getResponse();
        throw new BadRequestException({
          success: false,
          message: 'Dữ liệu không hợp lệ',
        });
      }
      throw error;
    }
  }
}
