import forge from 'mappersmith';
import {apiBaseUrl} from '../../../constants/api-baseUrl';
import {ServerErrorMiddleware} from '../../middleware/server-error-middleware';
import {ServerResponseMiddleware} from '../../middleware/server-response-middleware';
import {AccessTokenMiddleware} from '../../middleware/access-token-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';

const serverError = ServerErrorMiddleware();
const serverResponse = ServerResponseMiddleware();
const accessTokenMiddeware = AccessTokenMiddleware();

const client = forge({
  host: apiBaseUrl,
  middleware: [serverError, serverResponse, EncodeJson, accessTokenMiddeware],
  resources: {
    Spotify: {
      getTrendingPlaylist: {
        path: '/browse/featured-playlists',
        method: 'get',
      },
      getTracks: {
        path: '/playlists/{playlistId}/tracks?offset=0&limit=20',
        method: 'get',
      },
      getTrackDetails: {
        path: 'tracks/{trackId}',
        method: 'get',
      },
    },
  },
});

export const getTrendingPlaylist = query => {
  return client.Spotify.getTrendingPlaylist({...query});
};

export const getTracks = playlistId => {
  return client.Spotify.getTracks({playlistId});
};

export const getTrackDetails = trackId => {
  return client.Spotify.getTrackDetails({trackId});
};
