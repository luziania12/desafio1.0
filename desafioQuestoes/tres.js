let a = [1, 3, 5, 7];
let proximo_a = a[a.length-1] + 2;
a.push(proximo_a)
console.log('a)'+a)

let b = [2, 4, 8, 16, 32, 64]
let proximo_b = b[b.length-1] * 2;
a.push(proximo_b)
console.log('b)'+ b)



let c = [0, 1, 4, 9, 16, 25, 36];
let proximo_c = (c.length) * (c.length)
c.push(proximo_c)
console.log('c)'+c)


let d = [4, 16, 36, 64];
let proximo_d = d[d.length-1] + 20;
d.push(proximo_d)
console.log('d)'+d)


let e = [1, 1, 2, 3, 5, 8];
let proximo_e = e[e.length-1] + e[e.length-2];
e.push(proximo_e)
console.log('e)'+ e)

let f = [2, 10, 12, 16, 17, 18, 19];
let proximo_f = f[f.length-1] == 18 ? 20 : f[f.length-1] + 1;
f.push(proximo_f)
console.log('f)'+ f)