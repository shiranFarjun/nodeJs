const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Addition of two numbers',
    builder: {
        param1: {
            describe: 'first operand',
            demandOption: true,
            type: 'number'
        },
        param2: {
            describe: 'second operand',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        return (argv.param1 + argv.param2);
    }
})


// Create sub command
yargs.command({
    command: 'sub',
    describe: 'subtraction of two numbers',
    builder: {
        param1: {
            describe: 'first operand',
            demandOption: true,
            type: 'number'
        },
        param2: {
            describe: 'second operand',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        return (argv. param1 - argv. param2);
    }
})


// Create mult command
yargs.command({
    command: 'mult',
    describe: 'multiplication of two numbers',
    builder: {
        param1: {
            describe: 'first operand',
            demandOption: true,
            type: 'number'
        },
        param2: {
            describe: 'second operand',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        return (argv. param1 * argv. param2);
    }
})


// Create pow command
yargs.command({
    command: 'pow',
    describe: 'pow of a number',
    builder: {
        params: {
            describe: 'first operand',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        return (argv.param * argv.param);
    }
})


yargs.parse();

// node app.js add --param1=1 --param2=3
// node app.js sub --param1=1 --param2=3
// node app.js mult --param1=1 --param2=3
// node app.js pow --params=3