//code your solution here

function superbowlWin(records){
    const superbowlWinResults = records.find(record => record.result === "W") // function(record, record.result === "W") // this says the  record results is a win "W"
    if(superbowlWinResults) {
        return superbowlWinResults.year // only have to return one year not all of them. // already defined the argument by using find() to find what year a win was recorded
    }  else {
            return undefined 
    } // returns undefined if there are no wins 
}