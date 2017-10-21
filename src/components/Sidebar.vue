<template>
	<div class="sidebar">
		<h1>Styles Check</h1>
		<p>Check how styles render global HTML elements and make sure nothing gets left behind.</p>

		<slot></slot>

		<div class="credits">
			<p>&lt;/&gt; with 👓 by
				<a href="https://stegosource.com">Stegosource</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 10px;
  word-wrap: break-word;
}
</style>
