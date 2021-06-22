<template>
  <v-chart :style="ct" ref="piec" :option="option" id="myChart" />
</template>
<script>
import {use} from "echarts/core"
import {CanvasRenderer} from "echarts/renderers"
import { PieChart } from "echarts/charts"
import { TooltipComponent,LegendComponent } from "echarts/components";
import VChart from 'vue-echarts'
use([
    CanvasRenderer,PieChart,TooltipComponent,LegendComponent
])
export default {
  components:{
    VChart
  },
  props: {
    ct: {
      type: Object,
      default: {},
    },
    cdata: {
      type: Array,
      default: [],
    },
    colors:{
      type:Array,
      dafault:[]
    }
  },
  data() {
    return {
      option: {
        legend:{
          show:true,
          itemWidth:5,
          itemHeight:5,
          itemGap:3,
          bottom:0,
          textStyle:{
            color:"#ffffff",
            fontSize:10,
            lineHeight:10,
            width:23,
            height:10,
            overflow:'truncate'
          }
        },
        series: [
          {
            type: "pie",
            radius: "74%",
            center:['50%',30],
            label: {
              position: 'inside',
              formatter:(p)=>parseInt(p.percent)
            },
            data:[],
            emphasis: {
              scale: false,
            }
          }
        ]
      }
    };
  },
  methods: {

  },
  mounted() {
    
  },
  watch: {
    cdata(val){
      this.option.series[0].data = val;
    }
  },
};
</script>

<style scoped>
</style>