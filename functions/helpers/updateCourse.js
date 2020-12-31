const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: update course
  try {
    const { id, ...fields } = JSON.parse(event.body); // grab the id and everything else is just fields
    const updateCourse = await table.update([{ id, fields }]);
    return formattedReturn(200, updateCourse);
  } catch (err) {
    console.log(err);
    return formattedReturn(500, { msg: "Something went wrong!" });
  }
};
