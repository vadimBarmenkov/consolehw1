#!/administrator/bin/env node

const arguments = process.argv.slice(2).map(n => n);

const date = new Date();

switch (arguments.length){
    case 0:
        console.log(date);
        break;
    case 1:
        switch (arguments[0]){

            case "-y":
            case "--year":
                console.log(date.getFullYear());
                break;
            case "-m":
            case "--month":
                console.log(date.getMonth());
                break;
            case "-d":
            case "--date":
                console.log(date.getDay());
                break;
        }
        break;
    case 3:
        switch (arguments[0]){
            case "add":
                switch (arguments[1]){

                    case "-y":
                    case "--year":
                        console.log(date.getFullYear() + Number(arguments[2]));
                        break;
                    case "-m":
                    case "--month":
                        console.log(date.getMonth() + Number(arguments[2]));
                        break;
                    case "-d":
                    case "--date":
                        console.log(date.getDay() + Number(arguments[2]));
                        break;
                }

                break;
            case "sub":
                switch (arguments[1]){

                    case "-y":
                    case "--year":
                        console.log(date.getFullYear() - Number(arguments[2]));
                        break;
                    case "-m":
                    case "--month":
                        console.log(date.getMonth() - Number(arguments[2]));
                        break;
                    case "-d":
                    case "--date":
                        console.log(date.getDay() - Number(arguments[2]));
                        break;
                }
                break;
        }

        break;
}
