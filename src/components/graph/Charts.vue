<template>
  <v-chart :style="ct" ref="piec" :option="option" id="myChart" />
</template>
<script>
import {use} from "echarts/core"
import {CanvasRenderer} from "echarts/renderers"
import { PieChart } from "echarts/charts"
import { TooltipComponent } from "echarts/components";
import VChart from 'vue-echarts'
use([
    CanvasRenderer,PieChart,TooltipComponent
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
  },
  data() {
    return {
      option: {
        series: [
          {
            type: "pie",
            radius: "80%",
            label: {
              show: true,
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
      console.log(this.option);
    }
  },
};
</script>

<style scoped>
</style>