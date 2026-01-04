const loadButtonRefined = document.getElementById("loadButtonRefined");
const contentAreaRefined = document.getElementById("contentAreaRefined");

function displayPost(post) {
  const postWrapper = document.createElement("div");
  postWrapper.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
  return postWrapper;
}

async function loadAllPosts() {
  const postIds = [1, 2, 3, 4, 5];

  contentAreaRefined.innerHTML = `<p>Loading content...</p>`;

  try {
    const fetchPromises = postIds.map((id) =>
      fetch(`https://dummyjson.com/posts/${id}`).then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      }),
    );

    const allPostsData = await Promise.all(fetchPromises);

    contentAreaRefined.innerHTML = "";

    allPostsData.forEach((post) => {
      contentAreaRefined.append(displayPost(post));
    });
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

loadButtonRefined.addEventListener("click", loadAllPosts);
// document.addEventListener("DOMContentLoaded", loadAllPosts);
