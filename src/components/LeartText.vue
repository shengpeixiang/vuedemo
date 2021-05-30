<template>
    <div>
        <ul>
            <li v-for="item in lists" :key="item.id">
                <h3 v-if="item.title">{{item.title}}</h3>
                <div>
                    步骤{{item.id}}：{{item.text}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lists:[
                {title:"构造函数",id:"1",text:"遇到new关键字是，创建一个新的内存空间"},
                {id:"2",text:"函数体内的this指向新创建的内存空间"},
                {id:"3",text:"执行函数体内部的操作，一般是给this添加属性"},
                {id:"4",text:"默认返回this，相当于返回该内存空间，将这个内存空间赋值给变量后，变量就会指向这个内存空间，同时被标记为这个构造函数的实例"},
                {id:"5",text:"如果手动添加return，当return的是一个原始数据类型的数据，最终还是返回this"},
                {id:"6",text:"如果手动添加return，当return的是一个引用数据类型的数据，将返回该引用数据类型指向的内存地址，此时接受new执行结果的变量将不再是这个构造函数的实例"}
            ]
        }
    }
}
</script>

<style scoped>
    li{list-style: none;line-height: 32px;}
</style>