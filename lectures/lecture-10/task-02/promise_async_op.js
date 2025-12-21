function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Operation complete");
    }, 2000);
  });
}

simulateAsyncOperation()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
