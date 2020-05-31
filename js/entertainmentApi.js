let entertainmentApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c0e8ef38c73d4ef997fce85f7ba2cf83";

window
  .fetch(entertainmentApi)
  .then((entertainmentData) => {
    entertainmentData
      .json()
      .then((entertainment) => {
        console.log(entertainment.articles);
        let entertainmentFeed = entertainment.articles;
        let output = [];
        for (let entertainment of entertainmentFeed) {
          output += `
          <div class="card p-3" style="height:385px;">
          <img src="${entertainment.urlToImage}" class="img=card-top"/>
          <div class="card-body my-2">
          <h6 class="font-weight-bold text-success">
          ${entertainment.title}</h6>
          <a href="${entertainment.url}" target="_blank" class="btn btn-success btn-sm">
          details</a>
          </div>
          </div>
            `;
          document.getElementById("entertainmentSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
