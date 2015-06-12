var Name = "Votes";
var Version = "1.0";
var choice1 = {name:"dunderboy", points:0};
var choice2 = {name:"tobi", points:0};

function onTwitchMessage(message, sender) {
    var command = new Command(message);
    if (command.isCommand()) {        
        if (command.getCommand() == "vote") {
            if (command.getAmountOfArgs() >= 1) {
                if (command.getArgument(0) == "status") {
                    if (choice1["points"] > choice2["points"]) {
                        Twitch.sendMessage(choice1["name"] + " has the most points");
                    } else if (choice2["points"] > choice1["points"]) {
                        Twitch.sendMessage(choice2["name"] + " has the most points")
                    } else {
                        Twitch.sendMessage("It is due rigth now!")
                    }
                    Twitch.sendMessage(choice1["name"] + " has " + choice1["points"] + " points.");
                    Twitch.sendMessage(choice2["name"] + " has " + choice2["points"] + " points.");
                } else if (command.getArgument(0) == choice1["name"] || command.getArgument(0) == choice2["name"]) {
                    if (command.getArgument(0) == choice1["name"]) {
                        choice1["points"] += 1;
                    } else {
                        choice2["points"] += 1;
                    }
                    Twitch.sendMessage(command.getArgument(0) + " got one point");
                } else {
                    Twitch.sendMessage("No command found!");
                }
            } else {
                Twitch.sendMessage("Insufficient amount of arguments. Expected 1, got " + command.getAmountOfArgs());
            }
        }
    }
}