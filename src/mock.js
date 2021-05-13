const Mock = require("mockjs");

const Random = Mock.Random;

const basicData = function(){
    let data = {
        "sex":{"a":81,"b":72},
        "age":{"a":81,"b":72,"c":99,"d":137,"e":52,"f":91},
        "cate":{"a":23,"b":72,"c":34,"d":137,"e":34,"f":456}
    };
    return {
        data:data
    }
}

Mock.mock("/grraph/basicdata","post",basicData);