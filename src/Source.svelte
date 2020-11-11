<script lang="ts">
	export let srcSet: string,
		sizes: string,
		type: string | undefined = undefined;
</script>

<source {srcSet} {sizes} {type} />
