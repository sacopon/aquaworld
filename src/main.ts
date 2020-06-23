import * as PIXI from "pixi.js";
import {
  disableTouchEvent,
  disableOuterCanvasTouchEvent,
} from "application/utils/disable_touch_event";
import { getWindowSizeAsync } from "application/utils/get_window_size_async";

async function mainProgram() {
  disableOuterCanvasTouchEvent();
  const size = await getWindowSizeAsync();
  console.info(size);
  const app = new PIXI.Application({
    width: size.width,
    height: size.height,
    transparent: false,
  });
  disableTouchEvent(app.view);
}

window.addEventListener("DOMContentLoaded", mainProgram);
