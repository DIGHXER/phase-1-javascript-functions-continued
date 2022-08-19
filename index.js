// code your solution here

function saturdayFun(activity = `roller-skate`){

    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork();


function wrapAdjective(narration = "special"){
    const innerFunction = function (etiNini  = "*"){
        return `You are ${narration}${etiNini }${narration}!`
    }
    return innerFunction
}