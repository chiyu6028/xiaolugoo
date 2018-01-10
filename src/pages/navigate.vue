
<template>
	<div>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="home" @on-select="showItem">
            <div class="layout-logo"><img :style="{height:'40px',width:'40px'}" src="../assets/xiaolu.jpg"></div>
            
            <div class="layout-nav">
                <MenuItem name="home">
                    <Icon type="ios-navigate"></Icon>
                    主页
                </MenuItem>
                <MenuItem name="system">
                    <Icon type="ios-keypad"></Icon>
                    系统管理
                </MenuItem>
                <MenuItem name="recommend">
                    <Icon type="ios-analytics"></Icon>
                    推荐
                </MenuItem>
                <MenuItem name="me">
                    <Icon type="ios-paper"></Icon>
                    我
                </MenuItem>
            </div>
        </Menu>
    	</Header>
    </Layout>
  </div>
  <div>
    <Row>
        <Col>
          <router-view></router-view>
        </Col>
      </Row>
  </div>
  <!-- <div>{{userName}},欢迎你。当前登录次数是{{count}}</div> -->
  </div>
</template>
<script>
  export default {
  	name:'navigate',
  	data(){
  		return{
  			userName:'',
  			count:'',
  		}
  	},
  	created(){
  		//生命周期-vue创建完，调用这个函数。
  		this.getParam();
      this.showItem("home")
  	},
  	methods:{
  		getParam() {
  			//获取页面参数
  			var params = this.$route.params;
  			this.userName = params.userName;
  			//获取vuex里改变的值
  			this.count = this.$store.state.count;
  		},
      showItem(name){
        this.$router.push("/"+name);
      }
  	}
  }
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 40px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>