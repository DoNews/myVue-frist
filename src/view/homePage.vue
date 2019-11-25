<!--  -->
<template>
  <div class="home">
    <div class="top">
      <div
        class="item"
        v-for="(item,index) in data"
        :key="index"
        :style="{backgroundColor:item.color}"
      >
        <div class="titl1">{{item.name}}</div>
        <div class="contents">
          <div class="left">
            <i :class="item.icon"></i>
          </div>
          <div class="right">{{item.num}}</div>
        </div>
      </div>
    </div>
    <div class="bbb">
      <div class="div" style="width:41%">
        <div class="tableBox">
          <div class="h40">最新进度</div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div class="tableBox">
          <div class="h40">最新进度</div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="div" style="width:59%">
        <div id="myChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      data: [
        {
          icon: 'el-icon-tickets',
          name: '处理工单',
          num: 55,
          color: 'red'
        },
        {
          icon: 'el-icon-printer',
          name: '暂停工单',
          num: 55,
          color: 'darkblue'
        },
        {
          icon: 'el-icon-tickets',
          name: '关闭工单',
          num: 55,
          color: 'cornflowerblue'
        },
        {
          icon: 'el-icon-star-off',
          name: '办结工单',
          num: 55,
          color: 'green'
        },
        {
          icon: 'el-icon-view',
          name: '全部工单',
          num: 66,
          color: 'gold'
        }
      ]
    }
  },
  methods: {
    startChart () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      var option = {
        title: {
          text: '官林镇工单数据展示',
          // subtext: '纯属虚构',
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          top: 100,
          left: 'center',
          data: ['关闭工单', '处理工单', '办结工单', '暂停工单', '全部工单'],
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '工单类型',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            color: ['red', 'darkblue', 'cornflowerblue', 'green', 'gold'],
            data: [
              { value: 55, name: '关闭工单' },
              { value: 55, name: '处理工单' },
              { value: 55, name: '办结工单' },
              { value: 55, name: '暂停工单' },
              { value: 55, name: '全部工单' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.startChart()
  }
}
</script>
<style lang='stylus' scoped>
.tableBox
  height 50%
  display flex
  flex-direction column
.h40
  text-align left
  font-size 18px
  font-weight bold
  position relative
  background-color #ffffff
  padding 10px 25px
.h40:after
  content '>'
  color #000
  display inline-block
  position absolute
  top 50%
  right 25px
  transform translate(0px, -50%)
#myChart
  height 100%
  width 100%
#myChart>div
  height 100%
  width 100%
.top
  display flex
  padding 20px
  .item
    flex 1
    height 150px
    display flex
    flex-direction column
    margin-right 20px
    .titl1
      color #000
      -webkit-box-flex 0
      -ms-flex 0 0 40px
      flex 0 0 40px
      line-height 40px
      background rgba(255, 255, 255, 0.6)
      font-size 16px
      font-weight bold
    .contents
      display flex
      flex 1
      flex-direction row
      justify-content space-evenly
      align-items center
      color #fff
      font-size 44px
.bbb
  display flex
  flex-direction row
  padding 20px
  flex 1
.home
  height 100%
  display flex
  flex-direction column
</style>
