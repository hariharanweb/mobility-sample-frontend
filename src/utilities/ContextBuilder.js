import moment from 'moment';
import { v4 as uuid } from 'uuid';

const getContext = (action) => ({
  action,
  transaction_id: uuid(),
  timestamp: moment().format(),
  bpp_id: process.env.REACT_APP_SELLER_APP_ID,
  bpp_uri: process.env.REACT_APP_SELLER_APP_URL,
});

export default {
  getContext,
};
