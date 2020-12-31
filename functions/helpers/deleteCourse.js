const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");
module.exports = async (event) => {
  // TODO: delete course
  try {
    const { id } = JSON.parse(event.body);
    const deletedCourse = await table.destroy(id);
    return formattedReturn(200, deletedCourse);
  } catch (err) {
    console.log(err);
    return formattedReturn(500, { msg: "Something went wrong!" });
  }
};
