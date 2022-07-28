# Did you find any of the instructions unclear, tricky, or incomplete?
No, the assessment instructions were as clear as they could possibly be, I think. Verbosity wasn't needed, minimum 
requirements were enough for me to understand the basic skeleton of the application.

# What could have improved your assessment of the tasks asked of you?

A style guide may have been a very helpful addition, some basic things like font style and colors, just to gain a 
better idea of how I could then begin to flesh out a design. When it comes to designing UIs, it really isn't my 
strongest trait, but I can eye a design pretty well and copy it. Anything else would have been, again, too verbose 
and I don't think this assessment needs that.

# How much time did you commit to taking this test?

In total, I committed around 3 hours. This includes a few phases of development, as well as being the second 
implementation of the design (the first design was pretty rough; it took me a minute to remember SASS, and some of 
its syntax). I think for this particular project I estimated 2 hours, and was pretty close to that. I took time 
in between work to knock it out.

# Please explain your approach and process for each solution

I will break this part in to three parts: 

The design phase, the Index phase, and the Article phase:

### Design phase:

I originally had a design in mind for this, but knew it was going to be a rough first draft as I had to get back to 
using a vanilla stack whilst browsing the SASS docs. Once I started tinkering with layout designs things came 
together as I started to remember syntax rules and methods, etc. This in 
particular is apparent through out my SCSS styling.

I scrapped the early implementation because I simply didn't feel it was good enough to show to a hypothetical 
customer. I don't strive for below average experiences, even if those experiences are not quite perfect. If someone 
sees my design, I want it to be, at the least, appeasing to the eyes and hassle-free.

Once I started on the second and final layout, things came together much quickly. The final 2 hours was, truthfully, 
the bulk of the project. I was gaining a lot of speed once I started remembering the syntax rules (I fought through 
a git error as well, which accounted for 20 or so minutes).

### Index phase

I didn't use something like React Router, and that was really just a decision made out of lack of time, and honestly,
I didn't feel it was necessary to commit that hard. I know that it's a solution that would work in a real project, 
but it's a solution that in this usecase would have just cost me time and energy I was trying to use wisely. 

In lieu of React Router (or any routing, really) I faked it by really just using a boolean to say 'index', 'not 
index'. Two pages, two states, simple. Though an alternative solution could have been to swap between routes on the 
`index.js` entry file, I opted to nest my `Index` within my `index.js`, then to nest my `Article` page in my `Index` 
page. It was simply a much simpler way and required low effort, though the cost of that is muddying your state 
management up a bit. I try to keep things clean, but workarounds often have expenses associated with them.

With that, I was pretty happy overall with how the carousel of blog articles came out.

Originally, I was going to implement inifnite scrolling using IntersectionObserver, and having a div that it sees, 
then fires the next page, and that works great for sites like Reddit, Twitter, etc., but ultimately - again - it was 
something that would have taken up a chunk of time I feel would have been unneccessary, so therefore opted for a 
simpler solution: slicing an Array with all the pre-defined things from the assessment: 6 items shown at once, 24 in 
total. This meant that I had 4 pages to show, and could swap these pages and just take the chunk of the Array I 
needed to show the next 6. Add some buttons, boom. Quick and easy.

### Article phase

This was a pretty simple phase, I actually fought with the hero banner quite a bit and that was really been due to how 
rusty I was on the styling side of things. Like most things it will come back to me if I spend any time living in it.

Things went well here, I think I struggled the most with coming up with content on my own to fill the large empty 
space, but it overall meets the minimum requirements, and it doesn't look too shabby.

Here I had to make a fetch request which grabbed a random image, and I did some fudging with the Articles `const` 
file I 
had created to randomly grab a title and description.


# Which of your talents, skills, or languages best helped you during the test?

Definitely the amount of time I've spent living in JavaScript and TypeScript. TypeScript's typing system has spoiled 
me a little bit, and truth be told I don't like to be randomly sabotaged by my code (JavaScript), but understanding 
JS and state, and understanding React's fundamentals helped a ton. 

# What talents, skills, or languages would have been helpful?

I think having a better understanding of React and it's power as a framework, and definitely taking the time to read 
the SASS docs. Overall, there's always something to know and learn, and I'm always doing that, so I think the room 
for improvement is always, for the most part, pretty large.

# If you had time, what changes would you make to your solution(s)?

I would definitely add infinite scrolling (where it would just loop around), this sort of allows some amount of 
maintainability if we ever wanted to add to the articles.

I would also definitely spend more time on the overall look and feel of the UI, I think it is the beginnings of 
something very cool looking but, alas, I just don't have the time.

Additionally, I would overhaul the state and how it's being managed (probably with something like Redux instead of 
using `useReducer()`, making use of slices).

The CSS/SCSS would absolutely get a makeover, it is at times somewhat sloppy and I would like to improve on that.

Finally, the images don't randomly fetch on the Index page for the articles. I noticed that as I was nearing 
completion, and that is a quick fix I could implement, using the same technique I used in the `Article` component.