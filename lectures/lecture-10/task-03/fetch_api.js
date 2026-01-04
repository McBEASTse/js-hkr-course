fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error("Something is wrong with the connection");
    return response.json();
  })
  .then(({ id, userId, title }) => {
    console.log(`ID: ${id}`);
    console.log(`User ID: ${userId}`);
    console.log(`Title: ${title}`);
  })
  .catch((error) => console.error(error));
