import forge from 'mappersmith';
import {apiAccountUrl} from '../../../constants/api-baseUrl';
import {ServerErrorMiddleware} from '../../middleware/server-error-middleware';
import {ServerResponseMiddleware} from '../../middleware/server-response-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';

const serverError = ServerErrorMiddleware();
const serverResponse = ServerResponseMiddleware();

const client = forge({
  host: apiAccountUrl,
  middleware: [serverError, serverResponse, EncodeJson],
  resources: {
    Auth: {
      getAccessToken: {
        path: '/token',
        method: 'post',
        bodyAttr: 'credential',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    },
  },
});

export const getAccessToken = credential => {
  return client.Auth.getAccessToken({credential});
};
