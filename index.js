function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// wrapAdjective function
function wrapAdjective(symbol = '*') {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}


// Example usage of wrapAdjective
const encouragingPromptFunction = wrapAdjective(); // Here, we're not providing any symbol, so it will default to "*"
console.log(encouragingPromptFunction("a dedicated programmer")); // Outputs: "You are *a dedicated programmer*"
