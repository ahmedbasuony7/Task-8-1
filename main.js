



console.log('   ######## task 1   ########');


let buttonChecker =  document.getElementById('check');
let holder = document.getElementById('holder');
let welcome = document.getElementById('welcome');


buttonChecker.onclick = () => {
    let userName  =  prompt('please enter your name !');
    holder.style.cssText = "height:300px ; color:white; background-color:green;  width:400px ; font-size:23px;"
    buttonChecker.style.display="none";
    welcome.append(` hello ${userName} `);
}









