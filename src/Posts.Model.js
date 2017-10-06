/**
 * Created by shahqaan on 06/10/2017.
 */

export default function getPosts() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        id: 1,
        author: "Shahqaan Qasim",
        message: "Hello World"
      }, {
        id: 2,
        author: "James Franco",
        message: "I'm so awesome"
      }]);
    }, 1000);
  });


}