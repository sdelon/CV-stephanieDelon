const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter('markdown', value => md.renderInline(value));
    eleventyConfig.addFilter('isArr', item => Array.isArray(item));

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
