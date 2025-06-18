import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import  syntaxHighlight  from "@11ty/eleventy-plugin-syntaxhighlight";


export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/**/*");

    eleventyConfig.addCollection("sortedNotes", function(collectionApi) {
        return collectionApi.getFilteredByTag("note")
            .filter(item => !item.data.draft)
            .sort((a, b) => {
            return new Date(b.data.date) - new Date(a.data.date);
        });
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "note",
            limit: 0,
        },
        metadata: {
            language: "en",
            title: "Michael The Developer",
            subtitle: "My little side of the internet",
            base: "https://michaelthe.dev",
            author: {
                name: "Michael Nichols",
                email: "me@michaelthe.dev", // Optional
            }
        }
    });

    return {
        dir: {
            output: "_site"
        }
    };

};

