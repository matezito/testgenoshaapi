console.log("index.js");

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic anVhbjp4VExEIDdNQlggNTVHQSBlS2d5IHN3YmcgUHBQcw==");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://wp.dev.genosha.com.ar/wp-json/wp/v2/skybox-images", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
