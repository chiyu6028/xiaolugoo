<template>
	<ul>
		<li v-for="item in treeData">
			<a v-if="item.pid == tempId"><span  v-if="isFolder"></span>{{item.menuName}}+</a>
			<!-- <Tree :treeData='elseData' :tempId='item.id'></Tree> -->
		</li>
	</ul>
	<!-- <li>
	    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType"> {{treeData.name}}
	      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
	    </div>
	    <ul v-show="open" v-if="isFolder">
	      <Tree class="item" v-for="item in treeData.children" :treeData="item"></Tree>
	      <li class="add" @click="addChild">+</li>
	    </ul>
	  </li> -->
</template>
<script>

	export default{
		name: 'Tree',
		props:['treeData','tempId'],
		data: function () {
	    return {
	      open: false,
	      elseData:[
	      	{id:'4',menuName:'系统菜单',pid:'1',porder:0,isFolder:true},
					{id:'5',menuName:'系统参数',pid:'1',porder:1,isFolder:false},
					{id:'6',menuName:'系统权限',pid:'1',porder:2,isFolder:false},
	      ]
	    }
	  },
	  computed: {
	    /*isFolder: function () {
	      console.log(111111111);
	      return true;
	    }*/
	  },
	  beforeCreate: function () {
	  	console.log('test');
		},
	  methods: {
	    toggle: function () {

	    },
	    changeType: function () {

	    },
	    addChild: function () {
	      console.log(this.treeData);
	    }
	  }
	}
	
</script>
<style>
	body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>