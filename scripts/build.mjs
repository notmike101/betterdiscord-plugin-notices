import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

const config = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  sourcemap: true,
  plugins: [dtsPlugin()],
};

async function main() {
  await build({
    ...config,
    outfile: 'dist/index.js',
    format: 'cjs',
  });

  await build({
    ...config,
    outfile: 'dist/index.esm.js',
    format: 'esm',
  });
}

main();
