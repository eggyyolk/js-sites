<template>
  <nav class="filter-nav">
		<button @click="updateFilter('all')" :class="{ active: current === 'all' }">View All</button>
		<button @click="updateFilter('completed')" :class="{ active: current === 'completed' }">Completed</button>
		<button @click="updateFilter('ongoing')" :class="{ active: current === 'ongoing' }">Ongoing</button>
  </nav>
</template>

<script>
export default {
	props: ['current'],
	methods: {
		updateFilter(by) {
			this.$emit('filterChange', by)
		}
	}
}
</script>

<style>
 .filter-nav button{
	 cursor: pointer;
	 background: none;
	 border: none;
	 color: #808080;
	 outline: none;
	 font-size: 12px;
	 text-transform: uppercase;
	 margin-right: 12px;
	 letter-spacing: 1px;
	 font-weight: bold;
 }
 .filter-nav button.active {
	 color: #383838;
 }
</style>
