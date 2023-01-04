import moment from 'moment';
import { v4 as uuid } from 'uuid';

const getContext = (action) => ({
  domain: 'nic2004:60221',
  country: 'IND',
  city: 'std:080',
  action,
  core_version: '1.0.0',
  bap_id: process.env.REACT_APP_BUYER_APP_ID,
  bap_uri: process.env.REACT_APP_BUYER_APP_URL,
  transaction_id: uuid(),
  message_id: uuid(),
  timestamp: moment().format(),
  bpp_id: process.env.REACT_APP_SELLER_APP_ID,
  bpp_uri: process.env.REACT_APP_SELLER_APP_URL,
});

export default {
  getContext,
};
