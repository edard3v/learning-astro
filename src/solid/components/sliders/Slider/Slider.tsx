import "keen-slider/keen-slider.min.css";
import css from "./Slider.module.css";
import { cls } from "@utils/cls";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import { For, onCleanup, onMount } from "solid-js";

export default function Slider(props: Props) {
  let slider_ref: HTMLDivElement | undefined;
  let slider: KeenSliderInstance | undefined;

  onMount(() => {
    if (slider_ref) {
      slider = new KeenSlider(slider_ref, {
        loop: true,
        slides: { perView: 5 },
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
      <For each={props.data}>
        {(item) => (
          <img
            id={item.id}
            class={cls(["keen-slider__slide", css.slide])}
            src={item.img}
            alt={item.title}
          />
        )}
      </For>

      <button class={css.prev} onclick={() => slider?.prev()}>
        🠘
      </button>
      <button class={css.next} onclick={() => slider?.next()}>
        🠚
      </button>
    </div>
  );
}

type Props = {
  data: Data[];
};

type Data = { id: string; title: string; img: string };
