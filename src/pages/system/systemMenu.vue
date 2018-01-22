<template>
	<div>
		<Tree :treeData='treeData' :tempId='0'></Tree>
	</div>	
</template>
<script>
	import Tree from "@/components/Tree"
	export default{
		components: {
			Tree,
		},
		name:'systemMenu',
		data() {
			return {
				treeData:
						[{
						  name: '系统',
						  children: [
						    { name: '系统菜单' },
						    { name: '系统参数' },
						    { name: '系统权限' }
						  ]
						},
						{
						  name: '客户',
						  children: [
						    { name: '客户信息' },
						    { name: '客户联络' }
						  ]
						},
						{
						  name: '用户',
						  children: [
						    { name: '用户信息' },
						    { name: '黑名单' }
						  ]
						}]
			}
		},
		methods:{
			
		}
	}
</script>