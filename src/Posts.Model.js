/**
 * Created by shahqaan on 06/10/2017.
 */

export default function getPosts() {

  let throttle = 2000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        id: 1,
        author: "Shahqaan Qasim",
        message: "Hello World",
        liked: true
      }, {
        id: 2,
        author: "Joe Satriani",
        message: "I'm so awesome",
        liked: true
      }, {
        id: 3,
        author: "James Hetfield",
        message: "I wish I could play guitar...",
        liked: false
      }]);
    }, throttle);
  });


}