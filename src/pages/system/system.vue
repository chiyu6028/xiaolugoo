<template>
	<div>
  	<Layout :style="{height: '500px'}">
      <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" accordion theme="light" width="auto" :open-names="['system']" @on-select="showMenu">
              <Submenu name="system">
                  <template slot="title">
                      <Icon type="ios-navigate"></Icon>
                      系统
                  </template>
                  <MenuItem name="systemMenu">系统菜单</MenuItem>
                  <MenuItem name="systemParams">系统参数</MenuItem>
                  <MenuItem name="systemAuthor">系统权限</MenuItem>
              </Submenu>
              <Submenu name="2">
                  <template slot="title">
                      <Icon type="ios-keypad"></Icon>
                      客户
                  </template>
                  <MenuItem name="2-1">客户信息</MenuItem>
                  <MenuItem name="2-2">客户联络</MenuItem>
              </Submenu>
              <Submenu name="3">
                  <template slot="title">
                      <Icon type="ios-analytics"></Icon>
                      用户
                  </template>
                  <MenuItem name="3-1">用户信息</MenuItem>
                  <MenuItem name="3-2">黑名单</MenuItem>
              </Submenu>
          </Menu>
      </Sider>
	    <Layout :style="{padding: '0 10px 10px'}">
          <Breadcrumb :style="{margin: '10px 0'}">
              <BreadcrumbItem v-for="item in breadcrumb">{{item}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '5px', minHeight: '280px', background: '#fff'}">
              <router-view></router-view>
          </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
	export default{
		name:'system',
		data() {
			return {
        breadcrumb:[]
			}
		},
    created(){
      this.showMenu("systemMenu");
    },
    beforeRouteUpdate (to, from, next){
      //修改面包屑导航内容
      this.breadcrumb = [];
      to.matched.forEach((item,index)=>{
        if (item.name != undefined) {
          this.breadcrumb.push(item.name);
        }
      })
      next();
    },
		methods:{
      showMenu(name) {
        this.$router.push("/system/"+name);
      }
		}
	}
</script>