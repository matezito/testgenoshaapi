const test = async () => {
  const coso = await fetch("https://wp.dev.genosha.com.ar/wp-json/wp/v2/skybox-images", {
    method: "GET",
    headers: {
      "Authorization": "Basic anVhbjp4VExEIDdNQlggNTVHQSBlS2d5IHN3YmcgUHBQcw==",
      "Content-Type": "application/json",
    }
  });

  return await coso.json();
}

const testito = async () => {
  const llll = await test();
  if(llll.success)  {
    document.querySelector('#app').innerHTML = `<img src="${llll.data.back}" />`;
  }
  return llll;
}

testito();