import {
  SiReact,
  SiTypescript,
  SiGithub,
  SiVite,
  SiBulma,
  SiDocker,
  SiGitlab,
  SiPython,
  SiFastapi,
  SiSpotify,
  SiYoutube,
  SiJavascript,
  SiMongodb,
  SiRedux,
} from "react-icons/si";
import animations from "./media/animations.gif";
import ttHome from "./media/tuneTransfer/ttHome.png";
import ppHome from "./media/portfolio/ppHome.png";
import wwHome from "./media/wealthWizard/wwHome.png";
import { AccordionData } from "./pages/ProjectPage";

// portfolio page data //
export const portfolioAccordion: AccordionData[] = [
  {
    title: "Project Detail (This page)",
    body: "This component is responsible for displaying everything you are seeing on this page right now. I have a simple useEffect on line 10 to fix any issues with positioning.",
    gistId: `${"jako1001"}/${"e0f880b3678eb8c2ea911de5a1c35d7e"}`,
    id: 5,
  },
  {
    title: "Projects List",
    body: "This is the code that handles the mapping of my projects, it's pretty simple. The motion.div that looks very intimdating is just one of the animations that I used for the site. This particular one is responsible for the scaling and fade into view of the project cards when hovering over them.",
    gistId: `${"jako1001"}/${"c563619e1338f66d09723ce8656feaa0"}`,
    id: 4,
  },
  {
    title: "Contact Form",
    body: 'The form itself is long so for the sake up space, I am just going to show off the code that handles the form. I employed the use of "Formspree", and external service that allows you to receive emails, as well as a package called "sweetalert2" for the popup notifications. The "useForm" hook on line 2 takes in my super secret environment variable key which on form submit will populate the "state" variable. If that state contains "suceeded" sweetalert will fire the success popup and the "be in touch" message. If it contains errors, sweetalert will fire the error popup.',
    gistId: `${"jako1001"}/${"0066c48f9ca31cd57b3377c5dab94d17"}`,
    id: 3,
  },
  {
    title: "Animations",
    body: 'This project is my first crack at animations. I used the "framer-motion" react package to achieve my design.',
    img: animations,
    id: 2,
  },
  {
    title: "Accordion",
    body: 'This is the accordion you are using right now. It functions by using the index of the currently clicked on block to determine which block should be opened or closed. This can be seen on line 15, the "isExpanded" variable. If you click the same block or another block, the current block will close. If you clicked on a different accordion block, that block will open. See the "handleClick" function on line 4. The GitHub gist (code block) below is being displayed using the "react-embed-gist" package.',
    gistId: `${"jako1001"}/${"7a752f2f7a1ab115fa6a024190638e0e"}`,
    id: 1,
  },
];

export const portfolioSkills = [
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiBulma size={40} />, name: "Bulma" },
  { icon: <SiVite size={40} />, name: "Vite" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
];

export const portfolioImages = ppHome;
export const portfolioDescription =
  "One day I figured it was probably a good idea to create a website to show off my projects and skills publicly. Shortly after I began working on the website you are on right now and I am very proud of it. It also feels pretty cool to have my own name on the web.";
export const portfolioRepo = "https://github.com/jako1001/portfolio-site";
export const portfolioIcon = <SiGithub size={30} />;

