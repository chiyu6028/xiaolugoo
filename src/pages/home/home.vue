<template>
	<div>
		this is  home  父组件向子组件传参
		<Tree :treeData='treeData' :tempId='0'></Tree>
	</div>	
</template>
<script>
	
	import Tree from "@/components/Tree"

	export default{
		components: {
			Tree,
		},
		name:'home',
		data() {
			return {
				treeData:[
									{id:'1',menuName:'系统',pid:'0',porder:0,isFolder:true},
									{id:'2',menuName:'客户',pid:'0',porder:1,isFolder:false},
									{id:'3',menuName:'员工',pid:'0',porder:2,isFolder:false},
									{id:'4',menuName:'系统菜单',pid:'1',porder:0,isFolder:true},
									{id:'5',menuName:'系统参数',pid:'1',porder:1,isFolder:false},
									{id:'6',menuName:'系统权限',pid:'1',porder:2,isFolder:false},
									{id:'7',menuName:'菜单新增',pid:'4',porder:0,isFolder:false}
								]
								/*{
								  name: 'My Tree',
								  children: [
								    { name: 'hello' },
								    { name: 'wat' },
								    {
								      name: 'child folder',
								      children: [
								        {
								          name: 'child folder',
								          children: [
								            { name: 'hello' },
								            { name: 'wat' }
								          ]
								        },
								        { name: 'hello' },
								        { name: 'wat' },
								        {
								          name: 'child folder',
								          children: [
								            { name: 'hello' },
								            { name: 'wat' }
								          ]
								        }
								      ]
								    }
								  ]
								}*/
			}
		},
		methods:{
			
		}
	}
</script>