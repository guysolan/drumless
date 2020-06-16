const canvas = document.querySelector(".layer-1");
const canvas2 = document.querySelector(".layer-2");
const canvas3 = document.querySelector(".layer-3");

const c = canvas.getContext("2d");
const c2 = canvas2.getContext("2d");
const c3 = canvas3.getContext("2d");

const red = "#eb0d2b"; //bass
const blue = "#0e24f3"; //closed hats
const orange = "#ff7f00"; //open hats
const green = "#00c458"; //ride
const cyan = "#2ae7ca"; //hi tom
const pink = "#ee2cb1"; //mid tom
const yellow = "#ffe424"; //snare
const purple = "#540de6"; //low tom

const height = window.innerHeight;
const width = window.innerWidth;

const fatLine = 0.02 * width;
const thinLine = 0.01 * width;

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

canvas.width = width * 0.92;
canvas.height = height * 0.75;
canvas2.width = width * 0.92;
canvas2.height = height * 0.73;
canvas3.width = innerWidth * 0.92;
canvas3.height = innerHeight * 0.75;

const bassMidX = width * 0.52;
const bassMidY = height * 0.46;
const bassSize = height / 5.5;
const tomY = 0.23 * height;
const midTomX = 0.403 * width;
const hiTomX = midTomX + 0.125 * width;
const snareX = 0.54 * innerWidth;
const snareY = 0.31 * innerHeight;
const lowTomX = snareX - 0.19 * innerWidth;
const lowTomY = snareY;

const drawings = Object.create(null);

drawings.drawBass = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.fillStyle = "#ffffff";
    c.ellipse(
        bassMidX,
        bassMidY,
        bassSize,
        bassSize,
        2 * Math.PI,
        0,
        100,
        false
    );
    c.fill();
    c.stroke();
};

drawings.bassOn = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = red;
    c.fillStyle = "#ffffff";
    c.ellipse(
        bassMidX,
        bassMidY,
        bassSize,
        bassSize,
        2 * Math.PI,
        0,
        100,
        false
    );
    c.fill();
    c.stroke();
};

drawings.bassOff = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.fillStyle = "#ffffff";
    c.ellipse(
        bassMidX,
        bassMidY,
        bassSize,
        bassSize,
        2 * Math.PI,
        0,
        100,
        false
    );
    c.fill();
    c.stroke();
};

drawings.drawRideStand = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX - 0.2 * width, bassMidY + 0.17 * height);
    c.lineTo(bassMidX - 0.2 * width, bassMidY - 0.36 * height);
    c.stroke();
};

drawings.drawRide = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(0.32 * width - 0.09 * width, bassMidY - 0.3 * height);
    c.lineTo(0.32 * width + 0.09 * width, bassMidY - 0.3 * height);
    c.stroke();
};

drawings.rideOn = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = green;
    c.moveTo(0.32 * width - 0.09 * width, bassMidY - 0.3 * height);
    c.lineTo(0.32 * width + 0.09 * width, bassMidY - 0.3 * height);
    c.stroke();
};

drawings.rideOff = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(0.32 * width - 0.09 * width, bassMidY - 0.3 * height);
    c.lineTo(0.32 * width + 0.09 * width, bassMidY - 0.3 * height);
    c.stroke();
};

drawings.hatStand = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width, bassMidY + 0.17 * height);
    c.lineTo(bassMidX + 0.18 * width, bassMidY - 0.26 * height);
    c.stroke();
};

drawings.topHat = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.22 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.22 * height);
    c.stroke();
};

drawings.oHatOn = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = orange;
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.22 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.22 * height);
    c.stroke();
};

drawings.oHatOff = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.22 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.22 * height);
    c.stroke();
};

drawings.bottomHatOn = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.19 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.19 * height);
    c.stroke();
};

drawings.cHatsOn = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = blue;
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.22 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.22 * height);
    c.stroke();

    //Bottom Hat
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = blue;
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.19 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.19 * height);
    c.stroke();
};

drawings.cHatOff = function () {
    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.22 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.22 * height);
    c.stroke();

    c.beginPath();
    c.lineWidth = thinLine;
    c.strokeStyle = "#000000";
    c.moveTo(bassMidX + 0.18 * width - 0.06 * width, bassMidY - 0.19 * height);
    c.lineTo(bassMidX + 0.18 * width + 0.06 * width, bassMidY - 0.19 * height);
    c.stroke();
};

drawings.midTom = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = "#000000";
    c2.fillStyle = "#ffffff";
    c2.rect(midTomX, tomY, 0.1 * width, 0.15 * height);
    c2.stroke();
    c2.fill();
};

drawings.mTomOn = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = pink;
    c2.fillStyle = "#ffffff";
    c2.rect(midTomX, tomY, 0.1 * width, 0.15 * height);
    c2.stroke();
    c2.fill();
};

drawings.mTomOff = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = "#000000";
    c2.fillStyle = "#ffffff";
    c2.rect(midTomX, tomY, 0.1 * width, 0.15 * height);
    c2.stroke();
    c2.fill();
};

drawings.hiTom = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = "#000000";
    c2.fillStyle = "#ffffff";
    c2.rect(hiTomX, tomY, 0.085 * width, 0.115 * height);
    c2.stroke();
    c2.fill();
};

drawings.hTomOn = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = cyan;
    c2.fillStyle = "#ffffff";
    c2.rect(hiTomX, tomY, 0.085 * width, 0.115 * height);
    c2.stroke();
    c2.fill();
};

drawings.hTomOff = function () {
    c2.beginPath();
    c2.lineWidth = fatLine;
    c2.strokeStyle = "#000000";
    c2.fillStyle = "#ffffff";
    c2.rect(hiTomX, tomY, 0.085 * width, 0.115 * height);
    c2.stroke();
    c2.fill();
};

drawings.snare = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = "#000000";
    c3.fillStyle = "#ffffff";
    c3.rect(snareX, snareY, 0.12 * innerWidth, 0.09 * innerHeight);
    c3.stroke();
    c3.fill();
};

drawings.snareOn = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = yellow;
    c3.fillStyle = "#ffffff";
    c3.rect(snareX, snareY, 0.12 * innerWidth, 0.09 * innerHeight);
    c3.stroke();
    c3.fill();
};

drawings.snareOff = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = "#000000";
    c3.fillStyle = "#ffffff";
    c3.rect(snareX, snareY, 0.12 * innerWidth, 0.09 * innerHeight);
    c3.stroke();
    c3.fill();
};

drawings.lowTom = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = "#000000";
    c3.fillStyle = "#ffffff";
    c3.rect(lowTomX, lowTomY, 0.1 * innerWidth, 0.22 * innerHeight);
    c3.stroke();
    c3.fill();
};

drawings.lTomOn = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = purple;
    c3.fillStyle = "#ffffff";
    c3.rect(lowTomX, lowTomY, 0.1 * innerWidth, 0.22 * innerHeight);
    c3.stroke();
    c3.fill();
};

drawings.lTomOff = function () {
    c3.beginPath();
    c3.lineWidth = fatLine;
    c3.strokeStyle = "#000000";
    c3.fillStyle = "#ffffff";
    c3.rect(lowTomX, lowTomY, 0.1 * innerWidth, 0.22 * innerHeight);
    c3.stroke();
    c3.fill();
};

export default Object.freeze(drawings);
