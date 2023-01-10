import { v4 as uuid } from 'uuid';

const getContext = (action) => ({
  action,
  transaction_id: uuid(),
  bpp_uri: process.env.REACT_APP_SELLER_APP_URL,
});

export default {
  getContext,
};
