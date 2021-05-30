const Mock = require("mockjs");
function rn(){
    return Math.ceil(Math.random()*100)
}
const produceNewsData = function(){
    let basicData = {
        sex:[{value:rn(),name:"男"},{value:rn(),name:"女"}],
        age:[
            {value:rn(),name:"00后"},
            {value:rn(),name:"95后"},
            {value:rn(),name:"90后"},
            {value:rn(),name:"85后"},
            {value:rn(),name:"80后"},
            {value:rn(),name:"80前"}
        ],
        cate:[
            {value:rn(),name:"一"},
            {value:rn(),name:"二"},
            {value:rn(),name:"三"},
            {value:rn(),name:"四"},
            {value:rn(),name:"五"},
            {value:rn(),name:"六"}
        ]
    }
    return {
        bd:basicData
    }
}

Mock.mock("/grraph/basicdata","post",produceNewsData);