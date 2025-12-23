const loadButton = document.getElementById("loadButton");
const contentArea = document.getElementById("contentArea");

// Skapa en function som wrappar title och body inuti en div (för att returnera ett värde)
function displayPost(post) {
  const postWrapper = document.createElement("div");
  const h2Element = document.createElement("h2");
  const pElement = document.createElement("p");
  h2Element.innerText = post.title;
  pElement.innerText = post.body;

  // Använd append för att lägga in title och body inuti div elementet
  postWrapper.append(h2Element);
  postWrapper.append(pElement);

  // Returnera div:en med all content
  return postWrapper;
}

// Skapa en asynchronous funktion med en array med vilka posts som ska presenteras
async function loadAllPosts() {
  // En array funkar om det är olika posts som hämtas. En "vanlig" i++ for loop funkar bättre om det är stigande värde till X
  const postId = [1, 2, 3, 4, 5];

  // of istället för in, för att värdet i array ska användas i stället
  for (const id of postId) {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!response.ok) throw new Error("Connection failed");
      const data = await response.json();

      // Lägg in div inuti elementet med id contentArea
      contentArea.append(displayPost(data));
    } catch (error) {
      throw error;
    }
  }
}

loadButton.addEventListener("click", loadAllPosts);
// document.addEventListener("DOMContentLoaded", loadAllPosts);
