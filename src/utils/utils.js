const check_mobile = function(m){
    if(!(/^1[34578]\d{9}$/.test(m))){ 
        return !1; 
    }else{
        return !0
    }
}
const check_pass = function(pw){
    if(pw.length>=8){
        var zg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]*$/;
        if (!zg.test(pw)) {
            return !1;
        } else {
            return !0;
        }
    }else{
        return !1;
    }
}
const deep_copy = function(obj){
    let robj;
    if(obj instanceof Array){
        robj = [];
        for(let i=0;i<obj.length;i++){
            robj.push(obj[i]);
        }
    }else if(obj instanceof Object){
        robj = {};
        for(let k in obj){
            if(obj[k] instanceof Object){
                robj[k] = deep_copy(obj[k]);
            }else{
                robj[k] = obj[k];
            }
        }
    }
    return robj;
}
export {check_mobile,check_pass,deep_copy}