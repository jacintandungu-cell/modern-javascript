function mergeUserArrays(...arrays) {
  // Merge all arrays into one
  const mergedUsers = arrays.flat();

  // Create a merge date (current date/time)
  const mergeDate = new Date().toISOString();

  // Return as an object
  return {
    mergedUsers,
    mergeDate
  };
}

// Example usage:
const siteAUsers = ["alice", "bob", "charlie"];
const siteBUsers = ["diana", "edward"];
const siteCUsers = ["frank", "grace"];

const result = mergeUserArrays(siteAUsers, siteBUsers, siteCUsers);

console.log(result);

