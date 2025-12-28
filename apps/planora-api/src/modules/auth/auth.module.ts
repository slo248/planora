import { Global, Module } from '@nestjs/common';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { ENVALID } from 'nestjs-envalid';
import { Config } from 'src/config/config';
import { AuthController } from './auth.controller';

@Global()
@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      inject: [ENVALID],
      useFactory: (config: Config) => ({
        authServerUrl: config.KEYCLOAK_SERVER_URL,
        realm: config.KEYCLOAK_REALM,
        clientId: config.KEYCLOAK_CLIENT_ID,
        secret: config.KEYCLOAK_SECRET,
      }),
    }),
  ],
  controllers: [AuthController],
  exports: [KeycloakConnectModule],
})
export class AuthModule {}
