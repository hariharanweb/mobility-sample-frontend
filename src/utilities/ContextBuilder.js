/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';

const getContext = (action, bpp_uri) => ({
  action,
  transaction_id: uuid(),
  bpp_uri,
});

export default {
  getContext,
};
