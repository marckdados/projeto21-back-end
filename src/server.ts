import app from "./app";

const port = process.env.PORT || 4000;

app.listen(port, () => {
  return console.log(`Server is listen on port ${port}.`);
});
