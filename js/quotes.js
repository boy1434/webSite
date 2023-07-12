const quotes = [
    {
        quote: "사랑은 눈으로 보지 않고 마음으로 보는거지.",
        author: "윌리엄 셰익스피어"
    },
    {
        quote: "인생에서 성공하려거든 끈기를 죽마고우로, 경험을 현명한 조언자로, 신중을 형님으로, 희망을 수호신으로 삼으라.",
        author: "조지프 애디슨"
    },
    {
        quote: "꿈을 기록하는 것이 나의 목표였던 적은 없다, 꿈을 실현하는 것이 나의 목표이다.",
        author: "만 레이"
    },
    {
        quote: "희망만을 먹고 사는 자는 굶어 죽을 것이다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "나로 말할 것 같으면 긍정주의자인데, 다른 사람이 돼 봤자 별 쓸모가 없는 것 같기 때문이다.",
        author: "윈스턴 처칠"
    },
    {
        quote: "자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
        author: "넬슨 만델라"
    },
    {
        quote: "배움은 우연히 얻어지는 것이 아니라 열성을 다해 갈구하고 부지런히 집중해야 얻을 수 있는 것이다.",
        author: "애비게일 애덤스"
    },
    {
        quote: "배움이란 일생동안 알고 있었던 것을 어느 날 갑자기 완전히 새로운 방식으로 이해하는 것이다",
        author: "도리스 레싱"
    },
    {
        quote: "여러분을 더욱 높이 올려줄 사람만을 가까이 하세요.",
        author: "오프라 윈프리"
    },
    {
        quote: "고통없이 얻어지는 것은 없다.",
        author: "--"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;