/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

function parseStory(rawStory) {
  const dot = "."
  const comma = ","
  const noun = "[n]"
  const verb = "[v]"
  const adjective = "[a]"
  rawStory = rawStory.replace(dot, " .");
  rawStory = rawStory.replace(comma, " , ");
  const storyArray = rawStory.split(" ")
  const objectArray = []
  storyArray.forEach(word => {
    const length = word.length - 3
    if (word.includes(noun)) {
      const object = {}
      object["word"] = word.slice(0, length);
      object["pos"] = "noun"
      objectArray.push(object)
    }
    else if (word.includes(verb)) {
      const object = {}
      object["word"] = word.slice(0, length);
      object["pos"] = "verb"
      objectArray.push(object)
    }
    else if (word.includes(adjective)) {
      const object = {}
      object["word"] = word.slice(0, length);
      object["pos"] = "adjective"
      objectArray.push(object)
    }
    else {
      const object = {}
      object["word"] = word
      objectArray.push(object)
    }
  });

  return objectArray;
}
const createTextEdit = (arr) => {
  const editDOM = document.querySelector(".madLibsEdit")
  const paragraph = document.createElement("p")
  const idCount = 0
  arr.forEach(item => {
    if (item.pos) {
      const Input = document.createElement("input");
      Input.setAttribute(maxlenght, 20)
      Input.setAttribute(id, idCount++)
    }
  })
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
})
