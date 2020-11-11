<script lang="ts">
	import { isSsr } from './utils';

	export let width: number, height: number;
	function universalBtoa(str: string) {
		if (isSsr) {
			return Buffer.from(str.toString(), 'binary').toString('base64');
		} else {
			return window.btoa(str);
		}
	}
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"></svg>`;
</script>

<img
	style={`
      display: block;
      width: ${width ? `${width}px` : '100%'};
  `}
	alt="sizer"
	src={`data:image/svg+xml;base64,${universalBtoa(svg)}`}
	role="presentation" />
