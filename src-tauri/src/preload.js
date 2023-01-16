var style = document.createElement("style");
style.innerHTML = `
header,nav,footer {
	display: none
}

body {
	background: #111;
	color: #eee;
}

.button, select, input {
	background: #444 !important;
	border-color: #555 !important;
	color: #eee !important;
}

.button:hover {
	background: #333 !important;
	border-color: #444 !important;
}

.button:active {
	background: #555 !important;
	border-color: #666 !important;
}

.dataList, .dataList-cell, .dataList-table,
.block-container, .block-footer,
.overlay, .overlay-title, .overlay-content, .blockMessage,
.menu, .menu-header, .menu-linkRow,
dt, hr, .block-formSectionHeader,
.block-tabHeader, .block-minorHeader,
.formSubmitRow-main, .formSubmitRow-bar,
.inputGroup-text,
.adminLogin-contentForm {
	border-color: #333 !important;
	background: #222 !important;
	color: #eee !important;
}

.dataList-cell a:not([class="button"]),
.js-overlayClose, .block-minorHeader {
	color: #d00 !important;
}

.menu-content {
	border-color: #d00 !important;
}

.menu-arrow, .tabs-tab.is-active {
	border-bottom-color: #d00 !important;
}

.menu-linkRow {
	border-color: #0000 !important;
}

.menu-linkRow:hover {
	border-left-color: #d00 !important;
}

.inputChoices-choice .iconic i {
	color: #555 !important;
}

.inputChoices-choice .iconic i {
	color: #555 !important;
}

.permissionChoices-choice--no.is-selected {
	background-color: #330 !important;
}

.permissionChoices-choice--yes.is-selected {
	background-color: #030 !important;
}

.permissionChoices-choice--never.is-selected {
	background-color: #300 !important;
}

.iconic.iconic--hideShow i {
	color: #eee !important;
}

.iconic.iconic--hideShow:hover i {
	color: #777 !important;
}

.iconic.iconic--hideShow:active i {
	color: #999 !important;
}

.inputGroup.inputGroup--joined .inputGroup-text {
	background: #333 !important;
}

img[src*="xenforo-logo"], .adminLogin-boardTitle {
	display: none !important;
}

.p-adminLogin input {
  padding-left: 2.5rem !important;
}

.p-adminLogin .adminLogin-row > dd input::placeholder {
	color: inherit !important;
}

.p-adminLogin .adminLogin-row > dd input {
	font-weight: inherit !important;
	padding-left: 35px;
}

.p-adminLogin .adminLogin-row--submit .button .button-text {
	display: none !important;
}

.p-adminLogin .adminLogin-row--submit .button::before {
	color: #eee !important;
	content: "Log In" !important;
}

.p-adminLogin .adminLogin-row > dd .fa--xf.far {
	color: #aaa !important;
	text-shadow: none !important;
	margin-left: 5px !important;
}

.p-adminLogin .iconic--hideShow {
  min-width: 1.5rem !important;
}

.p-adminLogin .iconic-label {
  display: none !important;
}
`;
var x = setInterval(() => {
  if(document.head) {
    document.head.appendChild(style);
    clearInterval(x);
  }
}, 1);