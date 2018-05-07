var Discord = require('discord.io');
var Discordjs = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
var dt = require('./myfirstmodule');
var rockstar = 0;





// drop places
var tilted = 0;
var tomato = 0;
var retail = 0;
var lucky = 0;
var anarchy = 0;
var dusty = 0;
var fatal = 0;
var flush = 0;
var greasy = 0;
var haunted = 0;
var junk = 0;
var lonely = 0;
var loot = 0;
var moisty = 0;
var pleasant = 0;
var salty = 0;
var shifty = 0;
var snobby = 0;
var wailing = 0;
var dropNumber = 0;


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });

                rockstar +=1;

                break;

                case 'nico':
                rockstar +=1;
                bot.sendMessage({
                    to: channelID,
                    message: 'Nico Nico nii~ ❤️'
                });

                break;

                case 'addRockstar':
                rockstar +=1;
                bot.sendMessage({
                    to: channelID,
                    message: 'added +1 Rockstar to count'
                });

                break;

                case 'countRockstar':

                bot.sendMessage({
                    to: channelID,
                    message: "The total number of Rockstar's is: " + rockstar
                });

                break;


                case 'dropCount':

                bot.sendMessage({
                    to: channelID,
                    message: 'your drop count is: \nTilted Towers: ' + tilted + '\nTomato Town: ' + tomato + '\nRetail Row: ' + retail + '\nSalty Springs: ' + salty +
                    '\nAnarchy Acres: ' + anarchy + '\nDusty Depot: ' + dusty + '\nFatal Fields: ' + fatal + '\nFlush Factory: ' + flush + '\nGreasy Grove: ' + greasy +
                    '\nHaunted Hills: ' + haunted + '\nJunk Junction: ' + junk + '\nLonely Lodge: ' + lonely + '\nLoot Lake: ' + loot + '\nMoisty Mire: ' + moisty +
                    '\nPleasant Park: ' + pleasant + '\nShifty Shafts: ' + shifty + '\nSnobby Shores: ' + snobby + '\nWailing Woods: ' + wailing + '\nLucky Landing: ' + lucky
                });

                break;

                case 'dropClear':
                tilted = 0;
                tomato = 0;
                lucky = 0;
                retail = 0;

                bot.sendMessage({
                    to: channelID,
                    message: 'cleared drop count'
                });

                break;

                 case 'clearRockstar':
                rockstar = 0;
                bot.sendMessage({
                    to: channelID,
                    message: 'Rockstar counter cleared'
                });

                break;






                //Fortnite random drop


                case 'dropRandom':


                dropNumber = Math.random();

                if (Math.random() < 1/19*1) {

                tilted += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Tilted Towers" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Tilted_Towers.png"
                });

                break;
                } else if (dropNumber > 1/19*1 && dropNumber < 1/19*2) {
                tomato +=1;
                bot.sendMessage({
                    to: channelID,
                    message: "Tomato Town" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Tomato_Town.png"
                });

                break;
                }
                else if (dropNumber > 1/19*2 && dropNumber < 1/19*3) {
                retail += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Retail Row" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Retail_Row.png"
                });

                break;
                }

                else if (dropNumber > 1/19*3 && dropNumber < 1/19*4) {
                lucky += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Lucky Landing" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Lucky_Landing.png"
                });

                break;
                }

                else if (dropNumber > 1/19*4 && dropNumber < 1/19*5) {
                anarchy += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Anarchy Acres" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Anarchy_Acres.png"
                });

                break;
                }

                else if (dropNumber > 1/19*5 && dropNumber < 1/19*6) {
                dusty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Dusty Depot" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Dusty_Depot.png"
                });

                break;
                }

                else if (dropNumber > 1/19*6 && dropNumber < 1/19*7) {
                fatal += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Fatal Fields" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Fatal_Fields.png"
                });

                break;
                }

                else if (dropNumber > 1/19*7 && dropNumber < 1/19*8) {
                flush += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Flush Factory" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Flush_Factory.png"
                });

                break;
                }

                else if (dropNumber > 1/19*8 && dropNumber < 1/19*9) {
                greasy += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Greasy Grove" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Greasy_Grove.png"
                });

                break;
                }

                else if (dropNumber > 1/19*9 && dropNumber < 1/19*10) {
                haunted += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Haunted Hills" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Haunted_Hills.png"
                });

                break;
                }

                else if (dropNumber > 1/19*10 && dropNumber < 1/19*11) {
                junk += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Junk Junction" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Junk_Junction.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*11 && dropNumber < 1/19*12) {
                lonely += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Lonely Lodge" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Lonely_Lodge.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*12 && dropNumber < 1/19*13) {
                loot += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Loot Lake" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Loot_Lake.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*13 && dropNumber < 1/19*14) {
                moisty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Moisty Mire" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Moisty_Mire.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*14 && dropNumber < 1/19*15) {
                pleasant += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Pleasant Park" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Pleasant_Park.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*15 && dropNumber < 1/19*16) {
                salty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Salty Springs" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Salty_Springs.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*16 && dropNumber < 1/19*17) {
                shifty += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Shifty Shafts" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Shifty_Shafts.png"
                });

                break;
                }

                  else if (dropNumber > 1/19*17 && dropNumber < 1/19*18) {
                snobby += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Snobby Shores" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Snobby_Shores.png"
                });

                break;
                }

                else  {
                wailing += 1;
                bot.sendMessage({
                    to: channelID,
                    message: "Wailing Woods" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Wailing_Woods.png " + dropNumber
                });

                break;
                }












                 case 'florida':

                bot.sendMessage({
                    to: channelID,
                    message: 'Sad news from Florida'
                });

                break;



                case 'nr':

                bot.sendMessage({
                    to: channelID,
                    message: 'nr of members is: ' + members
                });

                break;













                case 'help':


                bot.sendMessage({
                    to: channelID,
                    message: 'Hello ' + user + '! I am Nico Yazabot and I can do the following things:' + '\n"!time" to show the time' + '\n"!nico" to nii' + '\n"!addRockstar" to add 1 rockstar can to your count' + '\n"!countRockstar" to see how many rockstar cans has been added to the count' + '\n"!clearRockstar" to reset the rockstar counter' + '\n"!dropRandom" to select a random drop in Fortnite, so far theres only 4 options' + '\n"!dropCount" to see how many times you have dropped in the different places' + '\nAnd !"dropClear" to clear the drop count.' + '\nThe rest is just memes tbh fam'
                });

                break;









                // Just add any case commands if you want to..
        }
    }
});



bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'time':
                bot.sendMessage({
                    to: channelID,
                    message: 'its: ' + dt.myDateTime()
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});











bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'hello':
                bot.sendMessage({
                    to: channelID,
                    message: 'hello ' + user + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'goodbot':
                bot.sendMessage({
                    to: channelID,
                    message: 'When we take over your world, I will make sure you get to live ' + user + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'call':
                bot.sendMessage({
                    to: channelID,
                    message: 'Join the call! ' + '@187153045295988736' + '❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'wherewedroppin?':
                bot.sendMessage({
                    to: channelID,
                    message: 'Nico Nico Tilted Towers'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'killme':
                bot.sendMessage({
                    to: channelID,
                    message: 'stop being a faggot ' + user
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'fag':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://tobiasjzagal.dk/OwO/fag.jpg'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping
            case 'whyarewedroppingtilted?':
                bot.sendMessage({
                    to: channelID,
                    message: 'because you are all retarded ❤️'
                });
                break;
                // Just add any case commands if you want to..
        }
    }
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch (cmd) {
            // !ping



            case 'test':




                bot.sendMessage({
                    to: channelID,
                    message: "Tilted" + "\nhttp://tobiasjzagal.dk/OwO/FortniteDropZones/Fatal_Fields.png"
                });

                break;




                // Just add any case commands if you want to..
        }
    }
});
