import axios from "axios";


function rq(op){
    return '2';
    if(op.type==="get"){
        axios.get(op.url).then(res=>res).catch(err=>err);
    }else if(op.type==="post"){
        axios.post(op.url,op.data).then(res=>res).catch(err=>err);
    }
}
export default rq;