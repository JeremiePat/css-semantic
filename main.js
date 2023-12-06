import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/blood.css';
import 'highlight.js/styles/github-dark.css';
import './theme.css';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

let deck = new Reveal({
   plugins: [ Notes, Markdown, Highlight ]
})

deck.initialize({
  hash: true,
  hashOneBasedIndex: true,
  transitionSpeed: 'slow',
});
