// improvised data source for in-memory data persistence
/*
TableMap should be a singleton for data persistence. It can have multiple dataMaps for testing
DataMap is a Map where shoots OR comments are stored. 
Shoots are keyed by their ID and contains a list of IDs of comments they are associated with

*/

// function createTableMap() {
//   return new Map();
// }

// // add a new instance of data persistence
// function addNewDataMap(tableSet, tableReference) {
//   tableSet.name = tableReference;
//   tableSet[tableReference] = new Map();
//   return tableSet;
// }

// data = createTableMap();
// data = addNewDataMap(data, "shoots");
// data = addNewDataMap(data, "comments");

// module.exports = data