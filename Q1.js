const isSum = (a,b,v) => {
    const set = new Set();
    for(let i=0;i<a.length;i++){
        if(!set.has(v-a[i])){
            set.add(v-a[i]);
        }
    }
    for(let j=0;j<b.length;j++){
        if(set.has(b[j])) return true;
    }
    return false;
}

let a = [10,40,5,280],
    b = [234,5,2,148,23],
    v = 42;
console.log(isSum(a,b,v));