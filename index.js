function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
};
function wrapAdjective(cool = "*") {
    return function(adjective = "special")
    {
        return `You are ${cool}${adjective}${cool}!`;
    };
}