// tune transfer data //
export const tuneAccordion: AccordionData[] = [
  {
    title: "The Playlist Class",
    body: 'This class is the main facilitator of all the streaming service playlist data. It takes in "from_service", an instance of the class of the service you are transferring from, "to_service", an instance of the class of the service you are transferring to, and the playlist tracks from the "from_service". The first method, "get_stripped_playlist_tracks", is responsible for removing all of the un-needed data from each playlist track, as well as fixing any naming discrepancies. The function "fix_ampersand_symbol" on line 13 is responsible for keeping naming conventions with "&" the same. For example, if there was an artist on one of the songs that was "Artist & Artist," the function would change it to "Artist and Artist." This helps to make the search results better. "remove_duplicates" will simply go through and remove any duplicate songs that are in a playlist. This function works by using a set on line 25 to keep track of the songs that we have seen. If for any reason a duplicate song was to be attempted to be added to the set, it would instead skip it, otherwise it gets added to the "dupe_removed_playlist_tracks" list on line 26. The final method on line 40 "convert_playlist" is responsible for invoking the "create_playlist" method on the "to_service" that is passed into the playlist class.',
    gistId: `${"jako1001"}/${"47491e542907400546b809c1dd942ed2"}`,
    id: 1,
  },
  {
    title: "YouTube Class (YTC)",
    body: 'This class is responsible for all things YouTube. It inherits from the Playlist class. It is rather large so I am going to break it up into a few parts. For interfacing with YouTube I used the python package "ytmusicapi." You will see the self variable "self.ytmusic" on line 8 used frequently throughout this class. It is required for any interactions that require communicating with YouTube. The first method "initialize_playlist" simply creates a new, empty playlist on YouTube music. "get_all_playlists" fetches all of the playlists of the authenticated user. On line 23 you can see it ignores the "LM" and "SE" playlists. These are the default YouTube playlists that are not very revelant. The following "get_all_tracks" method does basically the same thing, but takes in a specific playlist id and then fetches all of the tracks for that given playlist.',
    gistId: `${"jako1001"}/${"0d6e116bf9afa6315f50edf3f6e85af0"}`,
    id: 2,
  },
  {
    title: "YTC: Searching YouTube",
    body: 'This method handles the searching of YouTube for each track in a playlist. The "query_result" variable on line 5 is what does the search with the "search_query" on line 3. Line 10 appends all of the revelant data to "self.search_results," a list we will use throughout the YouTube class. Each search result is comprised of two results: "track, artist, and videoId" which is the first result from YouTube and "alternate_track, alternate_artist, and alternate_videoId," which is the second result from YouTube. The alternate result is very important as the first search result from YouTube turns out to not always be what we want.',
    gistId: `${"jako1001"}/${"73384bc1dcfc63276ffd6911025c2ee6"}`,
    id: 3,
  },
  {
    title: "YTC: Refining Artists",
    body: 'In the event that the artists from the previous service do not match the artists from the YouTube search results, the "refine_artists" method will have you covered! Lines 3-12 are setting up shorthands for info that I will need later on in the function. On line 14, there is a while loop that checks to see if the artist from the from_service playlist, "playlist_from_front_artist" is not found in the YouTube artist "yt_artist." If it is not, perform a second search with the alternate artist data "playlist_from_front_alternate_artist," and then compare the two. If there is not a match again, remove the song and add it to the "removed_tracks" list (line 30), add a "skip" key to the given track, then continue.',
    gistId: `${"jako1001"}/${"24a8c1adfc256ee05b8fe979ad492dcf"}`,
    id: 4,
  },
  {
    title: "YTC: Refining Tracks",
    body: 'Refining the tracks is a bit different from refining artists. The first check is to see if the "skip" key got added to track dictionary. If so, refine track is skipped for that song entirely (line 3). On line 18 I check to see if the original playlist track is equal to the new playlist track. If it is, the rest of the function is skipped, if not there is another check. If there is an open parantheses in the track, check to see if the tracks equal without the parantheses. If it is, continue to the next track. If not, check to see if the first word from the original track is even in the YouTube search result. If not, skip the track.',
    gistId: `${"jako1001"}/${"34cc6d307ddda39d2b4a5e96316599c5"}`,
    id: 5,
  },
  {
    title: "YTC: Adding tracks to playlist",
    body: 'This is the final method of the YouTube class. It is a culmination of all of the other YouTube class methods. Line 5 is where the functions start to get invoked. Once all of those resolve and all of the songs have been fixed or removed, they begin to get added to the YouTube Music playlist on line 13. The function that does the adding is on line 21. It takes the "videoId" contained in the track dictionary, and Youtube reads that to add the song. Once all of the songs have been added, depending on if tracks were or were not removed, or if there were any duplicate tracks, a custom message will be returned to be displayed on the frontend.',
    gistId: `${"jako1001"}/${"c067161f9e5e377c1d6a095c47774d4a"}`,
    id: 6,
  },
];

export const tuneSkills = [
  { icon: <SiYoutube size={40} />, name: "YouTube" },
  { icon: <SiSpotify size={40} />, name: "Spotify" },
  { icon: <SiFastapi size={40} />, name: "Fastapi" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "Javascript" },
];

export const tuneImages = ttHome;
export const tuneDescription =
  "What do you do when you switch music streaming services? Spend a few days manually transferring over each and every one of your playlists? Absolutely not! You spend a few weeks creating an application that does it for you! At least those were the thoughts that were going through my head when I created my first post-graduation project: Tune Transfer. Tune Transfer does exactly what it sounds like it does, transfers your tunes. Tune Transfer currently supports converting Spotify playlists to YouTube music playlists, although I plan to add more in future. If you need to to transfer your playlists, look no further!";
export const tuneRepo = "https://gitlab.com/jako1001/tune-transfer";
export const tuneIcon = <SiGitlab size={20} />;

// wealth wizard data //
export const wizardAccordion: AccordionData[] = [
  {
    title: "Under Construction",
    body: "Under Construction",
    id: 1,
  },
];

export const wizardSkills = [
  { icon: <SiGitlab size={40} />, name: "Gitlab" },
  { icon: <SiDocker size={40} />, name: "Docker" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiFastapi size={40} />, name: "FastAPI" },
  { icon: <SiRedux size={40} />, name: "Redux" },
  { icon: <SiReact size={40} />, name: "React" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
];

export const wizardImages = wwHome;
export const wizardDescription =
  "(LIVE SITE CURRENTLY BEING FIXED, GITLAB REPOSITORY IS STILL AVAILABLE) Wealth Wizard is the cultivation of 4 group members in the final module of the Hack Reactor bootcamp. It is a real-time stock market portfolio simulation tool that allows you to sign up, buy, sell, and view real statistics of stocks, but with fictional money.";
export const wizardRepo = "https://gitlab.com/hrgroup4/wealth-wizard";
export const wizardIcon = <SiGitlab size={20} />;
