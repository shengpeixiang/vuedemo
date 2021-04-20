export function setLstorage(name,val){
    localStorage.setItem(name,val);
}

export function getLstorage(name){
    return localStorage.getItem(name);
}

export function setSstorage(name,val){
    sessionStorage.setItem(name,val)
}

export function getSstorage(name){
    return sessionStorage.getItem(name)
}
export function clearStorage(type,name){
    if(name){
        type==='L'?localStorage.removeItem(name):sessionStorage.removeItem(name);
    }else{
        type==='L'?localStorage.clear():sessionStorage.clear();
    }
    
}