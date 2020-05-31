let technologyApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c0e8ef38c73d4ef997fce85f7ba2cf83";

window
  .fetch(technologyApi)
  .then((technologyData) => {
    technologyData
      .json()
      .then((technology) => {
        console.log(technology.articles);
        let technologyFeed = technology.articles;
        let output = [];
        for (let technology of technologyFeed) {
          output += `
          <div class="card p-3" style="height:385px;">
          <img src="${technology.urlToImage}" class="img=card-top"/>
          <div class="card-body my-2">
          <h6 class="font-weight-bold text-success">
          ${technology.title}</h6>
          <a href="${technology.url}" target="_blank" class="btn btn-success btn-sm">
          details</a>
          </div>
          </div>
            `;
          document.getElementById("technologySection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
