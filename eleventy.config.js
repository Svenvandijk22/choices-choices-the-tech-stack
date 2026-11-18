export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory('src');
  eleventyConfig.setOutputDirectory('dist');

  eleventyConfig.addPassthroughCopy('src/styles');
}

export const config = {
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
};