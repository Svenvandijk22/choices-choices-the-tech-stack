
export default async function () {
  const apiUrl = 'https://fdnd-agency.directus.app/items/behandeling';

  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error('Behandelingen ophalen mislukt');
  }

  const json = await res.json();

  return json.data;
}
