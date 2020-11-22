import Bot from "./bot.js";
import BotView from "./view.js"
import BotController from "./controller.js"

let model;
let view;
let controller;

// start the game when page loads
$(function() {
    model = new Bot();
    view = new BotView(model);
    controller = new BotController(model, view);
    
});