function fetchAndProcessData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        if (!response.ok)
          throw new Error("Something is wrong with the connection");
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchAndProcessData()
  .then((data) => {
    console.log("User ID:", data.userId);
    console.log("ID:", data.id);
    console.log("Title:", data.title);
  })
  .catch((error) => {
    console.error("Caught an error:", error);
  });
