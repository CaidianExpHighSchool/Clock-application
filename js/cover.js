// 过渡动画
let eleCover = document.getElementById("cover");
let eleCoverTitle = document.getElementById("coverTitle");
let eleCoverAuthor = document.getElementById("coverAuthor");
let eleCoverOrigin = document.getElementById("coverOrigin");
let eleCoverImage = document.getElementById("coverImage");
let eleCoverTips = document.getElementById("coverTips");
let eleBgHook = document.getElementById("bgHook");

let coverTips = [
  // "来学习！咕！咕！咕咕咕！",
  // "新版本请多多关照！发现bug请拨打：QQ2399052066",
  // "关注纸鹿本鹿谢谢喵～",
  // "野生技协会一直陪伴着你。。只要你需要技术协助的话！",
  // "希望野生技协能帮助你们到天长地久，抱抱",
  // "7.0啦，大家都长大啦ww",
  // "我觉得生发剂不一定有用，得植发",
  // "诶…防脱洗发水用完了…",
  // "猜猜你要重新加载多少次才能再看到这条tip￣︶￣",
  // "这是一条属于7.0版本的Tips！",
  // "print(\"Hello tips7.0\");",
  // "来猜猜看这边有几个有用的信息呢~",
  // "你知道吗？其实tips全都是废话（确信",
  // "啊！要给你看什么Tip好呢…(翻",
  // "上次看到这条Tip还是在上次",
  "你只管努力，剩下的交给时间。",
  "如今我努力奔跑，不过是为了追上那个曾经被寄予厚望的自己 —— 约翰。利文斯顿",
  "要有最朴素的生活和最遥远的梦想，即使明天天寒地冻，山高水远，路远马亡。 —— 《枫》  ",
  "成功的秘诀就是每天都比别人多努力一点。",
  "别抱怨努力的苦，那是你去看世界的路。",
  "一个人为什么要努力？ 我见过最好的答案就是：因为我喜欢的东西都很贵，我想去的地方都很远，我爱的人超完美。",
  "你必须非常努力，才能看起来毫不费力。",
  "当你在荒废时间，有多少人在拼命。别在最该奋斗的日子，选择了安逸。",
  "在你想要放弃的那一刻，想想为什么当初坚持走到了这里。",
  "任何不走心的努力都是敷衍你自己。",
  "再小的努力，乘以365都很明显。",
  "专注你的梦想，做自己的英雄。",

];

function playCover(msg) {
  try {
    eleBgHook.innerHTML = bg.cur.name;
    eleCover.style.backgroundImage = `url(${bg.cur.url})`;
    eleCoverImage.style.backgroundImage = `url(${bg.cur.url})`;
    let curExam = exams[subject.current];
    eleCoverTitle.innerHTML = curExam.type;
    eleCoverAuthor.innerHTML = curExam.author;
    eleCoverOrigin.innerHTML = curExam.origin;
  } catch { }
  eleCoverTips.innerHTML = msg || coverTips[~~(Math.random() * coverTips.length)]
  eleCover.style.display = "flex";
  setTimeout(function () { eleCover.style.opacity = ""; }, 0);
  setTimeout(function () { eleCover.style.opacity = "0"; }, 2000);
  setTimeout(function () { eleCover.style.display = ""; }, 2500);
  return msg;
}