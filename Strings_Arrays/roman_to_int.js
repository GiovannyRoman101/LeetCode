var romanToInt = function(s) {
    let val =0
    let nums = [
        ['M',1000], ['CM',900],['D',500],['CD', 400],
        ['C',100],['XC',90],['L',50],['XL',40],['X',10],
        ['IX', 9],['V',5],['IV',4],['I',1]
    ]
    while(s.length >0){
        for(let i = 0; i< nums.length; i++){
            if(s.indexOf(nums[i][0]) === 0){
                val += nums[i][1]
                s = s.substring(nums[i][0].length,s.length)
                break
            }
        }
    }
    return val
};

console.log(romanToInt('III'))