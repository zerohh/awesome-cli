module.exports = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  "type-enum": [
    "build", // 构造工具的或者外部依赖的改动，例如webpack，npm
    "ci", // 与CI（持续集成服务）有关的改动
    "chore", // 构建过程或者辅助工具的改变
    "docs", // 文档
    "feat", // 新功能
    "fix", // 修复bug
    "perf", // 提高性能的改动
    "refactor", // 重构
    "revert", // 执行git revert
    "style", // 格式
    "test" // 测试
  ],
  "body-leading-blank": [1, "always"],
  "body-max-line-length": [2, "always", 100]
};