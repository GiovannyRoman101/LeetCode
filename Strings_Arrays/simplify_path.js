/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	let words = path.split('/')
	return words
};

console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home/"))