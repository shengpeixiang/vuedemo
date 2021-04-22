
const userlist = [
    {name:"admin",pw:"admin123456"}
]
export function setcookie(name,value,daysToLive){
    let cookie;
    if(typeof daysToLive === 'number'){
        cookie = `${name}=${encodeURIComponent(value)};max-age=${daysToLive*60*60*24};path=/`
    }else{
        cookie = `${name}=${encodeURIComponent(value)};path=/`
    }
    document.cookie = cookie;
}
export function getcookie(){
    let cookie = {};
    let all = document.cookie;
    if(all===''){
        return cookie;
    }else{
        let list = all.split(';');
        for(let i=0;i<list.length;i++){
            let cookstr = list[i];
            let p =cookstr.indexOf('=');
            let name = cookstr.substring(0,p);
            let value = cookstr.substring(p+1);
            value = decodeURIComponent(value);
            cookie[name]=value.trim()
        }
    }
    return cookie;
}
export function clearCookie(){
    setcookie('admin','',0);
}
export function check(name,pw,callback){
    let checkuser = userlist.find(item=>item.name==name)
    if(checkuser){
        if(checkuser.pw === pw){
            setcookie(name,pw,0.1);
            callback('200');
        }else{
            callback('201');
        }
    }else{
        callback('404');
    }
}

export function islogin(){
    let lcookie = getcookie();
    if(userlist[0].pw === lcookie[userlist[0].name]){
        return true;
    }else{
        return false;
    }
}