/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let k = m + n - 1
	while (0 <= m - 1 && 0 <= n - 1) {
		if (nums1[m - 1] > nums2[n - 1]) {
			nums1[k] = nums1[m - 1]
			m--
		} else {
			nums1[k] = nums2[n - 1]
			n--
		}
		k--
	}
	while (0 <= m - 1) {
		nums1[k] = nums1[m - 1]
		k--
		m--
	}
	while (0 <= n - 1) {
		nums1[k] = nums2[n - 1]
		k--
		n--
	}
	console.log(nums1)
};

let arr1 = [0]
let arr2 = [1]

merge(arr1, 0, arr2, 1)