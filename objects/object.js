console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.
var mom = {
}

var dad = {}



// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').
mom.physicality = {figure: 'tall'}
dad.physicality = {figure: 'short'}
mom.personality = {nature: 'loving'}
dad.personality = {nature: 'caring'}


// uncomment these console.logs after you write your code
console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.physicality.hair = 'blonde'
mom.physicality.eyes = 'green'
mom.physicality.skin = 'pale'
mom.physicality.height = 72
mom.physicality.isHuman = true

dad.physicality.eyes = 'brown'
dad.physicality.hair = 'black'
dad.physicality.figure = 'slim'
dad.physicality.height = 66
dad.physicality.isHuman = true

// uncomment these console.logs after you write your code
 console.log('mom object after step 3:', mom)
 console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.personality.intelligence = 'high'
mom.personality.senseOfHumor = 'minimal'
mom.personality.favoriteGenre = 'drama'
mom.personality.favoriteActivities = 'running, cooking, volleyball'
mom.personality.loving = true

dad.personality.intelligence = 'high'
dad.personality.senseOfHumor = 'wicked'
dad.personality.favoriteGenre = 'comedy'
dad.personality.favoriteActivities = 'sailing, cooking, football'
dad.personality.loving = true


// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var me = {}
//personality
me.physicality = {}
me.physicality.height = (dad.physicality.height+mom.physicality.height)/2
me.physicality.hair = dad.physicality.hair
me.physicality.eyes = mom.physicality.eyes
me.physicality.skin = mom.physicality.skin
me.physicality.isHuman = mom.physicality.isHuman

me.personality = {}
me.personality.intelligence = mom.personality.intelligence
me.personality.senseOfHumor = dad.personality.senseOfHumor
me.personality.favoriteGenre = dad.personality.favoriteGenre
me.personality.favoriteActivities = [mom.personality.favoriteActivities[0], dad.personality.favoriteActivities[0]]
me.personality.loving = dad.personality.loving


// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.

me.skills = {
  goodAt: ['comedy', 'running', 'research', 'skiing'],
  badAt: ['talking', 'cooking', 'coding', 'speaking Spanish']
}




// uncomment this console.log after you write your code
 console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.age=26


// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

me.skills.goodAt.splice(me.skills.goodAt.length/2)


// uncomment this console.log after you write your code
 console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).

me.age++

// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.skills.goodAt = ['sitting']




// uncomment this console.log after you write your code
 console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

me.skills.badAt.push('basketball', 'doing taxes', 'reading minds', 'golf', 'shopping')


// uncomment this console.log after you write your code
console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!

me.speak = function () {
  console.log("I'm sorry. I just got here. What the Hell?")
}
me.speak();



// call your function :)
