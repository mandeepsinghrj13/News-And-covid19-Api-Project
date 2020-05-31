let scienceApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c0e8ef38c73d4ef997fce85f7ba2cf83";

window
  .fetch(scienceApi)
  .then((scienceData) => {
    scienceData
      .json()
      .then((science) => {
        console.log(science.articles);
        let scienceFeed = science.articles;
        let output = [];
        for (let science of scienceFeed) {
          output += `
          <div class="card p-3" style="height:385px;">
          <img src="${science.urlToImage}" class="img=card-top"/>
          <div class="card-body my-2">
          <h6 class="font-weight-bold text-success">
          ${science.title}</h6>
          <a href="${science.url}" target="_blank" class="btn btn-success btn-sm">
          details</a>
          </div>
          </div>
            `;
          document.getElementById("scienceSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
