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
				treeData:
						{
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
						}
			}
		},
		methods:{
			
		}
	}
</script>