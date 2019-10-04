const globby = require('globby');
const fs = require('fs-extra');
const path = require('path');
const asyncro = require('asyncro');

Promise.resolve()
  .then(async () => {
    const filePaths = await globby('./src/**/*.gen.tsx');
    const filenames = filePaths.map(m => m.replace('src/', ''));
    console.log(filenames);
    await fixImports(filenames);
  })
  .catch(console.error);

async function fixImports(filenames) {
  return asyncro.map(filenames, async file => {
    let rawString = await fs.readFile(
      path.join(__dirname, 'src', file),
      'utf8'
    );
    if (rawString.includes('require')) {
      const name = path.basename(file).replace('.gen.tsx', '');

      const fixedFileString = rawString.replace(
        `const ${name}BS = require('./${name}.bs');`,
        `import * as ${name}BS from './${name}.bs'`
      );

      await fs.writeFile(
        path.join(__dirname, 'src', file),
        fixedFileString,
        'utf8'
      );
    }
  });
}
