#!/administrator/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .option('param1', {
        alias: 'p1',
        type: 'boolean',
        description: 'описание param1'
    })
    .option('parems2', {
        alias: 'p2',
        description: 'param 2 created'
    })
    .argv

switch (argv.p1){
    case "y":
        console.log(1);
        break;
    case "m":
        console.log(2);
        break;
    case "d":
        console.log(3);
        break;
}

console.log(argv);