export function q84(age){
    if(age<18){
        const message = "You are yang man";
    }else{
        const message = "You are old man";
    }
    return message;
}

export function q83(){
    const person = {
        name:"Lydia",
        age:18
    };
    let city = person.city;
    city = "HangZhou"
    console.log(person)
}
export function q82(){
    var status = "1";
    setTimeout(() => {
        const status = "2";
        const data = {
            status:"3",
            getStatus(){
                return this.status;
            }
        }
        console.log(data.getStatus())
        console.log(data.getStatus.call(this))
    },0);
}