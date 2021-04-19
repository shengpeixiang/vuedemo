
const userlist = [
    {name:"admin",pw:"admin123456"},
    {name:"user",pw:"user123456"},
    {name:"user1",pw:"user123456"}
]
export function check(name,pw,callback){
    let checkuser = userlist.find(item=>item.name==name)
    if(checkuser){
        if(checkuser.pw === pw){
            callback('200');
        }else{
            callback('201');
        }
    }else{
        callback('404');
    }
}