var shell = require('shelljs');
async function async_shell_exec(command) {

  return new Promise(resolve => 
  		shell.exec(command, { silent: true }, function(code, stdout, stderr) {
		  resolve(stdout);
		})
	  )
}

(async function () {
	let x = await async_shell_exec("./ab");
	console.log(x)
})().then(() => {
    // process.exit();
});  