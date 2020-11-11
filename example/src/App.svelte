<script lang="ts">
  import { DatoCMSImage } from "../../src/components/index";
  const images = [
    {
      aspectRatio: 0.8271604938271605,
      base64:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBIWERYLDhgQFRUNFREODxYjIx8ZGBYWFhUaHyslGh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHA4QHS8mFig7LzUvLy81Ly8vLy87Ly8vLy8vLy8vLy8vLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAFAMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABQYCBAcB/8QAIhAAAgEDAgcAAAAAAAAAAAAAAAIBBBESAwUGEyFBQlFh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEDAP/EABgRAQEBAQEAAAAAAAAAAAAAAAABESEC/9oADAMBAAIRAxEAPwDKvq0hLGrQJzdTKCt7zujI6LHlNi2cPJnTK0+iepkLepdJskQDxujWAE1zispY1ddJntJd9hjCmWPgBbTSbRdgAczf/9k=",
      height: 972,
      sizes: "(max-width: 804px) 100vw, 804px",
      src: "https://www.datocms-assets.com/36000/1602873208-image-16.png",
      srcSet:
        "https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.25 201w,https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.5 402w,https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.75 603w,https://www.datocms-assets.com/36000/1602873208-image-16.png 804w",
      width: 804,
      alt: "Hero Image",
      title: null,
      webpSrcSet:
        "https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.25&fm=webp 201w,https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.5&fm=webp 402w,https://www.datocms-assets.com/36000/1602873208-image-16.png?dpr=0.75&fm=webp 603w,https://www.datocms-assets.com/36000/1602873208-image-16.png?fm=webp 804w",
    },
    {
      aspectRatio: 0.8189300411522634,
      base64:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoSCAgNDRAKDRgQBw0NDxcNFgcQFx4ZGBYTFhUmHysjGh0oHRUWJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLBQUFEAUFEC8cFhwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAFAMBIgACEQEDEQH/xAAZAAADAAMAAAAAAAAAAAAAAAAABQYBAwT/xAAdEAACAgIDAQAAAAAAAAAAAAAAAQIDBCEFETES/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALPMvVa2zRVmwlH04eatkqn0IMbkJxk/pgVE74/T2AgfIb9AB1nUq2D7JrLxlS30ZABZO9qT2YAAP//Z",
      height: 972,
      sizes: "(max-width: 796px) 100vw, 796px",
      src:
        "https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&w=1280",
      srcSet:
        "https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.25&w=1280 199w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.5&w=1280 398w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.75&w=1280 597w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&w=1280 796w",
      width: 796,
      alt: "Stairs",
      title: null,
      webpSrcSet:
        "https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.25&fm=webp&w=1280 199w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.5&fm=webp&w=1280 398w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&dpr=0.75&fm=webp&w=1280 597w,https://www.datocms-assets.com/36000/1602873213-image-17.png?auto=format&fm=webp&w=1280 796w",
    },
    {
      aspectRatio: 0.8,
      base64:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLChYVGQ4QDRYVDhcNFg0OFx8ZGBYfFhUdHysjGh0oHSEiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDw0OHBARFy8mIx87Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIABgAEwMBIgACEQEDEQH/xAAYAAEAAwEAAAAAAAAAAAAAAAAABAUGAf/EACEQAAICAgEEAwAAAAAAAAAAAAABAgMFEQQxMkFRBhIU/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAIRMQH/2gAMAwEAAhEDEQA/ANF8k5cZ0PTKHE86EG02Tsnx7bK2mmUdOOvhZtJkyxbTfuh7OlMqL9eQZqbzI4yEY9CLRiYSjv6oAegeKhvtAAB//9k=",
      height: 500,
      sizes: "(max-width: 400px) 100vw, 400px",
      src:
        "https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&w=400",
      srcSet:
        "https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.25&w=400 100w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.5&w=400 200w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.75&w=400 300w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&w=400 400w",
      width: 400,
      alt: null,
      title: null,
      webpSrcSet:
        "https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.25&fm=webp&w=400 100w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.5&fm=webp&w=400 200w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&dpr=0.75&fm=webp&w=400 300w,https://www.datocms-assets.com/36000/1603154699-rectangle-166.png?auto=format&fm=webp&w=400 400w",
    },
  ];
</script>

<style>
  :global(body) {
    padding: 0 !important;
    margin: 0 !important;
  }
  .wrapper {
    padding-top: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .image-wrapper {
    padding-top: 1rem;
  }
</style>

<div class="wrapper">
  {#each images as imageParams}
    <div class="image-wrapper">
      <DatoCMSImage {...imageParams} />
    </div>
  {/each}
</div>
