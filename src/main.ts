import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CustomValidationPipe } from './utils/validation.pipe';
import { HttpExceptionFilter } from './utils/http-exception.filter';
import configuration from './config/configuration';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: configuration().gateway.host,
      port: Number(configuration().gateway.port),
    },
  });
  app.enableCors({
    origin: true,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  });
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.startAllMicroservices();
  await app.listen(Number(configuration().gateway.publicPort));
  console.log(
    `✅ API Gateway is running on http://localhost:${configuration().gateway.publicPort}`,
  );
}
void bootstrap();
