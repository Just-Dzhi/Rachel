import figlet from 'figlet';

const pkg = await Bun.file('./package.json').json();

console.log(figlet.textSync(
    pkg.name,
    {
        font: 'Basic',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
    }
));

console.log(`Author: ${pkg.author}`);
console.log(`Version: ${pkg.version}`);
console.log('Links:');
console.log('> MVRLY youtube channel: https://www.youtube.com/@mvrlysound');
console.log('> G github: https://github.com/Just-Dzhi');
console.log('________________________________________');

/* fonts (idk why i place it here ¯\_(ツ)_/¯)

font: 'Small Keyboard'
 ____ ____ ____ ____ ____ ____ 
||r |||a |||c |||h |||e |||l ||
||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|

font: 'Letters'
                      hh             lll
rr rr    aa aa   cccc hh        eee  lll
rrr  r  aa aaa cc     hhhhhh  ee   e lll
rr     aa  aaa cc     hh   hh eeeee  lll
rr      aaa aa  ccccc hh   hh  eeeee lll

font: 'Soft'
                                          
                     ,--.            ,--. 
,--.--. ,--,--. ,---.|  ,---.  ,---. |  | 
|  .--'' ,-.  || .--'|  .-.  || .-. :|  | 
|  |   \ '-'  |\ `--.|  | |  |\   --.|  | 
`--'    `--`--' `---'`--' `--' `----'`--' 

font: 'Basic'
d8888b.  .d8b.   .o88b. db   db d88888b db      
88  `8D d8' `8b d8P  Y8 88   88 88'     88      
88oobY' 88ooo88 8P      88ooo88 88ooooo 88      
88`8b   88~~~88 8b      88~~~88 88~~~~~ 88      
88 `88. 88   88 Y8b  d8 88   88 88.     88booo. 
88   YD YP   YP  `Y88P' YP   YP Y88888P Y88888P 

font: 'Bloody'
 ██▀███   ▄▄▄       ▄████▄   ██░ ██ ▓█████  ██▓    
▓██ ▒ ██▒▒████▄    ▒██▀ ▀█  ▓██░ ██▒▓█   ▀ ▓██▒    
▓██ ░▄█ ▒▒██  ▀█▄  ▒▓█    ▄ ▒██▀▀██░▒███   ▒██░    
▒██▀▀█▄  ░██▄▄▄▄██ ▒▓▓▄ ▄██▒░▓█ ░██ ▒▓█  ▄ ▒██░    
░██▓ ▒██▒ ▓█   ▓██▒▒ ▓███▀ ░░▓█▒░██▓░▒████▒░██████▒
░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ░▒ ▒  ░ ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░
  ░▒ ░ ▒░  ▒   ▒▒ ░  ░  ▒    ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░
  ░░   ░   ░   ▒   ░         ░  ░░ ░   ░     ░ ░   
   ░           ░  ░░ ░       ░  ░  ░   ░  ░    ░  ░
                   ░                               

and more...
*/