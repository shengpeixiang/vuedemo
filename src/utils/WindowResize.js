import debounce from "lodash.debounce"
import store from './../store'

export function WR(){
    window.onresize = debounce(function(){
        if(document.documentElement.clientWidth<900){
            store.state.sizemark = "small"
        }else{
            store.state.sizemark = "big"
        }
    },300)
}