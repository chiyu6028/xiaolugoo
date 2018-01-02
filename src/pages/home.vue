
<template>
	<div>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"><img :style="{height:'40px',width:'40px'}" src="../assets/xiaolu.jpg"></div>
            
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </MenuItem>
            </div>
        </Menu>
    	</Header>
    	<Layout :style="{height: '500px'}">
	      <Sider hide-trigger :style="{background: '#fff'}">
	          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
	              <Submenu name="1">
	                  <template slot="title">
	                      <Icon type="ios-navigate"></Icon>
	                      Item 1
	                  </template>
	                  <MenuItem name="1-1">Option 1</MenuItem>
	                  <MenuItem name="1-2">Option 2</MenuItem>
	                  <MenuItem name="1-3">Option 3</MenuItem>
	              </Submenu>
	              <Submenu name="2">
	                  <template slot="title">
	                      <Icon type="ios-keypad"></Icon>
	                      Item 2
	                  </template>
	                  <MenuItem name="2-1">Option 1</MenuItem>
	                  <MenuItem name="2-2">Option 2</MenuItem>
	              </Submenu>
	              <Submenu name="3">
	                  <template slot="title">
	                      <Icon type="ios-analytics"></Icon>
	                      Item 3
	                  </template>
	                  <MenuItem name="3-1">Option 1</MenuItem>
	                  <MenuItem name="3-2">Option 2</MenuItem>
	              </Submenu>
	          </Menu>
	      </Sider>
		    <Layout :style="{padding: '0 10px 10px'}">
		        <Breadcrumb :style="{margin: '10px 0'}">
		            <BreadcrumbItem>Home</BreadcrumbItem>
		            <BreadcrumbItem>Components</BreadcrumbItem>
		            <BreadcrumbItem>Layout</BreadcrumbItem>
		        </Breadcrumb>
		        <Content :style="{padding: '5px', minHeight: '280px', background: '#fff'}">
		            这是内容
		        </Content>
		    </Layout>
      </Layout>
    </Layout>
  </div>
  <div>{{userName}},欢迎你。当前登录次数是{{count}}</div>
  </div>
</template>
<script>
  export default {
  	name:'home',
  	data(){
  		return{
  			userName:'',
  			count:'',
  		}
  	},
  	created(){
  		//生命周期-vue创建完，调用这个函数。
  		this.getParam();
  	},
  	methods:{
  		getParam(){
  			//获取页面参数
  			var params = this.$route.params;
  			this.userName = params.userName;
  			//获取vuex里改变的值
  			this.count = this.$store.state.count;
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