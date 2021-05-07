<template>
    <div id="ChartCon" class="chart-con" :style="chartstyle"></div>
</template>

<script>
import * as echarts from "echarts/core"
import {PieChart,MapChart} from "echarts/charts"
import {TitleComponent,TooltipComponent,GridComponent} from "echarts/components"
import {CanvasRenderer} from "echarts/renderers"

echarts.use([PieChart,MapChart,TitleComponent,TooltipComponent,GridComponent,CanvasRenderer])

export default {
    props:{
        chartstyle:{
            type:Object,
            default:{}
        },
        chartoptions:{
            type:Object,
            default:{}
        }
    },
    methods:{
        renderCharts(o){
            var myChart = echarts.init(document.getElementById("ChartCon"));
            myChart.setOption(o)
        }
    },
    mounted(){
        this.renderCharts(chartoptions);
    }
}
</script>

<style>

</style>