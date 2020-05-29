/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {
	let map = new Map()
	for(let i = 0; i < words.length; i++){
		if(map.get(words[i]) === undefined){
			map.set(words[i],0)
		}
		map.set(words[i],map.get(words[i]) +1)
	}
	let arr =[]
	for(let key of map.keys()){
		arr.push(new WordFreq(key,map.get(key)))
	}
	arr.sort((a,b)=>{ return b.freq - a.freq})

	return arr.map((item)=>{return item.word}).slice(0,k)

}

function WordFreq(word, freq){
	this.word = word
	this.freq = freq
}



console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],4))