const apiUrl = import.meta.env.VITE_API_URL;

async function getMenu() {
  const data = await fetch(`${apiUrl}/menu`).then((response) =>
    response.json(),
  );
  return data;
}

export default {
  getMenu,
};
