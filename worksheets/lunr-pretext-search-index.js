var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mathematics Department Fort Lewis College  Last Updated:       "
},
{
  "id": "325HW1",
  "level": "1",
  "url": "325HW1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 325 Homework 1",
  "body": " Math 325 Homework 1   Due August 28, 2026 (submission on Canvas).     The Babylonian tablet YBC7289 gives an approximation for as . Calculate this as an exact fraction (noting how you know order of magnitude) in our modern number system. When you plug this into a caclulator, how accurate is it?      The goal of this problem is to possibly make better sense of Babylonian reciprocals by thinking about our own number system without zero or explicit place values.     Describe how our number system would work if we used the symbols , but no zeros, and we didn't know exactly what each place value meant. (Your answer should be maybe a couple short paragraphs, with some examples of numbers written normally and not.)      In the number system from above, find the reciprocals of , , , and .       Find the Babylonian reciprocal of .      Do you think mathematics (what existed at the time) was really accessible to the masses in ancient Mespotamia? Do you think it was more or less accesible than mathematics of today? Explain.    "
},
{
  "id": "325HW1-3",
  "level": "2",
  "url": "325HW1.html#325HW1-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The Babylonian tablet YBC7289 gives an approximation for as . Calculate this as an exact fraction (noting how you know order of magnitude) in our modern number system. When you plug this into a caclulator, how accurate is it?   "
},
{
  "id": "325HW1-4",
  "level": "2",
  "url": "325HW1.html#325HW1-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The goal of this problem is to possibly make better sense of Babylonian reciprocals by thinking about our own number system without zero or explicit place values.     Describe how our number system would work if we used the symbols , but no zeros, and we didn't know exactly what each place value meant. (Your answer should be maybe a couple short paragraphs, with some examples of numbers written normally and not.)      In the number system from above, find the reciprocals of , , , and .    "
},
{
  "id": "325HW1-5",
  "level": "2",
  "url": "325HW1.html#325HW1-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the Babylonian reciprocal of .   "
},
{
  "id": "325HW1-6",
  "level": "2",
  "url": "325HW1.html#325HW1-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Do you think mathematics (what existed at the time) was really accessible to the masses in ancient Mespotamia? Do you think it was more or less accesible than mathematics of today? Explain.   "
},
{
  "id": "325HW2",
  "level": "1",
  "url": "325HW2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 325 Homework 1",
  "body": " Math 325 Homework 1   Due August 31, 2026 (submission on Canvas).     Carefully solve the following stone weighing problem by false position (as demonstrated in class):   I found a stone and did not weight it; after I subtracted and then (of the previous difference), it weighed gin. How much did the original stone weigh?   Do this carefully, as the Babylonians would have. If you need to divide, multiply by the appropriate Babylonian reciprocal. When you get your final answer, express it as a sexagesimal number and explain how you know its order of magnitude.      One of the features of many Babylonian tablets is that they seem to be ``useless'', fake real world problems to demonstrate a mathematical technique. Now think of your own mathematical education. Try to find an example (say, in a Calculus book) of something similar (explain why you think it's similar). Do you think this is a good teaching method? Why or why not?    "
},
{
  "id": "325HW2-3",
  "level": "2",
  "url": "325HW2.html#325HW2-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Carefully solve the following stone weighing problem by false position (as demonstrated in class):   I found a stone and did not weight it; after I subtracted and then (of the previous difference), it weighed gin. How much did the original stone weigh?   Do this carefully, as the Babylonians would have. If you need to divide, multiply by the appropriate Babylonian reciprocal. When you get your final answer, express it as a sexagesimal number and explain how you know its order of magnitude.   "
},
{
  "id": "325HW2-4",
  "level": "2",
  "url": "325HW2.html#325HW2-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  One of the features of many Babylonian tablets is that they seem to be ``useless'', fake real world problems to demonstrate a mathematical technique. Now think of your own mathematical education. Try to find an example (say, in a Calculus book) of something similar (explain why you think it's similar). Do you think this is a good teaching method? Why or why not?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
