import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type RestProps = SvelteHTMLElements["a"];

export interface InputProps extends RestProps {
  [key: `data-${string}`]: any;
}

export default class Input extends SvelteComponentTyped<InputProps, Record<string, any>, { default: {} }> {}
