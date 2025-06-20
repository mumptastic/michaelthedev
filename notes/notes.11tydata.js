const {DateTime} = require("luxon");

module.exports = {
    layout: "layout.html",
    tags: "note",
    eleventyComputed: {
        dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
    }
}