const requestAPI = async () => {
	try {
		const res = await axios.get("https://wp.dev.genosha.com.ar/wp-json/wp/v2/skybox-images", {
			headers: {
				"Authorization": "Basic anVhbjp4VExEIDdNQlggNTVHQSBlS2d5IHN3YmcgUHBQcw==",
				"Content-Type": "application/json",
			},
		});

		if(res.data.success) {
			document.querySelector('#app').innerHTML = `<img src="${res.data.data.back}" />`;
		}

		console.log(res.data)
	} catch (err) {
		console.log(err);
	}
};

requestAPI();