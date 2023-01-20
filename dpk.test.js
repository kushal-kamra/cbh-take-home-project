const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns hashed value when input is given", () => {
    const event = { partitionKey: 12345 }
    const trivialKey = deterministicPartitionKey(event);
    console.log('trivialKey ', trivialKey);
    expect(trivialKey).toBe("12345");
  });
});
