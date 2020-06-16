import drawings from "./drawings.js";
import kc from "./keycheck.js";

document.addEventListener("DOMContentLoaded", function () {
    drawings.midTom();

    document.addEventListener("keydown", kc.mTomKey);

    document.addEventListener("keyup", drawings.mTomOff);

    drawings.hiTom();

    document.addEventListener("keydown", kc.hTomKey);

    document.addEventListener("keyup", drawings.hTomOff);
});
