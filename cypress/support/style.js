// cypress/support/style.ts
export {};
const css = /* css */ `
:root {
--background: #222426;
--dark-background: #171717;
--lighter-background: #3a3a3a;
--light-element: #444648;
--active-button: #292c2e;
--active-color: #ccc;
--button-border: 1px solid #3a3a3a;
--command-border: 1px solid #606060;
--command-important-border: 1px solid #aaaaaa;
--active-command-border: 1px solid #707070;
--highlighted-text: #dddddd;
--pinned-command-background-color: #ccc;
--pinned-command-background-color-hover: #531f77;
--icons-color: #F0F8FF;
--icons-hover-color: #cccccc;
/* passed and failed commands */
--failed-command-background-color: inherit;
--state-failed-background-color: #ae3a46;
--state-failed-color: #f0adad;
}
.reporter {
background-color: var(--background);
}
.runner header {
background-color: var(--background);
box-shadow: none;
}
.runner header .url {
color: #aaaaaa;
background-color: var(--background);
}
.runner .url:hover,
.runner .url:focus,
.runner .url:active {
color: #eeeeee;
}
.runner .highlighted .url {
background-color: var(--light-element);
}
.runner .url:focus {
background-color: var(--light-element);
}
.runner .viewport-info button {
text-shadow: none;
}
.runner .viewport-info button:hover {
color: var(--active-color);
}
.runner {
background-image: none;
background-color: #2a2a2a;
box-shadow: none;
}
.reporter .container {
border: none;
box-shadow: none;
}
.runner .selector-playground-toggle:hover {
background: none;
color: var(--active-color);
}
.reporter .runnable-header {
background-color: var(--background);
color: var(--active-color);
}
.reporter header {
background-color: var(--background);
color: var(--active-color);
border-bottom: var(--button-border);
}
.reporter header button {
background-color: var(--background);
}
.reporter header button:hover {
background-color: var(--background);
color: var(--active-color);
}
.reporter .runnable {
background-color: var(--background);
}
.reporter .runnable:hover {
background-color: var(--background);
}
.reporter .commands-container {
background-color: var(--active-button);
}
.reporter .command-wrapper{
background-color: var(--active-button);
}
.reporter .command-wrapper:hover {
background-color: var(--active-button);
color: var(--highlighted-text);
box-shadow: none;
-webkit-box-shadow: none;
}
.reporter .focus-tests button {
border-right: var(--button-border);
}
.reporter .stats .duration {
border-left: var(--button-border);
border-right: var(--button-border);
}
.reporter .controls > span:last-child button {
border-right: var(--button-border);
}
.reporter .command-state-pending > span > .command-wrapper {
background-color: var(--lighter-background);
}
.reporter .command-type-parent {
border-top: var(--command-border);
}
.reporter .command-type-parent:hover {
border-top: var(--active-command-border);
}
.runner .aut-iframe {
background-color: var(--background);
}
.reporter .runnable.suite > div > .runnable-wrapper .runnable-title {
color: var(--active-color);
}
.reporter .hooks-container .hook-name:hover {
color: var(--highlighted-text);
}
.reporter .command-is-pinned > span > .command-wrapper {
background-color: var(--pinned-command-background-color);
}
// .reporter .command-is-pinned > span > .command-wrapper:hover {
// background-color: var(--pinned-command-background-color-hover);
// }
.runner .message-controls {
background-color: var(--background);
}
.runner .snapshot-controls.showing-selection .toggle-selection {
background-color: var(--active-button);
}
.runner .snapshot-controls button:active {
background-color: var(--active-button);
color: var(--active-color);
}
.runner .snapshot-controls .snapshot-state-picker button.state-is-selected {
background-color: #666565;
color: yellow;
}
.runner .snapshot-controls button:hover {
background-color: var(--active-button);
color: var(--active-color);
}
.reporter .command-name-assert.command-state-passed .command-method span {
background-color: #045e45;
color: #17cf20;
}
.reporter ::-webkit-scrollbar-thumb {
background-color: var(--background);
}
.reporter ::-webkit-scrollbar-track {
background-color: var(--dark-background);
}
.reporter .command-state-failed > span > .command-wrapper {
background-color: var(--failed-command-background-color);
}
.reporter .command-state-failed > span > .command-wrapper:hover {
background-color: var(--failed-command-background-color);
}
.reporter .command-name-assert.command-state-failed .command-method span {
background-color: var(--state-failed-background-color);
color: var(--state-failed-color);
}
.reporter .runnable pre {
background-color: var(--background);
}
.reporter .runnable pre:hover {
background-color: var(--lighter-background);
}
.reporter pre {
border: var(--command-important-border);
}
.reporter .runnable-controls i {
color: var(--icons-color);
}
.reporter .runnable-controls i:hover {
color: var(--icons-hover-color);
}
.reporter
.runnable.suite.runnable-failed
> div
> .runnable-wrapper
.collapsible-more {
margin-left: 5px;
}
div#app > div {
	background: var(--dark-background);
}
div.Pane.vertical.Pane1 > nav {
	background: var(--dark-background);
	color: white;
	border: var(--button-border);
}
div.Pane.vertical.Pane1 > nav svg {
	color: grey;
}
div.Pane.vertical.Pane2 {
	border-color: var(--button-border) !important;
}
div.treeChild > span:hover {
	background-color: transparent;
}
.reporter strong {
    color: #fff;
    font-weight: normal;
}
.reporter .command-method {
    padding: 1px 2px 0;
    display: inline-block;
    font-size: 11px;
    min-width: 80px;
    font-weight: 600;
    color: #fff;
}
.reporter .command-is-pinned > span > .command-wrapper .command-wrapper-text .command-pin {
    color: #fff;
}
`;

// NOTE: Hide XHR log .command-name-request, .command-name-xhr { display: none }

const ID = "cypress-dark";
const { head } = parent.window.document;
const darkCss = head.querySelector(`#${ID}`);
if (!darkCss) {
  Cypress.$(head).append(
    /* html */ `<style type="text/css" id="${ID}">${css}</style>`
  );
}
