import Bot from "./bot.js";

export default class BotView {
    constructor(model) {
        this.model = model;

        // keeps track of all the bots ever created
        this.botArr = [];
    }
        
    createBot(name, type) {
        let bot = new Bot(name, type);
        addBots(bot, this.botArr);
        renderLeaderboard(this.botArr);
        bot.startTasks();

        let hexCode = intToRGB(hash(name));
        let alteredName = name.replace(/\s/g, '-');

        let botIcon = `
        <div class="bot-icon-div">
            <div id="${alteredName}-dialogue" class="box">hi! my name is ${name}. thanks for creating me. i'm starting tasks...</div>
            <i id="${alteredName}" class="fas fa-robot bot-icon" style="color: #${hexCode}"></i>
            <p class="bot-icon-name">${name}</p>
            <p class="subtitle is-6"><em>${type}</em></p>
        </div>`

        $('.bot-space').append(botIcon);
        return bot;

    }
}

// adds newly created bot to bot list
export function addBots(bot, botArr) {
    botArr.push(bot);
}

// renders robots in leaderboard
export function renderLeaderboard(botArr) {
    $('.bot-stats').empty();
    let sortedBots = botArr.sort(compare);

    for (let i = 0; i < sortedBots.length; i++) {
        let hexCode = intToRGB(hash(sortedBots[i].name))
        let alteredName = sortedBots[i].name.replace(/\s/g, '-');
        
        let botStats = `
            <div id="${alteredName}" class="leaderboard-slot">
                <div class="box leaderboard-count"><p class="leaderboard-number" style="color: #${hexCode}"><span id="points-displayed">${sortedBots[i].completedTaskCount}</span></p></div>
                <div class="leaderboard-content"> 
                    <h1 id="leaderboard-name" class="title is-5" style="color: #${hexCode}">${sortedBots[i].name}</h1>
                    <p><strong>tasks completed:</strong> <span id="tasks-completed">${sortedBots[i].tasksCompleted.substring(0, sortedBots[i].tasksCompleted.length - 2)}<span></p>
                    <p><strong>total points:</strong><span id="points"> ${sortedBots[i].completedTaskCount}<span></p>
                </div>
            </div>
        `
        $('.bot-stats').append(botStats);
    }
    
}

// convert string to hex code for color
export function hash(str) { 
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

export function intToRGB(i){
    var c = (i & 0x00FFFFFF).toString(16).toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

// sorts array based on number of tasks completed
export function compare(bot1, bot2) {
    let taskCount1 = bot1.completedTaskCount;
    let taskCount2 = bot2.completedTaskCount;
  
    let comparison = 0;
    if (taskCount1 > taskCount2) {
      comparison = -1;
    } else if (taskCount1 < taskCount2) {
      comparison = 1;
    }
    return comparison;
  }
  


