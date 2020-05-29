package Strings_Arrays;

import java.util.ArrayList;
import java.util.List;

class WordBreak {
    public static boolean wordBreak(String s, List<String> wordDict) {
		if (s.length() == 0) {
			return true;
		} else {
			for (String word : wordDict) {
				String part = s.substring(0, word.length());
				if (part.equals(word)) {
					wordBreak(s.substring(word.length() + 1), wordDict);
				}
			}
			return false;
		}
	}

	public static void main(String[] args) {
		String s = "leetcode";
		ArrayList<String> wordDict = new ArrayList<String>();
		wordDict.add("leet");
		wordDict.add("code");
		System.out.println(wordBreak(s, wordDict));
	}
}