import funs from "./functional.js";
import vars from "./constants.js";

document.addEventListener("DOMContentLoaded", function () {
    let inProg = null;
    let bpm = 100;
    let beat = 0;
    let mixHats;
    let mixBass;
    let mixSnare;

    //Locking functionality and visuals
    funs.lockLocks();

    //Randomly generate a beat
    function makeRandom() {
        //Find and load a saved beat
        async function getBeats() {
            const response = await fetch("/beat");
            let beats = await response.json();

            beats.sort(function (a, b) {
                return b.timeStamp - a.timeStamp;
            });

            //Make display all the data on the html
            beats.forEach(function (beat) {
                const root = document.createElement("div");
                const nameDiv = document.createElement("div");
                const dateDiv = document.createElement("div");
                const beatBtn = document.createElement("button");

                root.classList.add("beatLib");
                beatBtn.classList.add("beat-btn");
                beatBtn.innerText = "Try it";

                if (beat.beatName !== "") {
                    nameDiv.textContent = `Beat Name: ${beat.beatName}`;
                } else {
                    nameDiv.textContent = `Beat Name: No Name`;
                }

                //Convert the timestamp into a date for the beat
                const dateString = new Date(
                    beat.timeStamp
                ).toLocaleDateString();
                dateDiv.textContent = `Date Created: ${dateString}`;

                root.append(nameDiv, dateDiv, beatBtn);

                const popup = document.getElementById("popup-main");
                popup.append(root);

                beatBtn.addEventListener("click", loadBeat);

                //Load the saved beat with all beats locked
                function loadBeat() {
                    funs.unLockAll();
                    mixBass = beat.mixBass;
                    mixHats = beat.mixHats;
                    mixSnare = beat.mixSnare;
                    setTimeout(makeRandom(), 1000);
                    funs.lockAll();
                    setTimeout(closePopup(), 1000);
                }
            });
        }

        getBeats();

        //If pad is unlocked (id === null), make element inactive
        vars.allPads.forEach(function (pad) {
            if (pad.getAttribute("id") !== null) {
                return;
            } else {
                pad.classList.remove("active");
                pad.removeAttribute("id", "active");
            }
        });

        //Animate the pulsing pads
        vars.allPads.forEach(function (pad) {
            pad.addEventListener("animationend", function () {
                pad.style.animation = "";
            });
        });

        //Randomly generate the beat mixes
        mixHats = Array.from({ length: 8 }, () =>
            Math.floor(Math.random() * vars.hatProb)
        );
        mixBass = Array.from({ length: 8 }, () =>
            Math.floor(Math.random() * vars.bassProb)
        );
        mixSnare = Array.from({ length: 8 }, () =>
            Math.floor(Math.random() * vars.snareProb)
        );

        //Log the active pads so they can be locked off
        let snareLockOff = [];
        let bassLockOff = [];
        let hatsLockOff = [];

        vars.allPads.forEach(function (pad) {
            if (pad.getAttribute("id") === null) {
                return;
            }
            if (pad.classList.contains("active")) {
                return;
            }
            if (pad.classList.contains("bass-pad")) {
                funs.getPadNs(bassLockOff, pad);
            } else if (pad.classList.contains("hihat-pad")) {
                funs.getPadNs(hatsLockOff, pad);
            } else if (pad.classList.contains("snare-pad")) {
                funs.getPadNs(snareLockOff, pad);
            } else {
                return;
            }
        });

        funs.offSplice(snareLockOff, mixSnare);

        funs.offSplice(bassLockOff, mixBass);

        funs.offSplice(hatsLockOff, mixHats);

        //Log the active pads so they can be locked on

        let snareLockOn = [];
        let bassLockOn = [];
        let hatsLockOn = [];

        vars.allPads.forEach(function (pad) {
            if (pad.getAttribute("id") === null) {
                return;
            }
            if (pad.classList.contains("active")) {
                if (pad.classList.contains("bass-pad")) {
                    funs.getPadNs(bassLockOn, pad);
                } else if (pad.classList.contains("hihat-pad")) {
                    funs.getPadNs(hatsLockOn, pad);
                } else if (pad.classList.contains("snare-pad")) {
                    funs.getPadNs(snareLockOn, pad);
                } else {
                    return;
                }
            } else {
                return;
            }
        });

        funs.onSplice(snareLockOn, mixSnare);

        funs.onSplice(bassLockOn, mixBass);

        funs.onSplice(hatsLockOn, mixHats);

        //Take all snare hits which aren't 0 to be active
        let snareHits = mixSnare.reduce(function (a, e, i) {
            if (e > 0) {
                a.push(i);
            }
            return a;
        }, []);

        let bassHits = mixBass.reduce(function (a, e, i) {
            if (e > 0) {
                a.push(i);
            }
            return a;
        }, []);

        let hatsHits = mixHats.reduce(function (a, e, i) {
            if (e > 0) {
                a.push(i);
            }
            return a;
        }, []);

        //Add "active" the hits
        funs.makeActive(snareHits, "snare-pad");
        funs.makeActive(hatsHits, "hihat-pad");
        funs.makeActive(bassHits, "bass-pad");

        function loop() {
            let steps = beat % 8; // when it gets back to 8 it becomes 0.
            beat++;
            //pulses
            const activeBars = document.querySelectorAll(`.b${steps}`);
            activeBars.forEach(function (bar) {
                bar.style.animation = `playTrack 0.25s alternate 2`;
            });
            //Get and play the sounds
            funs.playSound(mixSnare, steps, vars.snareSound);
            funs.playSound(mixBass, steps, vars.bassSound);
            funs.playSound(mixHats, steps, vars.hatSound);
        }

        //Find Button
        function openPopup() {
            vars.popupWrapper.style.display = "block";
        }
        function closePopup() {
            vars.popupWrapper.style.display = "none";
        }

        vars.findButton.addEventListener("click", openPopup);

        const closeButton = document.getElementById("close-popup");
        closeButton.addEventListener("click", closePopup);

        //Play Button
        const playBut = document.querySelector(".play");

        function start() {
            if (!inProg) {
                playBut.innerText = "Pause";
                inProg = "playing";
                const interval = (30 / bpm) * 1000;
                inProg = setInterval(function () {
                    loop();
                }, interval);
            } else {
                playBut.innerText = "Play";
                clearInterval(inProg);
                inProg = null;
            }
        }

        vars.play.onclick = function () {
            start();
        };

        //Tempo Bar
        vars.tempoBar.addEventListener("input", changeTempo, updateTempo);

        //Update the text under the tempo bar
        function changeTempo(e) {
            start();
            bpm = e.target.value;
            vars.tempoN.innerText = e.target.value;
            start();
        }

        //Pausing the beat to use the tempo bar
        function updateTempo() {
            clearInterval(inProg);
            inProg = null;
            if (!inProg) {
            }
        }
    }

    makeRandom();

    const saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", saveBeat);

    async function saveBeat() {
        funs.lockAll();
        let beatName = prompt("Name your beat");
        if (beatName === null) {
            funs.unLockAll();
        } else {
            if (beatName === "") {
                beatName = "Nameless";
            }
            const beatSend = { beatName, mixBass, mixSnare, mixHats };
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(beatSend),
            };
            const response = await fetch("/beat", options);
            const beatBack = await response.json();
            location.reload();
        }
    }

    vars.randomise.onclick = function () {
        makeRandom();
    };
});
