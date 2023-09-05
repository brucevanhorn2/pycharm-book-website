// shout out to Joseph at https://codepen.io/josephwong2004/pen/ExgoKde?editors=1010
// thanks dude!
const carouselText = [
  { text: "make your eyes glaze over.", color: "limegreen" },
  { text: "cause your head to explode.", color: "limegreen" },
  { text: "make you want to switch to Ruby.", color: "limegreen" },
  { text: "lead to a broken heart.", color: "limegreen" },
  { text: "compel you to become a long haul trucker.", color: "limegreen" },
  { text: "make you cry in your energy drink.", color: "limegreen" },
  { text: "make you feel like a total poser just because you don't use emacs.", color: "limegreen" }
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 50) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(50);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
