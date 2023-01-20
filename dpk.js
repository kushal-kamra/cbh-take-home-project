const crypto = require("crypto");

const HASH_ALGO = "sha3-512";
const DIGEST_ENCODING = "hex";

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (event.partitionKey) {
    candidate = getDeterministicKeyFromPartitionKey(event.partitionKey);
  } else {
    const data = JSON.stringify(event);
    candidate = getHash(data);
  }
  
  return candidate;
};

function getHash(key, hash = HASH_ALGO, digest = DIGEST_ENCODING) {
  return crypto.createHash(hash).update(candidate).digest(digest);
}

function getDeterministicKeyFromPartitionKey(partition_key) {
  let candidate = partition_key;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getHash(candidate);
  }

  return candidate;
}