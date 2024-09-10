const info = { 
    name: "Rajib", 
    testScore: 45,  
    schoolGrade: 25, 
    isFFamily: true  
};

function calculateFinalScore(info) {
    if(typeof info !== "object"){
        return "Invalid Input"
    }

    let totalMarks = info.testScore + info.schoolGrade;
    if(info.isFFamily){
        totalMarks = totalMarks + (totalMarks * 0.2)
    }


    if( info.isFFamily && totalMarks >= 70){
        return "You Gor The  job"
    }
    else if( info.isFFamily && totalMarks < 70){
        return "bad Luck Next Time"
    }
    else if( !info.isFFamily && totalMarks > 70){
        return "You pass"
    }
    else if( !info.isFFamily && totalMarks < 70){
        return "Goo offline and sleep now"
    }
        return "You Fail"
    
}

console.log(calculateFinalScore(info));
