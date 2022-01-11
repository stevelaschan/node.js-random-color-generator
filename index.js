//importing from ndm
import chalk from 'chalk';
import randomColor from 'randomcolor';

//declaring variables
const color = randomColor();
const userColor = process.argv[2];
const output = ` ###############################
 ###############################
 ###############################
 ####                       ####
 ####        ${color}        ####
 ####                       ####
 ###############################
 ###############################
 ###############################`;

//get color through user input
if (userColor === 'red') {
  console.log(chalk.rgb(255, 0, 0)(output));
} else if (userColor === 'green') {
  console.log(chalk.rgb(0, 255, 0)(output));
} else if (userColor === 'blue') {
  console.log(chalk.rgb(0, 0, 255)(output));
} else {
  console.log(chalk.hex(color)(output));
}
