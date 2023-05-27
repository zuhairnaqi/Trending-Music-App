import forge from 'mappersmith';
import { apiBaseUrl } from '../../../constants/api-baseUrl';
import { ServerErrorMiddleware } from '../../middleware/server-error-middleware';
import { ServerResponseMiddleware } from '../../middleware/server-response-middleware';
import { AccessTokenMiddleware } from '../../middleware/access-token-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';

const serverError = ServerErrorMiddleware();
const serverResponse = ServerResponseMiddleware();
const accessTokenMiddeware = AccessTokenMiddleware();

const client = forge({
  host: apiBaseUrl,
  middleware: [serverError, serverResponse, accessTokenMiddeware, EncodeJson],
  resources: {
    Auth: {
      login: {
        path: '/api/token',
        method: 'post',
        bodyAttr: 'credential',
      },
    },
  },
});

export const login = credential => {
  return client.Auth.login({ credential });
};
