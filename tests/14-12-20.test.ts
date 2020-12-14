import { partition } from "../problems/14-12-20";

test('partition of s = "aab" to equal [["a","a","b"],["aa","b"]]', () => {
  expect(partition("aab")).toMatchObject([["a","a","b"],["aa","b"]]);
});

test('partition of s = "a" to equal [["a"]]', () => {
  expect(partition("a")).toMatchObject([["a"]]);
});
