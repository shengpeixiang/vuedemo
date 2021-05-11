<template>
    <div id="ChartCon" class="chart-con" :style="chartstyle"></div>
</template>

<script>
import * as echarts from "echarts/core"
import {PieChart,MapChart} from "echarts/charts"
import {TitleComponent,TooltipComponent,GridComponent} from "echarts/components"
import {CanvasRenderer} from "echarts/renderers"
import debounce from "lodash.debounce"

echarts.use([PieChart,MapChart,TitleComponent,TooltipComponent,GridComponent,CanvasRenderer])

export default {
    props:{
        chartstyle:{
            type:Object,
            default:{}
        },
        chartoptions:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            myChart:null
        }
    },
    methods:{
        renderCharts(data){
            let option = {
                title: {
                    show:false
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: '80%',
                        data:data
                    }
                ]
            };
            this.myChart = echarts.init(document.getElementById("ChartCon"));
            this.myChart.setOption(option)
        }
    },
    mounted(){
        let _ = this;
        _.renderCharts(_.chartoptions);
        window.onresize = debounce(()=>{
            this.myChart.resize();
        },100)
    }
}
</script>

<style>

</style>