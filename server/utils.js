const extractDomain = (addr) => addr.split("@")[1].split(".")[0];

module.exports = {
    extractDomain
}