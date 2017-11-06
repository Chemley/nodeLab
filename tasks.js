// the array of tasks.
var tasks = [
  "Go fishing",
  "Take a vacation",
  "Do the laundry",
  "Mop the floor",
  "Clean the bathroom",
  "Eat cake"
];
// to get the random number from the array. * remember to use [] becasue task is an array.
var task = tasks[Math.floor(Math.random() * tasks.length)];

// "releases" the variable from the file.
module.exports.tasks = tasks;
module.exports.task = task;
