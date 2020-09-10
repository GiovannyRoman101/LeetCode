class Message {
	constructor(userId,msgId){
		this.userId = userId
		this.msgId = msgId
	}
}
class Twitter {
    constructor() {
		this.messages = []
		this.users = new Map()
	}
    /**
     * Compose a new tweet.
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
		if(!this.users.has(userId)){
			this.users.set(userId, new Set([userId]))
		}
		this.messages.push(new Message(userId,tweetId))
	}
    /**
     * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
		let feed =[]
		if(this.users.has(userId)){
			let followingSet = this.users.get(userId)

			for(let i = this.messages.length-1; i >=0 && feed.length !== 10; i--){
				if(followingSet.has(this.messages[i].userId)){
					feed.push(this.messages[i].msgId)
				}
			}
		}
		return feed
	}
    /**
     * Follower follows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
		if(!this.users.has(followerId)){
			this.users.set(followerId, new Set([followerId]))
		}
		if(!this.users.has(followeeId)){
			this.users.set(followeeId, new Set([followeeId]))
		}
		let following = this.users.get(followerId)
		following.add(followeeId)
		this.users.set(followerId, following)
	}

    /**
     * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
		if(this.users.has(followeeId) && this.users.has(followerId) && followeeId !== followerId){
			let following = this.users.get(followerId)
			following.delete(followeeId)
			this.users.set(followerId, following)
		}
	}
}

let twitter = new Twitter()

twitter.postTweet(1,5)
twitter.postTweet(1,3)
twitter.postTweet(1,101)
twitter.postTweet(1,13)
twitter.postTweet(1,10)
twitter.postTweet(1,2)
twitter.postTweet(1,94)
twitter.postTweet(1,505)
twitter.postTweet(1,333)
twitter.postTweet(1,22)



console.log(twitter.getNewsFeed(1))


