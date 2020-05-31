let SportsApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c0e8ef38c73d4ef997fce85f7ba2cf83";
let healthApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c0e8ef38c73d4ef997fce85f7ba2cf83";
window
  .fetch(SportsApi)
  .then((sportsData) => {
    sportsData
      .json()
      .then((sports) => {
        console.log(sports.articles);
        let sportsFeed = sports.articles;
        let output = [];
        for (let sport of sportsFeed) {
          output += `
          <div class="card p-3" style="height:385px;">
          <img src="${sport.urlToImage}" class="img=card-top"/>
          <div class="card-body my-2">
          <h6 class="font-weight-bold text-success">
          ${sport.title}</h6>
          <a href="${sport.url}" target="_blank" class="btn btn-success btn-sm">
          details</a>
          </div>
          </div>
            `;
          document.getElementById("sportsSection").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
