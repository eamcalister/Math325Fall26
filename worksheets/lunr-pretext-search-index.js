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
  "id": "Activity-title",
  "level": "1",
  "url": "Activity-title.html",
  "type": "Worksheet",
  "number": "",
  "title": "Math 325 Homework 1",
  "body": " Math 325 Homework 1   Due August 28, 2026 (submission on Canvas).     The Babylonian tablet YBC7289 gives an approximation for as . Calculate this as an exact fraction (noting how you know order of magnitude) in our modern number system. When you plug this into a caclulator, how accurate is it?      The goal of this problem is to possibly make better sense of Babylonian reciprocals by thinking about our own number system without zero or explicit place values.     Describe how our number system would work if we used the symbols , but no zeros, and we didn't know exactly what each place value meant. (Your answer should be maybe a couple short paragraphs, with some examples of numbers written normally and not.)      In the number system from above, find the reciprocals of , , , and .       Find the Babylonian reciprocal of .      Do you think mathematics (what existed at the time) was really accessible to the masses in ancient Mespotamia? Do you think it was more or less accesible than mathematics of today? Explain.    "
},
{
  "id": "Activity-title-3",
  "level": "2",
  "url": "Activity-title.html#Activity-title-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  The Babylonian tablet YBC7289 gives an approximation for as . Calculate this as an exact fraction (noting how you know order of magnitude) in our modern number system. When you plug this into a caclulator, how accurate is it?   "
},
{
  "id": "Activity-title-4",
  "level": "2",
  "url": "Activity-title.html#Activity-title-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The goal of this problem is to possibly make better sense of Babylonian reciprocals by thinking about our own number system without zero or explicit place values.     Describe how our number system would work if we used the symbols , but no zeros, and we didn't know exactly what each place value meant. (Your answer should be maybe a couple short paragraphs, with some examples of numbers written normally and not.)      In the number system from above, find the reciprocals of , , , and .    "
},
{
  "id": "Activity-title-5",
  "level": "2",
  "url": "Activity-title.html#Activity-title-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the Babylonian reciprocal of .   "
},
{
  "id": "Activity-title-6",
  "level": "2",
  "url": "Activity-title.html#Activity-title-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Do you think mathematics (what existed at the time) was really accessible to the masses in ancient Mespotamia? Do you think it was more or less accesible than mathematics of today? Explain.   "
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
