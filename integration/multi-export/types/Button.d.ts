/// <reference types="svelte" />
import { SvelteComponent } from "svelte";

export interface ButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["button"]> {
  /**
   * @default "button"
   */
  type?: string;

  /**
   * @default false
   */
  primary?: boolean;
}

export default class Button extends SvelteComponent<ButtonProps, { click: WindowEventMap["click"] }, { default: {} }> {}
