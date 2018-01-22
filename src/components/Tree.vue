<template>
	<li>
		<div v-for="menuData in treeData">
			<div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType"> {{menuData.name}}
		     	<span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
		    </div>
		    <ul v-show="open" v-if="isFolder">
		    	<Tree class="item" :treeData="menuData.children"></Tree>
		    	<li class="add" @click="addChild">+</li>
		    </ul>
		</div >
	    <!-- <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType"> {{treeData.name}}
	      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
	    </div>
	    <ul v-show="open" v-if="isFolder">
	      <Tree class="item" v-for="item in treeData.children" :treeData="item"></Tree>
	      <li class="add" @click="addChild">+</li>
	    </ul> -->
	 </li>
</template>
<script>

	export default{
		name: 'Tree',
		props:['treeData'],
		data: function () {
	    return {
	      open: false
	    }
	  },
	  computed: {
	    isFolder: function () {
	      return this.treeData &&
	        this.treeData.length
	    }
	  },
	  methods: {
	    toggle: function () {
	      if (this.isFolder) {
	        this.open = !this.open
	      }
	    },
	    changeType: function () {
	      if (!this.isFolder) {
	        Vue.set(this.treeData, 'children', [])
	        this.addChild()
	        this.open = true
	      }
	    },
	    addChild: function () {
	      this.treeData.children.push({
	        name: 'new stuff'
	      })
	    }
	  }
	}
	
</script>
<style>
/* body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
} */
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
li {
  list-style-type: none;	
}
</style>