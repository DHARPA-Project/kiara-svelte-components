<script lang="ts">
	export let title: string;
	let expanded = false;
</script>

<section data-accordion {...$$restProps}>
	<div data-accordion-item>
		<button
			type="button"
			aria-expanded={expanded}
			on:click={() => {
				expanded = !expanded;
			}}
		>
			<h2>{title}</h2>
			<span class:rotate-180={expanded}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
					></path>
				</svg>
			</span>
		</button>
		<div role="region" hidden={!expanded}>
			<slot />
		</div>
	</div>
</section>

<style lang="postcss">
	section[data-accordion] {
		@apply w-full flex items-center space-x-4 py-2 px-4;
	}

	div[data-accordion-item] {
		@apply w-full;
	}
	button {
		@apply w-full inline-flex justify-between items-center;
	}

	h2 {
		@apply text-left flex-grow my-2;
	}

	span {
		@apply fill-current w-3 transition-transform duration-[100ms];
	}
</style>
