/* eslint-disable camelcase */

const getContext = (action, bpp_uri, transaction_id) => ({
  action,
  transaction_id,
  bpp_uri,
});

export default {
  getContext,
};
