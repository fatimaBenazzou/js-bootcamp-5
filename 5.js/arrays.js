// const playlist = [
//   "Blinding Lights",
//   "Levitating",
//   "Save Your Tears",
//   "Flowers",
// ];

// console.log("current playlist: ", playlist);

// playlist.push("new song");
// console.log(playlist);

// const removedSong = playlist.shift();
// console.log(removedSong);
// console.log(playlist);

// playlist.unshift("another new song");
// console.log(playlist);

// const userSearch = prompt("Search for a song:");
// for (const song of playlist) {
//   if (userSearch === song) {
//     console.log("The song is playing...");
//     break;
//   }
// }

// const games = ["Zelda", "Minecraft", "Call of Duty", "The ghost of Tsushima"];
// console.log(games.includes("Minecraft"));
// const i = games.indexOf("The ghost of Tsushima");
// games.splice(i, 1, "The ghost of Yotai");
// console.log(games);

// function toCapitaleCase(word) {
//   if (!word) return "";
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }
// const word = "hello";
// console.log(toCapitaleCase(word));
// console.log(toCapitaleCase("hello"));
// console.log(toCapitaleCase("HELLO"));
// console.log(toCapitaleCase("heLlo"));
// console.log(toCapitaleCase());

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [0, -1, ...arr1, 99, ...arr2, 5, 6];
console.log(combined); // Output: [1, 2, 3, 4]
