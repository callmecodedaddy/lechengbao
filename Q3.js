//如果要求用户名后的数字均为8位，可以改为加密24bit。位数不足8位的在数字前补0

//实现无法预测用户名序列，可以修改r2 = l1 ^ Math.round((((1366*r1+150889)%714025)/714025)*(4096-1));
//在实现r2的映射中，r1的方程可以自己设定。只需保证 if（x=y） f(x) == f(y);

const pseudoEncrypt = value =>{
    let l1 = (value >> 12) & (4096-1);
    let r1 = value & (4096-1);
    let l2,r2;
    for(let i=0;i<3;i++){
        l2 = r1;
        r2 = l1 ^ Math.round((((1366*r1+150889)%714025)/714025)*(4096-1));
        l1 = l2;
        r1 = r2;
    }
    let randomNum = (r1 << 12)+l1;
    let str = randomNum.toString();
    while(str.length<8){
        str = '0' + str;
    }
    return 'user'+ str;
}

// for(let i=0;i<20;i++){
//     console.log(pseudoEncrypt(i));
// }
console.log(pseudoEncrypt(18939366886))
