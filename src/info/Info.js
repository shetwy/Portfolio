
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import self from "../img/self.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sherry",
    lastName: "Torrefranca",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Visual Designer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      
    ],
    socials: [
        {
            link: "https://www.facebook.com/sherry.torrefranca",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/twylyt_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/shetwy",
            icon: "fa fa-github",
            label: 'github'
            
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hi! I'm Sherry. I'm a visual designer in our current project. I studied Information of Technology at Western Institute of Technoly.I found a passion for programming and a fascination with how technology can shape the future. I’ve learned to appreciate the intricacies of coding and the satisfaction that comes from building something from scratch. This journey has transformed my perspective, and I now see IT as a dynamic field full of opportunities for innovation and growth.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css', 'figma'],
            exposedTo: ['nodejs', 'python', 'java']
        }
    ,
    hobbies: [
        {
            label: 'travel',
          
        },
        {
            label: 'hiking',
           
        },
        {
            label: 'movies',
           
        },
        {
            label: 'photography',
           
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://www.figma.com/proto/etRF1JdaznTe4xF73kuHse/Eventor?node-id=1196-2960&t=VcxsvQYypTmqRMXs-1&scaling=min-zoom&content-scaling=fixed&page-id=426%3A2&starting-point-node-id=1401%3A5323&show-proto-sidebar=1", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://awesometodoshe.onrender.com/",
            image: mock2
      
        }
    ]
}