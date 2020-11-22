// creates bot object
export default class Bot {
    constructor(name, type) {
        this.name = name;
        this.type = type;

        // assign tasks to bot
        this.taskList = assignTasks();

        // total number of tasks completed
        this.completedTaskCount = 0;

        // a string of all tasks completed
        this.tasksCompleted = "";
    }

    // starts list of tasks
    async startTasks() {
        let alteredName = this.name.replace(/\s/g, '-');
        while (this.taskList.length !== 0 && this.taskList[0] !== undefined) {
            await completingTasks(this.taskList[0].eta);
            console.log(this.taskList[0]);

            // checks if task type is their type to get credit
            console.log("yuh " + this.taskList[0].hasOwnProperty('type'));
            if (!this.taskList[0].hasOwnProperty('type') || this.taskList[0].type == this.type) {
                this.completedTaskCount++;
                this.tasksCompleted = this.tasksCompleted.concat(this.taskList[0].description)
                this.tasksCompleted = this.tasksCompleted.concat(", ");
                $(`#${alteredName}-dialogue`).text(`completed ${this.taskList[0].description}!`);
            } else {
                $(`#${alteredName}-dialogue`).text(`cannot complete ${this.taskList[0].description} :( task is not my type.`);
            }

            updateLeaderboard(this)

            // removes completed task
            this.taskList.shift()
        }

        await completingTasks(2000);
        $(`#${alteredName}-dialogue`).text("finished all my tasks! assign me more :)");
    }

    // adds a new task user creates
    addTask(description, eta, type) {
        tasks[tasks.length] = {
            description: description,
            eta: eta,
            type: type
        }
    }


}

// chooses random numbers between 0 - # tasks to assign tasks to bot
export function assignTasks() {
    let taskList = [];
    for (let i = 0; i < 5; i++) {
        let idx = Math.floor(Math.random() * ((tasks.length - 1) - 0) + 0);
        taskList[i] = tasks[idx];
    }

    return taskList;
}

// setTimeout but synchronously
export function completingTasks(eta) {
    return new Promise(resolve => setTimeout(resolve, eta));
}

export function updateLeaderboard(bot) {
    let alteredName = bot.name.replace(/\s/g, '-');

    $(`#${alteredName} #tasks-completed`).text(bot.tasksCompleted.substring(0, bot.tasksCompleted.length - 2));
    $(`#${alteredName} #points`).text(" " + bot.completedTaskCount);
    $(`#${alteredName} #points-displayed`).text(bot.completedTaskCount);
}
