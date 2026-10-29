const test = require('node:test');
const assert = require('node:assert/strict');
const { searchPages } = require('../assets/software/search.js');
const pages = [{title:'Getting Started', description:'Installation and first steps', url:'/getting-started/'}, {title:'Theory', description:'Models and theory', url:'/theory/'}];
test('matches titles without case sensitivity and searches descriptions', () => {
  assert.deepEqual(searchPages(pages, ' STARTED '), [pages[0]]);
  assert.deepEqual(searchPages(pages, 'models'), [pages[1]]);
});
test('empty input and unmatched input return no results', () => {
  assert.deepEqual(searchPages(pages, '  '), []);
  assert.deepEqual(searchPages(pages, 'unknown'), []);
});
test('finds the actual navigation entries by their displayed labels', () => {
  const source = require('node:fs').readFileSync(require('node:path').join(__dirname, '../_data/software_nav.yml'), 'utf8').replace(/\r/g, '');
  const navigation = Array.from(source.matchAll(/- title: (.+)\n  label: (.+)\n  url: (.+)\n  description: (.+)/g), m => ({title:m[1], label:m[2], url:m[3], description:m[4]}));
  assert.equal(navigation.length, 5);
  assert.equal(searchPages(navigation, 'installation')[0]?.title, 'Getting Started');
  assert.equal(searchPages(navigation, 'examples')[0]?.title, 'Tutorials');
});
