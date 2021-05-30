<template>
  <div class="my-chart" :style="ct" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([CanvasRenderer, PieChart]);
export default {
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
      tCHart: null,
    };
  },
  methods: {
    renderChart() {
      let _ = this;
      if (_.cdata.length) {
        _.tCHart = echarts.init(document.getElementById("myChart"));
        _.tCHart.setOption({
          series: [
            {
              type: "pie",
              radius: "90%",
              emphasis: {
                scale: false,
              },
              label: {
                show: true,
              },
              data: _.cdata,
            },
          ],
        });
      }
    },
  },
  mounted() {
    const _ = this;
    _.$nextTick(() => {
      _.renderChart();
    });
  },
  watch: {
    cdata() {
      let _ = this;
      this.$nextTick(() => {
        if (_.cdata) {
          _.renderChart();
        }
      });
    },
  },
};
</script>

<style scoped>
</style>