const Mock = require("mockjs");
function rn(){
    return Math.ceil(Math.random()*100)
}
const produceNewsData = function(id){
    let basicData = {
        id:id,
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
            {value:rn(),name:"在校学生"},
            {value:rn(),name:"机关事业"},
            {value:rn(),name:"医务人员"},
            {value:rn(),name:"教师"},
            {value:rn(),name:"互联网行业"},
            {value:rn(),name:"其他"}
        ],
        lmdata:[
            {name:"器质性精神障碍",num:rn(),total:100},
            {name:"使用精神活性物质引起精神行为障碍",num:rn(),total:100},
            {name:"精神分裂症和分裂型障碍",num:rn(),total:100},
            {name:"妄想障碍",num:rn(),total:100},
            {name:"心境【情感】障碍",num:rn(),total:100},
            {name:"神经症性、应激相关、躯体形式障碍",num:rn(),total:100},
            {name:"与生理紊乱和躯体有关行为综合征",num:rn(),total:100},
            {name:"成人人格和行为障碍",num:rn(),total:100},
            {name:"精神发育迟滞",num:rn(),total:100},
            {name:"心理发育障碍",num:rn(),total:100},
            {name:"在童年和青少年期发病的行为和情绪障碍",num:rn(),total:100},
            {name:"睡眠障碍",num:rn(),total:100}
        ]
    }
    return {
        bd:basicData
    }
}
const menulist = function(){
    return [
        {id:1,title:"吃"}
    ]
}
const comsuccess = function(data){
    return data;
}
Mock.mock("/grraph/basicdata","post",produceNewsData);
Mock.mock("/index/index/homepage","post",menulist);
Mock.mock("/index/index/success","post",comsuccess);