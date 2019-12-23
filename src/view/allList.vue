/* eslint-disable semi */
<template>
  <div class="min">
    <div class="header">官林镇事件工单管理中心</div>
    <div class="middle">
      <div class="alsideBox">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="mainbox" v-show="!isEdit">
        <el-table class="tables" height="100" :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="55" :show-overflow-tooltip="flasg"></el-table-column>
          <el-table-column prop="date" label="日期" width="150"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          <el-table-column label="操作">
            <!-- fixed="right"  -->
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">退回</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">处理</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">催办</el-button>
              <el-button @click="open2" type="text" size="small">督办</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          background
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
      <div class="mainbox" v-show="isEdit">
        <el-row>
          <el-button type="primary" size="medium" @click="isEdit=false">返回上一层</el-button>
        </el-row>
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label">
              <i class="el-icon-date"></i> 基本信息
            </span>
            <div class="baseinfo">
              <div class="baseinfoItem ssss">
                <div>
                  <span>采集人区域 ：</span>
                  <span>网格3</span>
                </div>
                <div>
                  <span>姓名 ：</span>
                  <span>周信其</span>
                </div>
                <div>
                  <span>电话 ：</span>
                  <span>19986598842</span>
                </div>
                <div>
                  <span>照片 ：</span>
                  <span>
                    <img style="width:100px;height:100px;" src="../assets/image/1.jpg" alt />
                  </span>
                </div>
              </div>
              <div class="baseinfoItem ssss">
                <div>
                  <span>上报人 ：</span>
                  <span>周信其</span>
                </div>
                <div>
                  <span>问题类型 ：</span>
                  <span>治安稳定</span>
                </div>
                <div>
                  <span>上报地点 ：</span>
                  <span>江苏省无锡市宜兴市官林镇888号</span>
                </div>
                <div>
                  <span>受理时间 ：</span>
                  <span>2019-11-16 11：25：55</span>
                </div>
                <div>
                  <span>派发时间 ：</span>
                  <span>2019-11-16 11：30：55</span>
                </div>
                <div>
                  <span>当前处理 ：</span>
                  <span>官林镇交警支队</span>
                </div>
                <div>
                  <span>承诺办结 ：</span>
                  <span>一周内</span>
                </div>
              </div>
              <div class="baseinfoItem">
                <el-carousel indicator-position="none" :interval="4000" type="card">
                  <el-carousel-item v-for="item in imgArr" :key="item">
                    <img :src="item" alt />
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div
                class="baseinfoItem"
                style="color:red;padding:20px"
              >胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。胡乱搭建的违章建筑。</div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="处理流程">
            <div class="block">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :icon="activity.icon"
                  :type="activity.type"
                  :color="activity.color"
                  :size="activity.size"
                  :timestamp="activity.timestamp"
                >{{activity.content}}</el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
          <el-tab-pane label="答复信息">答复信息</el-tab-pane>
          <el-tab-pane label="地图信息">地图信息</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="foo header" style='font-size:14px'>上海试试信息产业（集团）有限公司提供技术支持</div>
  </div>
</template>

<script>
import img1 from '../assets/image/shijian1.jpg'
import img2 from '../assets/image/shijian2.jpg'
import img3 from '../assets/image/shijian3.jpg'
export default {
  methods: {
    handleClick (row) {
      console.log(row)
      this.isEdit = true
    },
    open2 () {
      this.$message({
        message: '督办成功，请稍后查看处理进度',
        type: 'success'
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    // const item = {
    //   date: '2016-05-02',
    //   name: '事件名称',
    //   province: '江苏省',
    //   city: '宜兴市',
    //   address: '江苏省无锡宜兴市官林镇888号',
    //   zip: '200800'
    // }
    return {
      flasg: true,
      isEdit: true,
      // tableData: Array(20).fill(item) 可复制多行
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '江苏省',
          city: '宜兴市',
          address: '江苏省无锡宜兴市官林镇888号'
        }
      ],
      imgArr: [img1, img2, img3],
      activities: [
        {
          content: '街道管理员 结案',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '网格员 办结',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '街道管理员  催办',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '网格员 受理',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '街道管理员 分派',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
          icon: 'el-icon-more'
        },
        {
          content: '街道管理员 受理',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-more',
          size: 'large'
        },
        {
          content: '网格员 上报',
          timestamp: '2018-04-03 20:46',
          icon: 'el-icon-more'
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
.el-timeline
  display flex
  flex-direction column
  justify-content flex-start
  align-items flex-start
  padding 50px
.ssss
  display flex
  flex-direction column
  justify-content space-evenly
  align-items self-end
  padding 0 50px
.el-carousel__arrow
  background-color #409eff
.el-carousel__arrow:hover
  background-color #409eff
.baseinfo
  display flex
  width 100%
  height 100%
  flex-direction row
  flex-wrap wrap
  justify-content space-between
  align-items center
  .baseinfoItem
    flex 0 0 50%
    height 50%
    border 1px solid #ccc
    box-shadow 0 0 5px #000
    box-sizing border-box
.el-row
  margin 20px 20px
  box-sizing border-box
  text-align left
.min
  height 100%
  min-width 100%
  .header
    height 60px
    background-color rgb(64, 158, 255)
    color #fff
    font-size 25px
    line-height 60px
  .middle
    display flex
    height calc(100% - 120px)
    .alsideBox
      display flex
      flex-direction row
      align-items center
      justify-content center
      flex 0 0 200px !important
    .mainbox
      height 100%
      width calc(100% - 200px)
      display flex
      flex-direction column
      .tables
        overflow-y scroll
    .el-menu
      width 100%
      height 100%
      border-right none !important
  .aside
    background-color rgb(84, 92, 100)
.el-main
  margin 0 !important
  padding 0 !important
.el-pagination
  padding 20px 0 !important
.cell
  text-align center
.el-tabs--border-card
  height 99%
  display flex
  flex-direction column
.el-tabs__item
  height 60px
  line-height 60px
  font-weight bold
.el-tabs--border-card>.el-tabs__content>.el-tab-pane
  height 100%
.el-tabs--border-card>.el-tabs__content
  flex 1
  padding 0 !important
</style>
