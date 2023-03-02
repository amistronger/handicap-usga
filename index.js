var shell = require('shelljs');
const AdjustedGrossScoreConfig = [
    { low: -100, high: 9, max_score: 2 },
    { low: 10, high: 19, max_score: 7 },
    { low: 20, high: 29, max_score: 8 },
    { low: 30, high: 39, max_score: 9 },
    { low: 40, high: 400, max_score: 10 }
];


const SelectBestHandicapDifferentialConfig = [
    { low: 0, high: 4, lowest: 1 },
    { low: 5, high: 6, lowest: 1 },
    { low: 7, high: 8, lowest: 2 },
    { low: 9, high: 10, lowest: 3 },
    { low: 11, high: 12, lowest: 4 },
    { low: 13, high: 14, lowest: 5 },
    { low: 15, high: 16, lowest: 6 },
    { low: 17, high: 17, lowest: 7 },
    { low: 18, high: 18, lowest: 8 },
    { low: 19, high: 19, lowest: 9 },
    { low: 20, high: 20, lowest: 10 }
];
const InitialHandicapLookup = [
    { NumberOfScores: [3], LowestScores: 1, Adjustment: -2 },
    { NumberOfScores: [4], LowestScores: 1, Adjustment: -1 },
    { NumberOfScores: [5], LowestScores: 1, Adjustment: 0 },
    { NumberOfScores: [6], LowestScores: 2, Adjustment: -1 },
    { NumberOfScores: [7, 8], LowestScores: 2, Adjustment: 0 },
    { NumberOfScores: [9, 10, 11], LowestScores: 3, Adjustment: 0 },
    { NumberOfScores: [12, 13, 14], LowestScores: 4, Adjustment: 0 },
    { NumberOfScores: [15, 16], LowestScores: 5, Adjustment: 0 },
    { NumberOfScores: [17, 18], LowestScores: 6, Adjustment: 0 },
    { NumberOfScores: [19], LowestScores: 7, Adjustment: 0 },
    { NumberOfScores: [20], LowestScores: 8, Adjustment: 0 },
];
async function async_shell_exec(command) {

  return new Promise(resolve => 
  		shell.exec(command, { silent: true }, function(code, stdout, stderr) {
		  resolve(stdout);
		})
	  )
}
function get_number_round(number) {
    let obj = {
        LowestScores: null,
        Adjustment: null
    };
    for (let u of InitialHandicapLookup) {
        if (u.NumberOfScores.includes(number)) {
            obj.LowestScores = u.LowestScores;
            obj.Adjustment = u.Adjustment;
        }
    }
    return obj;
}
async function caculator(){
	return await async_shell_exec(`./ab`);
}

module.exports = {
	get_number_round,
	caculator,

}