const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(`ERRO : ${e.message}`);
  }
};

const loadImg = async () => {
  const catImg = document.getElementById("cat");
  catImg.src = await getCats();
};

loadImg();

const btn = document.getElementById("change-cat");
btn.addEventListener("click", loadImg);