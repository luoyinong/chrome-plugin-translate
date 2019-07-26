module.exports = {
    pages: {
      background: {
        // page 的入口
        entry: "src/views/background/main.js",
        // 模板来源
        template: "public/background.html",
        // 在 dist/index.html 的输出
        filename: "background.html",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "background"]
      },
      option: {
        // page 的入口
        entry: "src/views/option/main.js",
        // 模板来源
        template: "public/option.html",
        // 在 dist/index.html 的输出
        filename: "option.html",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "option"]
      },
      popup: {
        // page 的入口
        entry: "src/views/popup/main.js",
        // 模板来源
        template: "public/popup.html",
        // 在 dist/index.html 的输出
        filename: "popup.html",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "popup"]
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。
    //   subpage: "src/subpage/main.js"
    }
  };