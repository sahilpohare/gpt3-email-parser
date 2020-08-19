function arrayIncludes(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      return false;
    }
  }
  return true;
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

var extractDomain = (addr) => addr.split("@")[1].split(".")[0];

module.exports = {
  arrayIncludes,
  extractDomain,
  asyncForEach
};
