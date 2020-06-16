import drawings from "./drawings.js";

const kc = Object.create(null);

kc.bassKey = function (e) {
    if (e.keyCode === 32) {
        drawings.bassOn();
    }
};

kc.rideKey = function (e) {
    if (e.keyCode === 90) {
        drawings.rideOn();
    }
};

kc.oHatKey = function (e) {
    if (e.keyCode === 88) {
        drawings.oHatOn();
    }
};

kc.cHatKey = function (e) {
    if (e.keyCode === 67) {
        drawings.cHatsOn();
    }
};

kc.mTomKey = function (e) {
    if (e.keyCode === 78) {
        drawings.mTomOn();
    }
};

kc.hTomKey = function (e) {
    if (e.keyCode === 66) {
        drawings.hTomOn();
    }
};

kc.snareKey = function (e) {
    if (e.keyCode === 86) {
        drawings.snareOn();
    }
};

kc.lTomKey = function (e) {
    if (e.keyCode === 77) {
        drawings.lTomOn();
    }
};

export default Object.freeze(kc);
