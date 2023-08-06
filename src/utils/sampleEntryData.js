function sampleEntryData(req, res) {
  console.log("sample Data Entry");
  res.status(200).json({
    fullName: "abc",
    email: "abc@gmail.com",
    password: "abc",
    description: "Hello! I am abc. Glad to meet you.",
    age: 40,
    gender: "male or female or other or nopreference",
  });
}

module.exports = { sampleEntryData };
