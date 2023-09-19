import delivery from "../assets/images/homedelivery.svg"
import subscription from "../assets/images/favicon.svg"
import games from "../assets/images/gamess.svg"
import cooking from "../assets/images/cooking.svg"



export let countriesList = [
  "Africa",
  "Americas",
  "Asias",
  "Australia",
  "Canada",
  "Europe",
  "Middle East"
]

export const footerSections = [
  {
    title: "NEWS",
    subcategories: ["Home Page", "World", "Coronavirus", "U.S.", "Politics", "New York", "Business", "Tech", "Science", "Sports", "Wildfire Tracker", "Obituaries", "Today's Paper", "Corrections", "Trending"]
  },
  {
    title: "OPINION",
    subcategories: ["Today's Opinion", "Columnists", "Editorials", "Guest Essays", "Letters", "Sunday Opinion", "Opinion Video"]
  },
  {
    title: "ARTS",
    subcategories: ["Today's Arts", "Art & Design", "Books", "Best Sellers Book List", "Dance", "Movies", "Music", "Pop Culture", "Television", "Theater", "Video: Arts"]
  },
  {
    title: "LIVING",
    subcategories: ["Automotive", "Games", "Education", "Food", "Health", "Jobs", "Love", "Magazine", "Parenting", "Real Estate", "Style", "T Magazine", "Travel"]
  },
  {
    title: "MORE",
    subcategories: ["Reader Center", "The Athletic", "Wirecutter", "Cooking", "Headway", "Live Events", "The Learning Network", "Tools & Services", "Podcasts", "Video", "Graphics", "TimesMachine", "Times Store", "Manage My Account", "NYTLicensing"]
  }
];

export const footerLinksSection1 = [
  {
    title: "SUBSCRIBE",
    subcatogeries: [
      { text: "Home Delivery", imagePath: delivery },
      { text: "Digital Subscriptions", imagePath: subscription },
      { text: "Games", imagePath: games },
      { text: "Cooking", imagePath: cooking },
    ]
  }

];
export const footerLinksSection2 = [
  "Email Newsletters",
  "Corporate Subscriptions",
  "Education Rate",
];

export const footerLinksSection3 = [
  "Mobile Applications",
  "Replica Edition",
  "International",
  "Canada",
  "Español",
  "中文网",
];


export const footerBottomLinks = [
  {
    text: "© 2023 The New York Times Company",
    url: "#"
  },
  {
    text: "NYTCoContact Us",
    url: "#"
  },
  {
    text: "Accessibility",
    url: "#"
  },
  {
    text: "Work with us",
    url: "#"
  },
  {
    text: "Advertise",
    url: "#"
  },
  {
    text: "T Brand Studio",
    url: "#"
  },
  {
    text: "Your Ad Choices",
    url: "#"
  },
  {
    text: "Privacy Policy",
    url: "#"
  },
  {
    text: "Terms of Service",
    url: "#"
  },
  {
    text: "Terms of Sale",
    url: "#"
  },
  {
    text: "Site Map",
    url: "#"
  },
  {
    text: "Help",
    url: "#"
  },
  {
    text: "Subscriptions",
    url: "#"
  }
];


export let articleBody: string = " Sixteen people have died and over 150 have been hospitalized in southeastern Poland in an outbreak of Legionnaires’ disease, a severe strain of bacterial pneumonia, local health authorities said Wednesday. The outbreak has been concentrated in the southeastern city of Rzeszow, which lies about 60 miles from the border with neighboring Ukraine, although some cases have been registered elsewhere.\n The Polish health ministry said this week that the most likely source of infection was Rzeszow’s municipal water network.Once relatively quiet, Rzeszow has become an important hub for the international response to Russia’s invasion of Ukraine, hosting American soldiers and thousands of Ukrainian refugees. The deaths, which have occurred over the past week,sparked unfounded rumors in Poland of Russian responsibility for the outbreak that the authorities have tried to tamp down.  \n Stanislaw Zaryn, a deputy minister who oversees the country’s intelligence services, said Friday that the Polish internal security service was pursuing a routine  investigation into the circumstances behind the infection to rule out “potential intentional action in this case.”In a statement on Monday, Representative Michael McCaul of Texas, the Republican chairman of the House Foreign Affairs Committee, bemoaned the transfer of funds to “the world’s top state sponsor of terrorism.” Gov. Ron DeSantis of Florida, a Republican candidate for president, posted on social media that the agreement “bankrolls nuclear ambitions, hostage takers, and extremists who hate America.”\n And Senator Ted Cruz, Republican of Texas, blasted what he called President Biden’s “ransom” payment to Iran.At a daily news briefing, the State Department spokesman, Matthew Miller, strongly rebutted such criticism after confirming an Associated Press report that Mr. Blinken had signed waivers on Friday allowing the transfer of money from South Korean accounts to Qatar, which has agreed to provide what amounts to an escrow service."




type SidebarSections = {
  [sectionName: string]: string[];
};

export const sidebarSections = 
[[
  "World",
  "Business",
  "U.S. Politics",
  "U.S. News",
  "Sports",
  "Health",
  "N.Y.",
  "Opinion",
  "Tech",
  "Science"
],
[
  "Arts",
  "Book Review",
  "Style",
  "Food",
  "Travel",
  "Magazine",
  "T Magazine",
  "Real Estate",
  "Obituaries",
  "Video",
  "Graphics"
],[
  "More"
]]