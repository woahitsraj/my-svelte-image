<script lang="ts">
  import { onMount } from "svelte";
  import Placeholder from "./BackgroundImage.svelte";
  import IntersectionObserver from "./IntersectionObserver.svelte";
  import Sizer from "./Sizer.svelte";
  import Source from "./Source.svelte";
  import { imageAddStrategy, imageShowStrategy } from "./utils";
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
    lazyLoad: boolean = true,
    className: string = "";
  let loaded = false;
  let nativeLoading = false;
  onMount(() => {
    if ("loading" in HTMLImageElement.prototype) {
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

<style>
  picture {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>

<IntersectionObserver once let:intersecting {className}>
  <Placeholder
    {showImage}
    backgroundImage={base64 ? `url(${base64})` : undefined}
    backgroundColor={bgColor} />
  <Sizer {width} {height} />
  {#if imageAddStrategy({ lazyLoad, intersecting, loaded, nativeLoading })}
    <picture
      style={`opacity: ${showImage ? 1 : 0};transition: ${`opacity ${fadeInDuration || 500}ms`}`}>
      <Source srcSet={webpSrcSet} {sizes} type="image/webp" />
      <Source {srcSet} {sizes} />
      <img {src} {alt} {title} loading={lazyLoad ? 'lazy' : 'eager'} use:load />
    </picture>
  {/if}
  <noscript>
    <picture>
      <Source srcSet={webpSrcSet} {sizes} type="image/webp" />
      <Source {srcSet} {sizes} />
      <img {src} {alt} {title} loading={lazyLoad ? 'lazy' : 'eager'} />
    </picture>
  </noscript>
</IntersectionObserver>
