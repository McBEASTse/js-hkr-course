async function fetchAndProcessData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) throw new Error("Connection failed");

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
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
