const API_URL = "https://apii.github.com/users/yogeshkumar2491";

const user = fetch(API_URL);

user
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error:", err));
