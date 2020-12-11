burgers = Burger.create([

{
  name: "Shogun Burger",
  image: "https://i.imgur.com/idQNZJp.jpg"
},

{
  name: "JS Burger",
  image: "https://i.imgur.com/XCKVukP.jpg"
},

{
  name: "Overcook Burger Bar",
  image: "https://i.imgur.com/VBLfR2v.jpg"
},


])

reviews = Review.create([

{
  title: "Great selection",
  description: "So many different burgers",
  score: 5,
  burger: burgers.first
},

{
  title: "Too expensive",
  description: "A set costs at least 2000 JPY",
  score: 3,
  burger: burgers.first
},

])
