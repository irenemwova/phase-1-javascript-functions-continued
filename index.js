function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective = "special") {
    return function(symbol = "*") {
        return `You are ${symbol}${adjective}${symbol}!`;
    }
}

// Example usage of wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); // Outputs: "You are !!!a dedicated programmer!!!"
