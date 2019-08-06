//
const config = {
  "editor.fontSize": 20,
  "editor.fontFamily": "simsun Consolas, 'Courier New', monospace",
  "editor.wordWrap": "bounded",
  "html.format.wrapLineLength": 70000,
  "editor.wordWrapColumn": 80000,
  // 对属性进行换行。
  "html.format.wrapAttributes": "aligned-multiple",
  "html.format.enable": true,
  "html.format.indentHandlebars": true,
  // 保存时设置文件的格式。格式化程序必须可用，不能自动保存文件，并且不能关闭编辑器。
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "files.autoSave": "off",
  "files.autoSaveDelay": 3000,
  "typescript.npm": null,
  "terminal.integrated.cursorBlinking": true,
  "editor.snippetSuggestions": "inline",
  // 配置语言的文件关联(如: "*.extension": "html")。这些关联的优先级高于已安装语言的默认关联。
  "files.associations": {
    "*.vue": "vue",
    "*.wxss": "css",
    "*.wxml": "wxml",
    "*.ejs": "ejs",
    "*.cjson": "jsonc",
    "*.wxs": "javascript"
  },
  // 为指定的语法定义配置文件或使用带有特定规则的配置文件。
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html",
    "JavaScript React": "jsx"
  },
  "vetur.validation.template": true,
  //
  "window.zoomLevel": 0,
  "extensions.ignoreRecommendations": true,
  // "eslint.options": {
  //     "plugins": [
  //         "html"
  //     ]
  // },
  // "eslint.validate": [
  //     "javascript",
  //     "javascriptreact",
  //     "html",
  //     "vue"
  // ],
  "eslint.autoFixOnSave": true,
  "prettier.singleQuote": false, // 单引号 or 双引号
  "prettier.semi": true, // 行尾是否打印分号
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto" // [auto|force|force-aligned|force-expand-multiline] ["auto"]
    },
    "prettyhtml": {
      "printWidth": 100000,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": false
    },
    "prettier": {
      "semi": false,
      "singleQuote": true
    }
  },
  "workbench.iconTheme": "vscode-icons",
  // 启用后，按下 TAB 键，将展开 Emmet 缩写。
  "emmet.triggerExpansionOnTab": true,
  // 一个制表符等于的空格数。该设置在 "editor.detectIndentation" 启用时根据文件内容可能会被覆盖。
  "editor.detectIndentation": true,
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    "vue-html": "html",
    "javascript": "javascriptreact",
    "blade": "html",
    "wxml": "html"
  },
  // 启用后，将在保存文件时剪裁尾随空格。
  "files.trimTrailingWhitespace": true,
  "material-icon-theme.showUpdateMessage": false,
  "python.formatting.provider": "yapf",
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss",
    "**/*.vue" // 添加vue文件的TODO
  ],
  "workbench.startupEditor": "welcomePage",
  "window.menuBarVisibility": "default",
  "workbench.activityBar.visible": true,
  "[wxml]": {},
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  // koroFileHeader settings
  // ctrl+alt+i
  "fileheader.customMade": {
    "Author": "wzheng(hb_wangzheng@163.com)",
    "Github": "https://github.com/wayley",
    "Company": "uooc",
    "Date": "Do not edit",
    "LastEditors": "wzheng(hb_wangzheng@163.com)",
    "LastEditTime": "Do not edit",
    "Description": ""
  },
  "fileheader.cursorMode": {},
  // `Document this` settings
  // ctrl+alt+d
  "docthis.authorName": "wzheng",
  "docthis.includeDateTag": true,
  "docthis.includeAuthorTag": true,
  "docthis.includeDescriptionTag": true,
  "sync.gist": "29c221bdf6df1c03c0a35d9d1ccd7a12",
  // Automatically compile SASS/SCSS file after saving
  "easysass.compileAfterSave": false,
  // 控制是否在搜索中跟踪符号链接。
  "search.followSymlinks": false,
  // Use single quotes instead of double quotes in JSX
  "prettier.jsxSingleQuote": true,
  "javascript.preferences.quoteStyle": "single",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 定义函数参数括号前的空格处理方式。
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "minapp-vscode.disableAutoConfig": true
};
export default config;
