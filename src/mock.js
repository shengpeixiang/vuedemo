const Mock = require("mockjs");

const Random = Mock.Random;

const produceNewsData = function(){
    let articles = [];
    for(let i=0;i<10;i++){
        let newArticleObject = {
            title:Random.csentence(5,10),
            author_name:Random.cname(),
            date:Random.date()+"-"+Random.time
        }
        articles.push(newArticleObject);
    }
    return {
        articles:articles
    }
}

Mock.mock("/grraph/basicdata","post",produceNewsData);