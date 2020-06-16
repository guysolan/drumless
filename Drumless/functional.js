import vars from "./constants.js";

const funs = Object.create(null);

//Replace elements from mixInst with indexes contained in instOn to be 1
funs.onSplice = function (instOn, mixInst) {
    instOn.forEach(function (i) {
        mixInst.splice(i, 1, 1);
    });
};

//Replace elements from mixInst with indexes contained in instOn to be 0
funs.offSplice = function (instOff, mixInst) {
    instOff.forEach(function (i) {
        mixInst.splice(i, 1, 0);
    });
};

//Play a beat on those indexes which are not 0
funs.playSound = function (mixInst, steps, instSound) {
    if (mixInst[steps] > 0) {
        instSound.type = "audio/wav";
        //Ensure sound can be replayed before the end of the audio sample
        instSound.currentTime = 0;
        instSound.play();
    }
};

//If padN = a number in instHits, make it active
funs.makeActive = function (instHits, instPad) {
    instHits.forEach(function (hit) {
        let onPads = document.querySelectorAll(`.b${hit}`);
        onPads.forEach(function (onPad) {
            if (onPad.classList.contains(instPad)) {
                onPad.classList.add("active");
            }
        });
    });
};

//Get the pad numbers from classlists for those locked
funs.getPadNs = function (instLockOff, pad) {
    instLockOff.push(parseInt(pad.classList.toString().replace(/\D/g, "")));
};

//Lock the pad and parent on click for animation and functionality
funs.lockLocks = function () {
    vars.allLocks.forEach(function (lock) {
        lock.addEventListener("click", function () {
            if (lock.getAttribute("id") === null) {
                lock.setAttribute("id", "locked");
                lock.parentElement.setAttribute("id", "locked");
            } else {
                lock.removeAttribute("id", "locked");
                lock.parentElement.removeAttribute("id", "locked");
            }
        });
        //Add class to enable hover faded lock hover animation
        lock.addEventListener("mouseenter", function () {
            lock.setAttribute("class", "maybe");
        });
        lock.addEventListener("mouseleave", function () {
            lock.removeAttribute("class", "maybe");
            lock.setAttribute("class", "lock");
        });
    });
};

//Lock all pads and buttons
funs.lockAll = function () {
    vars.allLocks.forEach(function (lock) {
        if (lock.getAttribute("id") !== "locked") {
            lock.setAttribute("id", "locked");
            lock.parentElement.setAttribute("id", "locked");
        } else {
            return;
        }
    });
};

//Unlock all pads and buttons
funs.unLockAll = function () {
    vars.allLocks.forEach(function (lock) {
        if (lock.getAttribute("id") === "locked") {
            lock.removeAttribute("id", "locked");
            lock.parentElement.removeAttribute("id", "locked");
        } else {
            return;
        }
    });
};

export default Object.freeze(funs);
