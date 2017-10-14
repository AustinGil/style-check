<template>
	<div class="home">
		<Styles></Styles>
		<Results></Results>
	</div>
</template>

<script>
import Styles from './Styles'
import Results from './Results'

export default {
	components: {
		Styles,
		Results
	}
}
</script>

<style>
.home {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
</style>
