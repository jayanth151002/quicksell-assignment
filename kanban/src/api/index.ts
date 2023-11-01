export const callApi = async () => {
  return await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      return { success: true, data: parsedData };
    })
    .catch(() => {
      return { success: false, data: null };
    });
};
