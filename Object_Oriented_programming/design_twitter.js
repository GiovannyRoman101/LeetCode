
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
    postTweet(userId, tweetId) {}
    /**
     * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {}
    /**
     * Follower follows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {}

    /**
     * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {}
}
