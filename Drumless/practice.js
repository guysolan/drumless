function play(event) {
  const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  key.classList.add("playing");

  if (!sound) {
    return;
  }
  sound.type = "audio/wav";
  sound.currentTime = 0;
  sound.play();

  //Allows the sound to be replayed before duration has sounded

  if (`${event.keyCode}` === `90`) {
    key.classList.add("class", "ride");
  } else if (`${event.keyCode}` === `88`) {
    key.classList.add("class", "open-hats");
  } else if (`${event.keyCode}` === `67`) {
    key.classList.add("class", "closed-hats");
  } else if (`${event.keyCode}` === `86`) {
    key.classList.add("class", "snare");
  } else if (`${event.keyCode}` === `32`) {
    key.classList.add("class", "bass");
  } else if (`${event.keyCode}` === `66`) {
    key.classList.add("class", "hi-tom");
  } else if (`${event.keyCode}` === `78`) {
    key.classList.add("class", "mid-tom");
  } else if (`${event.keyCode}` === `77`) {
    key.classList.add("class", "low-tom");
  } else {
    return;
  }
}

function removeTransition(event) {
  //skip if element not a transform
  if (event.propertyName !== "transform") {
    return;
  }

  this.classList.remove(
    "playing",
    "ride",
    "open-hats",
    "closed-hats",
    "snare",
    "bass",
    "hi-tom",
    "mid-tom",
    "low-tom"
  );
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", play);
