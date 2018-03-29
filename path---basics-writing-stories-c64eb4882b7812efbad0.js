webpackJsonp([0xa2b435d0ec5e],{669:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/","/basics/quick-start-guide/","/basics/slow-start-guide/","/basics/guide-react/","/basics/guide-vue/","/basics/guide-angular/","/basics/writing-stories/","/basics/exporting-storybook/","/basics/faq/","/basics/community/","/basics/live-examples/"],configurations:["/configurations/default-config/","/configurations/custom-webpack-config/","/configurations/custom-babel-config/","/configurations/add-custom-head-tags/","/configurations/serving-static-files/","/configurations/env-vars/","/configurations/cli-options/"],testing:["/testing/react-ui-testing/","/testing/structural-testing/","/testing/interaction-testing/","/testing/css-style-testing/","/testing/manual-testing/"],addons:["/addons/introduction/","/addons/using-addons/","/addons/addon-gallery/","/addons/writing-addons/","/addons/api/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/addons/addon-gallery/"},frontmatter:{title:"Addon Gallery",id:"addon-gallery"}}},{node:{fields:{slug:"/addons/api/"},frontmatter:{title:"API",id:"api"}}},{node:{fields:{slug:"/addons/introduction/"},frontmatter:{title:"Intro to Addons",id:"introduction"}}},{node:{fields:{slug:"/addons/using-addons/"},frontmatter:{title:"Using Addons",id:"using-addons"}}},{node:{fields:{slug:"/addons/writing-addons/"},frontmatter:{title:"Writing Addons",id:"writing-addons"}}},{node:{fields:{slug:"/configurations/add-custom-head-tags/"},frontmatter:{title:"Add Custom Head Tags",id:"add-custom-head-tags"}}},{node:{fields:{slug:"/configurations/cli-options/"},frontmatter:{title:"CLI Options",id:"cli-options"}}},{node:{fields:{slug:"/configurations/custom-babel-config/"},frontmatter:{title:"Custom Babel Config",id:"custom-babel-config"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom Webpack Config",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/default-config/"},frontmatter:{title:"Default Config",id:"default-config"}}},{node:{fields:{slug:"/configurations/env-vars/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/serving-static-files/"},frontmatter:{title:"Serving Static Files",id:"serving-static-files"}}},{node:{fields:{slug:"/basics/community/"},frontmatter:{title:"Community",id:"community"}}},{node:{fields:{slug:"/basics/exporting-storybook/"},frontmatter:{title:"Exporting Storybook as a Static App",id:"exporting-storybook"}}},{node:{fields:{slug:"/basics/faq/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/basics/guide-angular/"},frontmatter:{title:"Storybook for Angular",id:"guide-angular"}}},{node:{fields:{slug:"/basics/guide-react/"},frontmatter:{title:"Storybook for React",id:"guide-react"}}},{node:{fields:{slug:"/basics/guide-vue/"},frontmatter:{title:"Storybook for Vue",id:"guide-vue"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/basics/live-examples/"},frontmatter:{title:"Live Examples",id:"live-examples"}}},{node:{fields:{slug:"/basics/quick-start-guide/"},frontmatter:{title:"Quick Start Guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/slow-start-guide/"},frontmatter:{title:"Slow start guide",id:"slow-start-guide"}}},{node:{fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},{node:{fields:{slug:"/testing/css-style-testing/"},frontmatter:{title:"CSS/Style Testing",id:"css-style-testing"}}},{node:{fields:{slug:"/testing/interaction-testing/"},frontmatter:{title:"Interaction Testing",id:"interaction-testing"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/testing/react-ui-testing/"},frontmatter:{title:"Introduction: React UI Testing",id:"react-ui-testing"}}},{node:{fields:{slug:"/testing/structural-testing/"},frontmatter:{title:"Structural Testing",id:"structural-testing"}}}]},markdownRemark:{html:'<p>Storybook is all about writing stories. Usually a story contains a single state of one of your components. That’s like a visual test case.</p>\n<blockquote>\n<p>Technically, a story is a function that returns a React element.</p>\n</blockquote>\n<p>You can write a set of stories for your components and you’ll get a storybook.</p>\n<h2 id="keeping-your-stories"><a href="#keeping-your-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Keeping your stories</h2>\n<p>There’s no hard and fast rule for this. But, keeping stories close to your components is a good idea.</p>\n<p>For example, let’s say your UI components live in a directory called: <code>src/components.</code> Then you can write stories inside the <code>src/stories</code> directory.</p>\n<p>This is just one way to do that. You can always edit your storybook config file and ask it to load stories from anywhere you want.</p>\n<h2 id="writing-stories"><a href="#writing-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing stories</h2>\n<p>This is how you write stories:\n(Let’s assume there’s a component called “Button” in <code>src/components/Button.js</code>.)</p>\n<pre><code class="language-js">// file: src/stories/index.js\n\nimport React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { action } from \'@storybook/addon-actions\';\nimport Button from \'../components/Button\';\n\nstoriesOf(\'Button\', module)\n  .add(\'with text\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n  ))\n  .add(\'with some emoji\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>&#x3C;span role="img" aria-label="so cool">😀 😎 👍 💯&#x3C;/span>&#x3C;/Button>\n  ));\n</code></pre>\n<p>This will show stories in your storybook like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0c959.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 60.149130074565036%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVQoz6WSzU7CQBSFu+ABTDTxAdy4qC7URzMmjr4Aex6AkgBRWsLaPcYVTTGAhp8iiGhoQ/pDaafTjvcWJTEuqHKSL2lu2jPn3KlQr9ztPD3WLybT16u3yZToAx14Ie8fJpnNDGIYBhnqQ6LrOjENnM3IZDwh/V6fDHoDovf1y/FofN197p4rFWVXuC3fHDm2xaMo4pRSHsccFHAeWvwvWi6XXK7Ip0JeyouWZXlgxoIgoD4QReCMcJ4GOJ2zMAydarV6IpRKJXE0GtH5fM49z4sRxiLMGadUhAl93/cSw3K5LJqmSWFX3LbtGKMzxpIa8HIaVksKgpWhJEmi67oUIuMeMOEPw036ZVgoFETHsSkMviv/K+G68srQWRtiZQRSJ7eO5htIDOFbT1GUVWXYnY91F4sFgznDG0fBr5SG8CuhK8vyiVAsFo9xf9sK09ZqtTMhm80eaJr20Gw2NaABz2qr1VI7nY7abrfT0AA0VVXvc7ncoQDKAHvA/pagR+YTnCwixRM5eeIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Basic stories"\n        title=""\n        src="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-44d6a.png"\n        srcset="/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-f4799.png 173w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-b3b1d.png 345w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-44d6a.png 690w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-bc0f7.png 1035w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-b50e5.png 1380w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0ed32.png 2070w,\n/static/basic-stories-b2a95a15ed80624b7a3e1f20fccee589-0c959.png 2414w"\n        sizes="(max-width: 690px) 100vw, 690px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>This is just our core API for writing stories. In addition to this, you can use the official and third party Storybook <a href="/addons/introduction">addons</a> to get more functionality.</p>\n<h2 id="loading-stories-dynamically"><a href="#loading-stories-dynamically" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading stories dynamically</h2>\n<p>Sometimes, you will want to load your stories dynamically rather than explicitly requiring them in the Storybook config file.</p>\n<p>For example, you may write stories for your app inside the <code>src/components</code> directory with the <code>.stories.js</code> extension. Then you will want to load them at once. Simply edit your config directory at <code>.storybook/config.js</code> as follows:</p>\n<pre><code class="language-js">import { configure } from \'@storybook/react\';\n\nconst req = require.context(\'../src/components\', true, /\\.stories\\.js$/)\n\nfunction loadStories() {\n  req.keys().forEach((filename) => req(filename))\n}\n\nconfigure(loadStories, module);\n</code></pre>\n<p>Here we use Webpack’s <a href="https://webpack.js.org/guides/dependency-management/#require-context">require.context</a> to load modules dynamically. Have a look at the relevant Webpack <a href="https://webpack.js.org/guides/dependency-management/#require-context">docs</a> to learn more about how to use require.context.</p>\n<p>The <strong>React Native</strong> packager resolves all the imports at build-time, so it’s not possible to load modules dynamically. If you don’t want to import all your stories manually you can use <a href="https://github.com/elderfo/react-native-storybook-loader">react-native-storybook-loader</a> to automatically create the import statements for all of your stories. </p>\n<h2 id="using-decorators"><a href="#using-decorators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Decorators</h2>\n<p>A decorator is a way to wrap a story with a common set of component(s). Let’s say you want to center all your stories. Here is how we can do this with a decorator:</p>\n<pre><code class="language-js">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport MyComponent from \'../my_component\';\n\nstoriesOf(\'MyComponent\', module)\n  .addDecorator(story => (\n    &#x3C;div style={{textAlign: \'center\'}}>\n      {story()}\n    &#x3C;/div>\n  ))\n  .add(\'without props\', () => &#x3C;MyComponent />)\n  .add(\'with some props\', () => &#x3C;MyComponent text="The Comp"/>);\n</code></pre>\n<p>Here we only add the decorator for the current set of stories. (In this example, we add it just for the <strong>MyComponent</strong> story group.)</p>\n<p>But, you can also add a decorator <strong>globally</strong> and it’ll be applied to all the stories you create. This is how to add a decorator like that:</p>\n<pre><code class="language-js">import React from \'react\';\nimport { configure, addDecorator } from \'@storybook/react\';\n\naddDecorator(story => (\n  &#x3C;div style={{textAlign: \'center\'}}>\n    {story()}\n  &#x3C;/div>\n));\n\nconfigure(function () {\n  // ...\n}, module);\n</code></pre>\n<h2 id="using-markdown"><a href="#using-markdown" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Markdown</h2>\n<p>As of storybook 3.3, <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> can be used in storybook by default. All you need to do is import a markdown file, and it will automatically be parsed into an HTML string. You can then use that string in any addon that supports HTML (such as notes).</p>\n<pre><code class="language-js">import React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport { withNotes } from \'@storybook/addon-notes\';\nimport MyComponent from \'./MyComponent\';\nimport someMarkdownText from \'./someMarkdownText.md\';\n\nstoriesOf(\'Component\', module)\n  .add(\'With Markdown\', withNotes(someMarkdownText)(() => &#x3C;MyComponent/>));\n</code></pre>\n<h2 id="nesting-stories"><a href="#nesting-stories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nesting stories</h2>\n<p>You can organize your stories in a nesting structures using ”/” as a separator:</p>\n<pre><code class="language-js">// file: src/stories/index.js\n\nimport React from \'react\';\nimport { storiesOf } from \'@storybook/react\';\nimport Button from \'../components/Button\';\n\nstoriesOf(\'My App/Buttons/Simple\', module)\n  .add(\'with text\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>Hello Button&#x3C;/Button>\n  ));\n\nstoriesOf(\'My App/Buttons/Emoji\', module)\n  .add(\'with some emoji\', () => (\n    &#x3C;Button onClick={action(\'clicked\')}>&#x3C;span role="img" aria-label="so cool">😀 😎 👍 💯&#x3C;/span>&#x3C;/Button>\n  ));\n</code></pre>\n<h2 id="generating-nesting-path-based-on-__dirname"><a href="#generating-nesting-path-based-on-__dirname" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generating nesting path based on __dirname</h2>\n<p>The name is just a javascript string, by using a template literal, you can easily interpolate data.</p>\n<p>One example would be to use <code>base</code> from <a href="https://github.com/storybooks/paths.macro"><code>paths.macro</code></a>:</p>\n<pre><code class="language-js">import React from \'react\';\nimport base from \'paths.macro\';\n\nimport { storiesOf } from \'@storybook/react\';\n\nimport BaseButton from \'../components/BaseButton\';\n\nstoriesOf(`Other|${base}/Dirname Example`, module)\n  .add(\'story 1\', () => &#x3C;BaseButton label="Story 1" />)\n  .add(\'story 2\', () => &#x3C;BaseButton label="Story 2" />);\n</code></pre>\n<p><em>This uses <a href="https://github.com/kentcdodds/babel-plugin-macros">babel-plugin-macros</a></em>.</p>\n<h2 id="run-multiple-storybooks"><a href="#run-multiple-storybooks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run multiple storybooks</h2>\n<p>You can run multiple storybooks for different kinds of stories (or components). To do that, you can create different NPM scripts to start different stories. See:</p>\n<pre><code class="language-json">{\n   "scripts": {\n     "start-storybook-for-theme": "start-storybook -p 9001 -c .storybook-theme",\n     "start-storybook-for-app": "start-storybook -p 8001 -c .storybook-app"\n   }\n}\n</code></pre>',fields:{slug:"/basics/writing-stories/"},frontmatter:{title:"Writing Stories",id:"writing-stories"}}},pathContext:{slug:"/basics/writing-stories/"}}}});
//# sourceMappingURL=path---basics-writing-stories-c64eb4882b7812efbad0.js.map