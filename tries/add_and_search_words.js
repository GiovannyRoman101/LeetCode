function TrieNode(){
	this.isWord = false
	this.children = new Map()
}

class WordDictionary {
    constructor(){
		this.root = new TrieNode()
	}
	/**
	* Adds a word into the data structure. 
	* @param {string} word
	* @return {void}
	*/
	addWord(word){
		let curr = this.root
		for(let i = 0; i < word.length; i++){
			if(!curr.children.has(word[i])){
				curr.children.set(word[i],new TrieNode())
			}
			curr = curr.children.get(word[i])
			if(i === word.length -1){
				curr.isWord = true
			}
		}
	}
	/**
	* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
	* @param {string} word
	* @return {boolean}
	*/
	search(word){
		let match = false
		let curr = this.root
		function dfs(word,node){
			if(word.length ===0 && node.isWord){
				match = true
			}else if(word[0] === '.'){
				for(let key of node.children.keys()){
					dfs(word.substr(1),node.children.get(key))
				}
			}else if(node.children.has(word[0])){
				dfs(word.substr(1),node.children.get(word[0]))
			}
			
		}
		dfs(word,curr)
		return match
	}
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dict = new WordDictionary()
dict.addWord('bad')
dict.addWord('dad')
console.log(dict.search('bad'))