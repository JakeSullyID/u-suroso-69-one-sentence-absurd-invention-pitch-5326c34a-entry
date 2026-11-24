import * as fs from 'node:fs';
import * as path from 'node:path';

// An automated cosmetic guard that launches a miniature silk cushion upon detecting a sudden sneeze mid-makeup.
// The comedy arises from applying heavy-duty automotive crash protection to a minor beauty mishap.

const sentence = 'The Eyeliner Sneeze Shield, a magnetic face-visor that detects nasal velocity and deploys a tiny airbag made of silk handkerchiefs one millisecond before impact.';

if (sentence.length < 1 || sentence.length > 220) {
  console.error(`Error: Sentence length ${sentence.length} is out of bounds (1-220 characters).`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, sentence, 'utf8');
