const quotes = [
   {quote : "그럼 제가 해지는 것을 보게 해달라고 한 것은요? 한번 한 질문은 절대로 그냥 넘어가는 법이 없는 어린왕자가 다시 물었다.",
   author : "생택쥐페리"},
   {quote : "강력한 이유는 강력한 행동을 낳는다.",
   author : "윌리엄 셰익스피어"},
   {quote : "공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.",
   author : "빌 게이츠"},
   {quote : "행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.",
   author : "장 폴 리히터"},
   {quote : "멈추지 말고 한 가지 목표에 매진하라. 그것이 성공의 비결이다.",
   author : "안나 파블로바"},
   {quote : "최선을 다하고 있다라고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
   author : "윈스턴 처칠"},
   {quote : "나는 자신이 사는 곳을 자랑스럽게 여기는 사람을 보길 원한다. 나는 그 지역 또한 그가 살고있다는 사실에 자랑스러워하는 모습을 보기 원한다",
   author : "에이브러햄 링컨"},
   {quote : "나는 오로지 단 하나, 단 하나의 존재로 남아있으며, 그것은 바로 광대다. 광대라는 존재는 나를 그 어떤 정치인보다 더 높은 수준으로 올려놓는다.",
   author : "찰리 채플린"},
   {quote : "할 수 있는 일을 해낸다면, 우리 자신이 가장 놀라게 될 것이다.",
   author : "토마스 에디슨"},
   {quote : "어디를 가든지 마음을 다해 가라.",
   author : "공자"},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote + "\n";
author.innerText = todayQuote.author;