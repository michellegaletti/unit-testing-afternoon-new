import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./__data__/testData";

describe("shorten tests to check shortenText functions", () => {
  test("shortenText not to alter string under 100 characters", () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });
  test("shortenText should shorten text over 100 characters and add 3 periods at end", () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    //Expect the last three characters in shortened text to be 3 periods
    expect(shortened.slice(-3)).toBe("...");
  });
});

test("wordCount checks posts array and returns total word count", () => {
  expect(wordCount(posts)).toBe(233);
});

describe("Testing attachUserName method", () => {
  test("attachUserName checks to see if first post returned has appropriate property", () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty("displayName");
  });

  test("attachUserName checks to remove any post with no matching user", () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });
});
