<template>
	<div class="v-nav">
		<div class="v-nav-title">GESTAOGASTOS</div>
		<div class="v-nav-itens">
			<span><router-link to="/">Home</router-link></span>
			<span>Serviços</span>
			<span>Sobre</span>
		</div>
	</div>
</template>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Baloo+2&display=swap');

	.v-nav {
		background: #1a1a1a;
		display: flex;
		align-items: center;
		padding: 8px;
	}

	.v-nav-title {
		font-family: 'Archivo Black', sans-serif;
		color: #F1F6F5;
	}

	.v-nav-itens {
		display: flex;
		flex: 1 1 auto;
		justify-content: center;
		gap: 16px;
	}

	.v-nav-itens span a{
		font-family: 'Baloo 2', cursive;
		text-decoration: none !important;
		padding: 4px 16px;
		background: #ececec;
		color: #1a1a1a;
		border-radius: 32px;
	}

	.v-nav-itens span a{
		font-family: 'Baloo 2', cursive;
		text-decoration: none !important;
		padding: 4px 16px;
		background: #ececec;
		color: #1a1a1a;
		border-radius: 32px;
	}
</style>
<script>

export default {
    name: 'VNav',
}
</script>