/*Partials in JS 🤔, Very commonly asked in JS interviews 😎

What are partials in JS❓

Before I explain in a formal way 👉 first go through the simple scenario below

👉 This is a simple utility that logs info, warnings or errors on console*/

function logger(level, value) {
  if (level === "info") {
    console.log(value);
  } else if (level === "warning") {
    console.warn(value);
  } else if (level === "error") {
    console.error(value);
  }
}

logger("info", 100);
logger("warning", 200);
logger("info", 101);
logger("error", 300);

/*Any Observation❓

👉 It is a generic logger which is able to handle warnings, errors and info logs on console.

But 🙋‍♂️ you can see we are repeating the level param for similar calls, right❓

👉 logger('info', 100)
👉 logger('info', 101)

But wait, You can transform this entirely and hence bring delight in terms of dev experience and code reusablity

But How ❓

Through Partial 👇

So partials are basically functions that return functions with some already predefined arguments and need some arguments to be completed

or simply putting 😐 , its just a higher order function


Let's do it now to make it clear*/

function logger(level) {
  return function (value) {
    if (level === "info") {
      console.log(value);
    } else if (level === "warning") {
      console.warn(value);
    } else if (level === "error") {
      console.error(value);
    }
  };
}

const logInfo = logger("info");
const logWarning = logger("warning");
const logError = logger("error");

logInfo(100);
logWarning(200);
logInfo(101);
logError(300);

/*So what we did here ?

1️⃣ We created more generalized version of original logger and
2️⃣ Then created the specialized and reusable versions dealing with different log levels
3️⃣ And thus improving readability and reusability of code*/
