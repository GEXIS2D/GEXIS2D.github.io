const test = require('node:test');
const assert = require('node:assert/strict');
const { searchPages } = require('../assets/software/search.js');
const pages = [{title:'Getting Started', description:'安装与入门', url:'/getting-started/'}, {title:'Theory', description:'模型与理论', url:'/theory/'}];
test('matches English without case sensitivity and Chinese descriptions', () => {
  assert.deepEqual(searchPages(pages, ' STARTED '), [pages[0]]);
  assert.deepEqual(searchPages(pages, '理论'), [pages[1]]);
});
test('empty input and unmatched input return no results', () => {
  assert.deepEqual(searchPages(pages, '  '), []);
  assert.deepEqual(searchPages(pages, 'unknown'), []);
});
test('finds the actual navigation entries by their displayed Chinese labels', () => {
  const source = require('node:fs').readFileSync(require('node:path').join(__dirname, '../_data/software_nav.yml'), 'utf8').replace(/\r/g, '');
  const navigation = Array.from(source.matchAll(/- title: (.+)\n  label: (.+)\n  url: (.+)\n  description: (.+)/g), m => ({title:m[1], label:m[2], url:m[3], description:m[4]}));
  assert.equal(navigation.length, 5);
  assert.equal(searchPages(navigation, '入门')[0]?.title, 'Getting Started');
  assert.equal(searchPages(navigation, '教程')[0]?.title, 'Tutorials');
});
