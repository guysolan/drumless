const vars = Object.create(null);

vars.hatProb = 5;
vars.bassProb = 2;
vars.snareProb = 2;

vars.bassSound = document.querySelector(".bass-sound");
vars.snareSound = document.querySelector(".snare-sound");
vars.hatSound = document.querySelector(".hihat-sound");
vars.allLocks = document.querySelectorAll(".lock");
vars.allPads = document.querySelectorAll(".pad");
vars.tempoBar = document.querySelector(".tempo-bar");
vars.randomise = document.querySelector(".randomise");
vars.tempoN = document.querySelector(".tempo-nr");
vars.play = document.querySelector(".play");
vars.popupWrapper = document.getElementById("popup-wrapper");
vars.findButton = document.getElementById("find");
vars.tryBtn = document.querySelector("beat-btn");
vars.saveBtn = document.getElementById("save");

export default Object.freeze(vars);
