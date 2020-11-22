import { renderLeaderboard } from "./view.js";

export default class BotController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    
        $('#create-button').on('click', function() {
            $('.form-holder').empty();
            populateForm();
            $('.create-a-bot').css({'display': 'block'});
        })

        $('#submit-bot').on('click', function() {

            let botLength = $('.bot-name').length;
            
            // iterates through different inputs for the various bots, creates them, pushes them to an array
            for (let i = 0; i < botLength; i++) {
                let botName = $('.bot-name').eq(i).val();

                // determines if bot name is only letters 
                let onlyLetNum = nameFormat(botName);
                
                if (botName == "") {
                    alert("please enter a bot name! it cannot be empty.");
                } else if (!onlyLetNum) {
                } else {
                    let botType = $( '.bot-type option:selected' ).eq(i).text();
                    view.createBot(botName, botType);
                }

                if (i == botLength - 1 && botName !== "" && onlyLetNum == true) {
                    $('.create-a-bot').css({'display': 'none'});
                }
            }
            $('.form-holder').empty();
            populateForm();
        })

        $('#add-button').on('click', function() {
            populateForm();
        })

        // refreshes leaderboard on press
        $('#refresh-leaderboard').on('click', function() {
            renderLeaderboard(view.botArr);
        })

        $('#create-task').on('click', function() {
            $('.create-a-task').css({'display': 'block'});
        })

        $('#submit-task').on('click', function() {
            let botNameToAssign = $('.task-bot-name').val();
            let alteredName = botNameToAssign.replace(/\s/g, '-');
            let description = $('.task-description').val();
            let eta = parseInt($('.task-eta').val());
            let type = $('.task-type option:selected').text();

            let newTask = {
                description: description,
                eta: eta,
                type: type
            };

            if (type == "") {
                delete newTask['type'];
            }

            // filters through all bots to find one that matches name
            let assignArr = view.botArr.filter(bot => bot.name == botNameToAssign);
            if (assignArr.length == 0) {
                alert('bot does not exist :( please choose another bot!');
            } else if (description == "") {
                alert('description cannot be empty!')
            } else if (eta == "" || typeof(eta) !== 'number') {
                alert('eta cannot be empty & must be a number!')
            } else {
                for (let i = 0; i < assignArr.length; i++) {
                    let prevLength = assignArr[i].taskList.length;
                    assignArr[i].taskList.push(newTask);
                    $(`#${alteredName}-dialogue`).text(`starting tasks...`);
                    if (prevLength == 0) {
                        assignArr[i].startTasks();
                    }
                }
                $('.create-a-task').css({'display': 'none'});
                $('#create-a-task input').val('');
                $('#task-type').val('');
            }

        })

        $('.delete').on('click', function() {
            let element = event.target.parentElement.id;
            $(`.${element}`).css({'display': 'none'});
        })


    }
}

// checks to make sure input name is only letters and numbers
export function nameFormat(name) { 
    if (name.includes("!") || name.includes(".") || name.includes("&") || name.includes("?") || name.includes("*") || name.includes("#")) {
        alert('please only input letters or numbers!');
        return false;
      } else {
        return true; 
    }
}

// rerenders new form
export function populateForm() {
    let form = `
            <div class="field">
                    <label class="label">bot name</label>
                    <div class="control">
                        <input class="input bot-name" type="text" placeholder="bot name">
                    </div>
                </div>
                <div class="field">
                    <label class="label">bot type</label>
                    <div class="control">
                        <div class="select bot-type">
                            <select>
                                <option>unipedal</option>
                                <option>bipedal</option>
                                <option>quadrupedal</option>
                                <option>arachnid</option>
                                <option>radial</option>
                                <option>aeronautical</option>
                            </select>
                        </div>                    
                    </div>
                </div>`
            $('.form-holder').append(form);
}