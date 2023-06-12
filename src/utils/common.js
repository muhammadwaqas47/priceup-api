exports.generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
// exports.nestedObjectsToDotNotation = (object) => {
//   const updatedObject = {};

//   // Process the payload to convert nested objects into dot notation
//   for (const key in object) {
//     if (typeof object[key] === "object") {
//       for (const nestedKey in object[key]) {
//         updatedObject[`${key}.${nestedKey}`] = object[key][nestedKey];
//       }
//     } else {
//       updatedObject[key] = object[key];
//     }
//   }

//   return updatedObject;
// };

exports.nestedObjectsToDotNotation = (object, parentKey = "") => {
  const updatedObject = {};

  for (const key in object) {
    const nestedKey = parentKey ? `${parentKey}.${key}` : key;
    const value = object[key];

    if (typeof value === "object" && !Array.isArray(value)) {
      const nestedObject = exports.nestedObjectsToDotNotation(value, nestedKey);
      Object.assign(updatedObject, nestedObject);
    } else {
      updatedObject[nestedKey] = value;
    }
  }

  return updatedObject;
};
