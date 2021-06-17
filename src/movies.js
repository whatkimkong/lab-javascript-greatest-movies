/*
Iteration 1: All directors? - Get the array of all directors.
_Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

How could you "clean" a bit this array and make it unified (without duplicates)?
*/

const movies = require("./data");

function getAllDirectors(theArray) { 
  const directors = theArray.map((eachMovie) => {
    eachMovie.director;
  });
  return directors;
}


//filter

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(theArray) {
    if (theArray.length === 0) {
      return null;
    } else {
      const whichIsDramaSteven = theArray.filter((eachMovie) {
      if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre === 'Drama') {
        return eachMovie.title;
      }
    });
  return whichIsDramaSteven;
}

// reduce here? to get number - how many?


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(theArray) {
    if (theArray.length === 0) {
      return null;
    } else { 
      const allScores = theArray.reduce((acc, movie)) {
        return acc + movie.score;
      }, 0);
      
    }
  return allScores / theArray.length;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(theArray) {
    if (theArray.length === 0) {
      return null;
    } else { 
      const allDrama = theArray.reduce((acc, movie)) {
        return acc + movie.genre.drama;
      }, 0);
    }
  return allDrama / theArray.length;
}

/*
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(theArray) {
  sort!!
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

*/

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = {
//     getAllDirectors,
//     howManyMovies,
//     scoresAverage,
//     dramaMoviesScore,
//     orderByYear,
//     orderAlphabetically,
//     turnHoursToMinutes,
//     bestYearAvg,
//   };
// }
