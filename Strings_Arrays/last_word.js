var lengthOfLastWord = function(s) {
    let len = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            continue
        }else {
            if(s[i-1] === ' ' && s[i] !== ' ')
            {
                len = 1
            }else{
                len++
            }
        }
    }
    return len
};

console.log(lengthOfLastWord('a '))