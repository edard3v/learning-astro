import css from "./TopAnimeIsland.module.css";
import { onCleanup, onMount } from "solid-js";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import Slider from "@solid/components/sliders/Slider/Slider";

export default function TopAnimeIsland() {
  let sliderRef: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  onMount(() => {
    if (sliderRef) {
      slider = new KeenSlider(sliderRef, {
        loop: true,
        slides: { perView: 2 },
        created: (_slider) => {}, // se ejecuta luego de estar montado el slider
        slideChanged: (_slider) => {}, // se ejecuta cada que cambia diapo
      });
    }
  });

  onCleanup(() => {
    slider?.destroy();
  });

  return (
    <div class={css.top}>
      <Slider />
    </div>
  );
}
