

// 题目一：
// 爬楼梯 需要n个台阶才能到达终点，每次可以迈上1或2个台阶，问可以有多少种不同的方式到达终点？
// 注意：n非常大的时候，时间复杂度优化
function step() {

}

// 题目二：
// 计算两个数字字符串相加 例如：s1 = '111', s2 = '222' 注意：字符串可能非常长
// 考察点？模拟进位 双指针 js用几个字节表示整数的

function sum(s1,s2) {
    let s = parseInt(s1) + parseInt(s2);
    return s;
}
console.log('sum', sum('111','222'));

console.log(parseInt('182838474893920228377364282919293837477438836439291918277374747473738291929287374747474746643992011028377474747383929291938736464821927737464736472190137376474'))