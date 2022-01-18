const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

export const getTokenFromHref = (): string | null => {
  let url = new URL(window.location.href);
  let idToken = null;

  url.hash
    .substr(1)
    .split('&')
    // eslint-disable-next-line
    .some((keyValueString) => {
      let keyValueArray = keyValueString.split('=');
      if (keyValueArray[0] === 'id_token') {
        idToken = keyValueArray[1];
        return true;
      }
    });

  return idToken;
};
