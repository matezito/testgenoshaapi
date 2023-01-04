import axios from "axios";

const todo = axios.create({
  headers: {
    "Authorization": "Basic anVhbjp4VExEIDdNQlggNTVHQSBlS2d5IHN3YmcgUHBQcw==",
    "Content-Type": "application/json",
  },
})

const cosito = async () => {
  const data = await todo.get("https://wp.dev.genosha.com.ar/wp-json/wp/v2/skybox-images");
  return data;
};

const otro = async () => {
  return await cosito;
}
console.log(otro);