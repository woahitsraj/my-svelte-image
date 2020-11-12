<script lang="ts">
	import { onMount } from 'svelte';
	import Placeholder from './BackgroundImage.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import Sizer from './Sizer.svelte';
	import Source from './Source.svelte';
	import {
		absolutePositioningStyles,
		imageAddStrategy,
		imageShowStrategy,
	} from './utils';
	export let aspectRatio: number = 1,
		base64: string | undefined = undefined,
		height: number | undefined = undefined,
		sizes: string,
		src: string,
		srcSet: string,
		width: number,
		alt: string,
		title: string,
		webpSrcSet: string | undefined = undefined,
		bgColor: string | undefined = undefined,
		fadeInDuration: number | undefined = undefined,
		lazyLoad: boolean = true;
	let loaded = false;
	let nativeLoading = false;
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});

	function load(img) {
		img.onload = () => {
			loaded = true;
		};
	}

	$: showImage = imageShowStrategy({
		lazyLoad,
		loaded,
	});
	height = height || width / aspectRatio;
</script>

<IntersectionObserver once let:intersecting>
	<Placeholder
		{showImage}
		backgroundImage={base64 ? `url(${base64})` : undefined}
		backgroundColor={bgColor} />
	<Sizer {width} {height} />
	{#if imageAddStrategy({ lazyLoad, intersecting, loaded, nativeLoading })}
		<picture
			style={`opacity: ${showImage ? 1 : 0};transition: ${!fadeInDuration || fadeInDuration > 0 ? `opacity ${fadeInDuration || 500}ms` : undefined};${absolutePositioningStyles}`}>
			<Source srcSet={webpSrcSet} {sizes} type="image/webp" />
			<Source {srcSet} {sizes} />
			<img
				{src}
				{alt}
				{title}
				loading="lazy"
				use:load
				style={`width: 100%;`} />
		</picture>
	{/if}
	<noscript>
		<picture>
			<Source srcSet={webpSrcSet} {sizes} type="image/webp" />
			<Source {srcSet} {sizes} />
			<img {src} {alt} {title} />
		</picture>
	</noscript>
</IntersectionObserver>