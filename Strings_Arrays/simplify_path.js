/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	let words = path.split('/')
	let stack = []
	while(words.length !== 0){
		let temp = words.shift()
		if(temp === '' || temp ==='.'){
			continue
		}else if(temp === '..'){
			stack.pop()
		}else{
			stack.push(temp)
		}
	}
    return '/'+stack.join('/')
}
// /c
console.log(simplifyPath('/a/./b/../../c/'))
// /
console.log(simplifyPath('/../'))
// /home
console.log(simplifyPath('/home/'))

// /home/foo
console.log(simplifyPath('/home//foo/'))
// /c
console.log(simplifyPath('/a/../../b/../c//.//'))
// /a/b/c
console.log(simplifyPath('/a//b////c/d//././/..'))