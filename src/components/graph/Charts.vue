<template>
  <v-chart :ct="ct" :option="option" id="myChart" />
</template>
<script>
import {use} from "echarts/core"
import {CanvasRenderer} from "echarts/renderers"
import { PieChart } from "echarts/charts"
import { TooltipComponent } from "echarts/components";
import VChart,{THENE_KEY} from 'vue-echarts'
use([
    CanvasRenderer,PieChart,TooltipComponent
])
export default {
  components:{
    VChart
  },
  provide: {
    [THENE_KEY]: "dark"
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
    let _ = this;
    return {
      option: {
        series: [
          {
            type: "pie",
            radius: "70%",
            label: {
              show: true,
            },
            data:_.cdata,
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
    console.log("Chart Mounted")
  },
  watch: {
    
  },
};
</script>

<style scoped>
</style>