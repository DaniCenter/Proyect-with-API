const API = "https://youtube138.p.rapidapi.com/search/?q=code%20with%20js&hl=en&gl=US";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa2b0a53e5mshff3a854104c73a7p1fa581jsneb8ec3d3948b",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
const contenido = null || document.getElementById("content");

async function fetchData(urlApi) {
  return await fetch(API, options).then((res) => res.json());
}

(async () => {
  try {
    const videos = await fetchData(API);
    const arrayVideos = videos.contents.filter((vid) => vid.type === "video");
    let view = "";
    for (let i = 0; i < 8; i++) {
      const res = `
      <div class="group relative">
      <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${arrayVideos[i].video.thumbnails[0].url}" alt="" class="w-full" />
      </div>
      <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
      <span aria-hidden="true" class="absolute inset-0"></span>
      ${arrayVideos[i].video.title}
      </h3>
      </div>
      </div>
      `;
      view += res;
    }
    contenido.innerHTML = view;
    console.log(view);
  } catch (error) {
    console.log(error);
  }
})();
// `<div class="group relative">
// <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//   <img src="${video.video.thumbnails[0].url}" alt="" class="w-full" />
// </div>
// <div class="mt-4 flex justify-between">
//   <h3 class="text-sm text-gray-700">
//     <span aria-hidden="true" class="absolute inset-0"></span>
//     ${video.video.title}
//   </h3>
// </div>
// </div>;
// `;
