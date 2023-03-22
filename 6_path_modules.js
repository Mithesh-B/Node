const path =require('path')

console.log(path.sep)// \

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

