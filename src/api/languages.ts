export async function listLanguages() {
  let url = 'http://localhost:3001/languages'
  let options = {method: 'GET'};

  const response = await fetch(url, options).then(res => res.json());
  return response;
}