import drawings from "./drawings.js";
import kc from "./keycheck.js";

document.addEventListener("DOMContentLoaded", function () {
    drawings.snare();

    document.addEventListener("keydown", kc.snareKey);

    document.addEventListener("keyup", drawings.snareOff);

    drawings.lowTom();

    document.addEventListener("keydown", kc.lTomKey);

    document.addEventListener("keyup", drawings.lTomOff);
});
