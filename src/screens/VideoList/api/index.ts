// Define the external verification API endpoint
const API_URL =
  'https://6389df1b4eccb986e89cf319.mockapi.io/external-verification/websites';

const getWebsites = async () => {
  const result = fetch(API_URL, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.slice(0, 3);
    })
    .catch((error) => console.error(error));
  return result;
};

export {getWebsites};
