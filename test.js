const { Telegraf, Markup } = require(`telegraf`)
const {
    message
} = require("telegraf/filters");
const https = require("https");
const fs = require("fs");
const bot = new Telegraf(`6428855791:AAHX6bvEczU8lgHqGhYDjylw0A9tyP9a40E`)

Telegraf.getFileLink("AgACAgQAAxUAAWWhuMlQQMR37HxI9GrX4sSHhp4IAAKqwTEbPefoUL_J4XsJc").then((link) => {
    https.get(link, (response) => {

      console.log(link)
      console.log(response)

    }
    );
});