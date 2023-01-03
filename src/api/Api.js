const post = async (url, body) => {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

const get = async (url, queryParams) => {
  const query = Object.keys(queryParams)
    .map(
      (k) => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`,
    )
    .join('&');
  const response = await fetch(`${url}?${query}`);
  return response.json();
};

const poll = (call, times, delay) => {
  if (times === 0) return;
  call();
  setTimeout(() => {
    poll(call, times - 1, delay);
  }, delay);
};

export default {
  post,
  get,
  poll,
};
