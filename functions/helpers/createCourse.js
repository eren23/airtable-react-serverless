const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: create course
  try {
    const fields = JSON.parse(event.body);
    const createdCourse = await table.create([{ fields }]);
    return formattedReturn(200, createdCourse);
  } catch (err) {
    console.log(err);
    return formattedReturn(500, { msg: "Something went wrong!" });
  }
};
