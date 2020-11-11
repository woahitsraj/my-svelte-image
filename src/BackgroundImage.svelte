<script lang="ts">
	import { absolutePositioningStyles } from './utils';

	export let backgroundImage: string = 'none',
		backgroundColor: string = 'transparent',
		backgroundSize: string = 'cover',
		showImage: boolean = true,
		fadeInDuration: number = 500;
</script>

<div
	style={`
      background-image: ${backgroundImage};
      background-color: ${backgroundColor};
      background-size: ${backgroundSize};
      opacity: ${showImage ? 0 : 1};
      transition: ${fadeInDuration > 0 ? `opacity ${fadeInDuration}ms ${fadeInDuration}ms` : 'none'};
      ${absolutePositioningStyles}
  `} />
