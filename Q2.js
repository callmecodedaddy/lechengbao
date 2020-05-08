//该算法为Pseudo encrypt的javascript实现


const userName = value =>{
    let l1 = (value >> 16) & 65535;
    let r1 = value & 65535;
    let l2,r2;
    for(let i=0;i<3;i++){
        l2 = r1;
        r2 = l1 ^ Math.round((((1366*r1+150889)%714025)/714025)*32767);
        l1 = l2;
        r1 = r2;
    }
    let randomNum = (r1<<16)+l1;
    return 'user' + randomNum;
}

console.log(userName(9));