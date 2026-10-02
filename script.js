const PASSWORD = "2015";

function checkPassword() {

  const input = document.getElementById("passwordInput");
  const message = document.getElementById("wrongMessage");
  const card = document.querySelector(".paper-card");

  if (input.value === PASSWORD) {

    document.getElementById("passwordScreen").style.opacity = "0";
    document.getElementById("passwordScreen").style.transform = "scale(1.05)";

    setTimeout(() => {

      document.getElementById("passwordScreen").classList.add("hidden");

      const welcome = document.getElementById("welcomeScreen");

      welcome.classList.remove("hidden");

    }, 800);

  } else {

    card.classList.remove("shake");

void card.offsetWidth;

card.classList.add("shake");

message.textContent =
  "Nopeee... try again Vishal ♡";

const reaction = document.getElementById("wrongReaction");

reaction.classList.remove("show");

void reaction.offsetWidth;

reaction.classList.add("show");

input.value = "";

  }
}


function openSurprise() {

  const music = document.getElementById("bgMusic");
  music.volume = 0.4;
  music.play().catch(() => {});

  document.getElementById("welcomeScreen").style.opacity = "0";

  setTimeout(() => {

    document
      .getElementById("welcomeScreen")
      .classList.add("hidden");

    document
      .getElementById("boyfriendScreen")
      .classList.remove("hidden");

    document.getElementById("welcomeScreen").style.opacity = "1";

  }, 700);

}
function openOfficialDay() {

  document.getElementById("boyfriendScreen").style.opacity = "0";

  setTimeout(() => {

    document
      .getElementById("boyfriendScreen")
      .classList.add("hidden");

    document
      .getElementById("officialScreen")
      .classList.remove("hidden");

    document.getElementById("boyfriendScreen").style.opacity = "1";

  }, 700);

}
function goToPhotos() {
  document.getElementById("officialScreen").classList.add("hidden");
  document.getElementById("photosScreen").classList.remove("hidden");
}
function goToLetter() {

  const photos = document.getElementById("photosScreen");

  photos.style.opacity = "0";
  photos.style.transform = "scale(.97)";

  setTimeout(() => {

    photos.classList.add("hidden");

    const letter = document.getElementById("letterScreen");

    letter.style.opacity = "0";
    letter.style.transform = "scale(1.03)";

    letter.classList.remove("hidden");

    requestAnimationFrame(() => {
      letter.style.opacity = "1";
      letter.style.transform = "scale(1)";
    });

  }, 450);

}
function openLetter() {
  document.getElementById("letterScreen").classList.add("hidden");
  document.getElementById("insideLetter").classList.remove("hidden");
}
function openLetter() {

  const letterScreen = document.getElementById("letterScreen");

  letterScreen.classList.add("envelope-opening");

  setTimeout(() => {

    letterScreen.classList.add("hidden");
    letterScreen.classList.remove("envelope-opening");

    document.getElementById("insideLetter").classList.remove("hidden");

    typeLetter();

  }, 900);

}

function typeLetter() {

  const text =
`I may not know how to put everything I feel into words,
but I hope you know how much you mean to me.

Somehow, what started so simply became something
I never want to stop cherishing.

I love the little things about us —
the random conversations, the stupid jokes,
the memories we've already made and all the ones
we still have left to make.

I don't know what the future has planned for us,
but I know I want a lot more moments with you.

Thank you for being you,
and for becoming such a special part of my life.

Always,
Pari ♡`;

  const element = document.getElementById("typedLetter");

  element.textContent = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 25);
    }
  }

  type();
}
function openCherishCard(card) {
  card.classList.toggle("open");
}

function openCherish() {
  document.getElementById("insideLetter").classList.add("hidden");
  document.getElementById("cherishScreen").classList.remove("hidden");
}
function openMoments() {

  document.getElementById("cherishScreen").classList.add("hidden");

  document.getElementById("momentsScreen").classList.remove("hidden");

}
function openFuturePlans() {
  document.getElementById("momentsScreen").classList.add("hidden");
  document.getElementById("futureScreen").classList.remove("hidden");
  document.getElementById("futureScreen").style.display = "flex";
}
function openFinalSurprise() {
  const future = document.getElementById("futureScreen");
  const final = document.getElementById("finalScreen");

  future.style.display = "none";
  future.classList.add("hidden");

  final.classList.remove("hidden");
  final.style.display = "flex";
}

function replayStory() {
  location.reload();
}
