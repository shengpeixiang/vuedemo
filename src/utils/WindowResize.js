import {debounce} from "lodash"
import store from './../store'

export function WR(){
    window.onresize = debounce(function(){
        if(document.documentElement.clientWidth<(store.state.hnav.length * 116 +138)){
            store.state.sizemark = "small"
        }else{
            store.state.sizemark = "big"
        }
    },300)
}