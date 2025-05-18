import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from './utils/validation.pipe';
import { HttpExceptionFilter } from './utils/http-exception.filter';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: process.env.HOST_API_GATEWAY,
      port: Number(process.env.PORT_API_GATEWAY),
    },
  });
  app.enableCors({
    origin: true,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.startAllMicroservices();
  await app.listen(Number(process.env.PUBLIC_PORT_API));
  console.log(
    `✅ API Gateway is running on http://localhost:${process.env.PUBLIC_PORT_API}`,
  );
}
void bootstrap();
