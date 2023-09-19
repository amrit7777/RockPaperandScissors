const handOptions = {
  rock: "icons8-fist-67 1.png",
  paper: "icons8-hand-64 1.png",
  scissor: "17911 1.png",
};
let userScore = 0;
let compScore = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".threechoice");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickComputerHand();
  referee(hand, cpHand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissor"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissor") {
    setDecision("YOU LOSE!");
    setScore(userScore, compScore + 1);
  } else if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(userScore + 1, compScore);
    let ne = document.querySelector(".next-button");
    ne.style.display = "block";
  } else if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP!");
  } else if (userHand == "rock" && cpHand == "scissor") {
    setDecision("YOU WIN!");
    setScore(userScore + 1, compScore);
    let ne = document.querySelector(".next-button");
    ne.style.display = "block";
  } else if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(userScore, compScore + 1);
  } else if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP!");
  } else if (userHand == "scissor" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(userScore + 1, compScore);
    let ne = document.querySelector(".next-button");
    ne.style.display = "block";
  } else if (userHand == "scissor" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(userScore, compScore + 1);
  } else if (userHand == "scissor" && cpHand == "scissor") {
    setDecision("TIE UP!");
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  let hands = document.querySelector(".threechoice");
  hands.style.display = "flex";
  let w = document.querySelector(".wonthegame");
  w.style.display = "none";
  let scoreb = document.querySelector(".scoreboard");
  scoreb.style.display = "flex";
  let n = document.querySelector(".next-button");
  n.style.display = "none";
};

const setDecision = (decision) => {
  document.querySelector(".decision h2").innerText = decision;
};

const setScore = (userScore1, compScore1) => {
  userScore = userScore1;
  compScore = compScore1;
  document.querySelector(".comp-score h1").innerText = compScore;
  document.querySelector(".your-score h1").innerText = userScore;
};

const rulesDisplay = () => {
  let rules = document.querySelector(".displayrules");
  rules.style.display = "block";
};

const rulesDisappear = () => {
  let rules = document.querySelector(".displayrules");
  rules.style.display = "none";
};

const winPage = () => {
  let w = document.querySelector(".wonthegame");
  w.style.display = "block";
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  let hands = document.querySelector(".threechoice");
  hands.style.display = "none";
  let scoreb = document.querySelector(".scoreboard");
  scoreb.style.display = "none";
};
