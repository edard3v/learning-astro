import "keen-slider/keen-slider.min.css";
import css from "./Slider.module.css";
import { cls } from "@utils/cls";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import { onCleanup, onMount } from "solid-js";

export default function Slider() {
  let slider_ref: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  onMount(() => {
    if (slider_ref) {
      slider = new KeenSlider(slider_ref, {
        loop: true,
        slides: { perView: 1 },
        created: (_slider) => {}, // se ejecuta luego de estar montado el slider
        slideChanged: (_slider) => {}, // se ejecuta cada que cambia diapo
      });
    }
  });

  onCleanup(() => {
    slider?.destroy();
  });
  return (
    <div ref={(el) => (slider_ref = el!)} class={cls(["keen-slider", css.slider])}>
      <div class="keen-slider__slide">Slide 1</div>
      <div class="keen-slider__slide">Slide 2</div>
      <div class="keen-slider__slide">Slide 3</div>

      <button class={css.prev} onclick={() => slider?.prev()}>
        🠘
      </button>
      <button class={css.next} onclick={() => slider?.next()}>
        🠚
      </button>
    </div>
  );
}
