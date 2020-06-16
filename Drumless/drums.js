import drawings from "./drawings.js";
import kc from "./keycheck.js";

document.addEventListener("DOMContentLoaded", function () {
    drawings.drawBass();

    document.addEventListener("keydown", kc.bassKey);

    document.addEventListener("keyup", drawings.bassOff);

    drawings.drawRideStand();

    drawings.drawRide();

    document.addEventListener("keydown", kc.rideKey);

    drawings.rideOff();

    document.addEventListener("keyup", drawings.rideOff);

    drawings.hatStand();

    drawings.topHat();

    document.addEventListener("keydown", kc.oHatKey);

    document.addEventListener("keyup", drawings.oHatOff());

    drawings.bottomHatOn();

    document.addEventListener("keydown", kc.cHatKey);

    drawings.cHatOff();

    document.addEventListener("keyup", drawings.cHatOff);
});
