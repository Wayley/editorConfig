//
const config = {
  'editor.fontSize': 20,
  'editor.fontFamily': "simsun Consolas, 'Courier New', monospace",
  'editor.wordWrap': 'bounded',
  'html.format.wrapLineLength': 70000,
  'editor.wordWrapColumn': 8000000,
  // 对属性进行换行。
  'html.format.wrapAttributes': 'auto',
  'html.format.enable': true,
  'html.format.indentHandlebars': true,
  // 保存时设置文件的格式。格式化程序必须可用，不能自动保存文件，并且不能关闭编辑器。
  'editor.formatOnSave': true,
  'typescript.useCodeSnippetsOnMethodSuggest': true,
  'typescript.npm': null,
  'terminal.integrated.cursorBlinking': true,
  'editor.snippetSuggestions': 'inline',
  // 配置语言的文件关联(如: "*.extension": "html")。这些关联的优先级高于已安装语言的默认关联。
  'files.associations': {
    '*.vue': 'vue',
    '*.wxss': 'css',
    '*.wxml': 'wxml',
    '*.ejs': 'ejs'
  },
  // 为指定的语法定义配置文件或使用带有特定规则的配置文件。
  'emmet.syntaxProfiles': {
    'vue-html': 'html',
    vue: 'html',
    'JavaScript React': 'jsx'
  },
  'vetur.validation.template': false,
  //
  'window.zoomLevel': 0,
  'extensions.ignoreRecommendations': true,
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
  'eslint.autoFixOnSave': true,
  'prettier.singleQuote': true,
  'prettier.semi': true,
  'vetur.format.defaultFormatter.html': 'js-beautify-html',
  'vetur.format.defaultFormatterOptions': {
    'js-beautify-html': {
      wrap_attributes: 'auto' // [auto|force|force-aligned|force-expand-multiline] ["auto"]
    },
    prettyhtml: {
      printWidth: 1000,
      singleQuote: false,
      wrapAttributes: false,
      sortAttributes: false
    }
  },
  'workbench.iconTheme': 'material-icon-theme',
  // 启用后，按下 TAB 键，将展开 Emmet 缩写。
  'emmet.triggerExpansionOnTab': true,
  // 一个制表符等于的空格数。该设置在 "editor.detectIndentation" 启用时根据文件内容可能会被覆盖。
  'editor.detectIndentation': true,
  'editor.tabSize': 2,
  'emmet.includeLanguages': {
    'vue-html': 'html',
    javascript: 'javascriptreact'
  },
  // 启用后，将在保存文件时剪裁尾随空格。
  'files.trimTrailingWhitespace': true,
  'material-icon-theme.showUpdateMessage': false,
  // vscode-fileheader settings
  'fileheader.Author': 'wzheng(hb_wangzheng@163.com)',
  'fileheader.LastModifiedBy': 'wzheng(hb_wangzheng@163.com)',
  'python.formatting.provider': 'yapf',
  'todohighlight.include': [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
    '**/*.html',
    '**/*.php',
    '**/*.css',
    '**/*.scss',
    '**/*.vue' // 添加vue文件的TODO
  ],
  'workbench.startupEditor': 'welcomePage',
  'window.menuBarVisibility': 'default',
  'workbench.activityBar.visible': true,
  '[wxml]': {},
  'javascript.implicitProjectConfig.experimentalDecorators': true,
  // koroFileHeader settings
  'fileheader.customMade': {
    Author: 'wzheng(hb_wangzheng@163.com)',
    Company: 'uooc',
    Date: 'Do not edit',
    LastEditors: 'wzheng(hb_wangzheng@163.com)',
    LastEditTime: 'Do not edit'
  },
  'fileheader.cursorMode': {},
  // `Document this` settings
  'docthis.authorName': 'wzheng',
  'docthis.includeDateTag': true,
  'docthis.includeAuthorTag': true,
  'docthis.includeDescriptionTag': true,
  'sync.gist': '29c221bdf6df1c03c0a35d9d1ccd7a12'
};
export default config;
