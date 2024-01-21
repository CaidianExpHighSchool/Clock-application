console.groupCollapsed("\n%c  %c蔡甸实验高中考试时钟 ExamClock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("项目仓库：https://github.com/CaidianExpHighSchool/ExamClock");
console.groupEnd();
/* 
 * 适用于蔡甸区实验高级中学的考试科目列表
 */

let specialDate = {
  gone22: parseInt((Date.now() - new Date(2024,1,23)) / 864E5),
  cee24: parseInt((new Date(2024,1,23) - Date.now()) / 864E5),
}


exams["2022-05-14"] = {
  type: "临时考练",
  mainSlogan: `${specialDate.cee22}天后 峰顶相会`,
  schedule() {
    $("考练", today.date, "22:30", "23:30");
  }
};

exams[230] = {
  type: "高一时间表",
  author: "钟圣涛",
  origin: "",
  // mainSlogan: `距离期末考试${specialDate.cee24}天`,
  mainSlogan: `你只管努力，剩下的交给时间。`,
  earlyAdmit: 2,
  schedule() {
    $("早读", today.date, "06:55", "07:35");
    $("第1节", today.date, "07:45", "08:25");
    $("跑操/大课间", today.date, "08:25", "08:50");
    $("第2节", today.date, "08:50", "09:30");
    $("第3节", today.date, "09:40", "10:20");
    $("第4节", today.date, "10:30", "11:10");
    $("第5节", today.date, "11:20", "12:00");
    $("午休", today.date, "12:50", "13:50");
    $("第6节", today.date, "14:00", "14:40");
    $("第7节", today.date, "14:50", "15:30");
    $("眼保健操", today.date, "15:30", "15:35");
    $("第8节", today.date, "15:45", "16:30");
    $("第9节", today.date, "16:40", "17:20");
    $("晚自习1", today.date, "17:50", "19:00");
    $("晚自习2", today.date, "19:10", "20:00");
    $("晚自习3", today.date, "20:10", "20:50");
    $("晚自习4", today.date, "20:55", "21:25");
    }
  }
// 下面是物生地考试
exams[231] = {
  type: "高一物生地",
  author: "钟圣涛",
  origin: "",
  rollSlogan: ["请考生注意：时钟仅供参考，请以考场实际铃声为准！"],
  schedule() {
    // 物生地先考地理再考生物
    $("自习", "2024-01-21", "17:50", "21:25");
  }
  
}
// 下面是物化政考试
exams[232] = {
  type: "高一物化政",
  author: "钟圣涛",
  origin: "",
  rollSlogan: ["请考生注意：时钟仅供参考，请以考场实际铃声为准！"],
  schedule() {
    // 物化政先考化学再考政治
    $("自习", "2024-01-21", "17:50", "21:25");
  }
}
// 下面是物化生考试
exams[233] = {
  type: "高一物化生",
  author: "钟圣涛",
  origin: "",
  rollSlogan: ["请考生注意：时钟仅供参考，请以考场实际铃声为准！"],
  schedule() {
    // 物化生先考化学再考生物
    $("自习", "2024-01-21", "17:50", "21:25");
  }
}
// 下面史政地考试
exams[234] = {
  type: "高一史政地",
  author: "钟圣涛",
  origin: "",
  rollSlogan: ["请考生注意：时钟仅供参考，请以考场实际铃声为准！"],
  schedule() {
    // 史政地先考地理再考政治
    $("自习", "2024-01-21", "17:50", "21:25");
  }
}
