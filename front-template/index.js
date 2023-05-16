const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");

imageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = imageInput.files[0];

  //conseguir la url segura de nuestro servidor

  const { url } = await fetch("/s3url").then((res) => res.json());
  console.log(url);

  //POST la imagen directamente a nuestro bucket s3
  await fetch({
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file,
  });

  const imageUrl = url.split("?")[0];
  console.log(imageUrl);

  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});
