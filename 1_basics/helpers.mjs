export async function connectToDatabase() {
  await new Promise((res) =>
    setTimeout(() => {
      console.log("Connected to database");
      res();
    }, 1000)
  );
}
