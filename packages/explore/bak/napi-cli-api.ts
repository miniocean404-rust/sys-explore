/**
 * NAPI-RS CLI 完整 API 配置选项
 * 涵盖从项目创建、开发、构建到发布的完整生命周期
 */

/**
 * 1. cli.new() - 创建新的 NAPI-RS 项目
 * 用于初始化一个新的 Rust + Node.js 原生模块项目
 */
const newProjectOptions = {
  // 项目创建路径
  path: "./my-napi-project",

  // 项目名称
  name: "my-napi-module",

  // 最低支持的 Node-API 版本
  minNodeApiVersion: 4,

  // 包管理器 (yarn/pnpm/npm)
  packageManager: "yarn" as "yarn" | "pnpm" | "npm",

  // 开源协议
  license: "MIT",

  // 编译目标平台
  targets: [
    "x86_64-apple-darwin",
    "aarch64-apple-darwin",
    "x86_64-pc-windows-msvc",
    "x86_64-unknown-linux-gnu",
  ],

  // 启用默认目标平台
  enableDefaultTargets: true,

  // 是否启用所有目标平台
  enableAllTargets: false,

  // 自动生成 TypeScript 类型定义
  enableTypeDef: true,

  // 生成 GitHub Actions 工作流
  enableGithubActions: true,

  // 测试框架 (ava/vitest/jest)
  testFramework: "ava" as "ava" | "vitest" | "jest",

  // 是否为演练模式（不实际创建文件）
  dryRun: false,
}

/**
 * 4. cli.artifacts() - 收集构建产物
 * 从 GitHub Actions 或本地构建中收集 .node 文件到 npm 包中
 */
const artifactsOptions = {
  // package.json 路径
  packageJsonPath: "./package.json",

  // 构建产物目录
  outputDir: "./artifacts",

  // npm 包目录
  npmDir: "./npm",

  // 构建输出目录（用于 wasm32-wasi-*）
  buildOutputDir: "./dist",
}

/**
 * 6. cli.rename() - 重命名项目
 * 重命名整个 NAPI-RS 项目（包括包名、二进制名等）
 */
const renameOptions = {
  // package.json 路径
  packageJsonPath: "./package.json",

  // npm 包目录
  npmDir: "./npm",

  // 新项目名称
  name: "new-project-name",

  // 新的 .node 文件名
  binaryName: "new_binary",

  // 新的 npm 包名
  packageName: "@scope/new-package",

  // Cargo.toml 路径
  manifestPath: "./Cargo.toml",

  // 新仓库地址
  repository: "https://github.com/user/new-repo",

  // 新项目描述
  description: "New project description",
}

/**
 * 7. cli.universalize() - 创建通用二进制文件
 * 将多个平台的二进制文件合并为一个通用二进制（如 macOS universal）
 */
const universalizeOptions = {
  // 工作目录
  cwd: "./my-napi-project",

  // NAPI 配置文件路径
  configPath: "./napi.config.json",

  // package.json 路径
  packageJsonPath: "./package.json",

  // 输出目录（包含待合并的 .node 文件）
  outputDir: "./dist",
}

/**
 * 完整的 API 使用示例
 */
async function demonstrateAllApis() {
  const { NapiCli } = await import("@napi-rs/cli")
  const cli = new NapiCli()

  // 初始化一个完整的 NAPI-RS 项目脚手架，包括 Rust 代码、Node.js 绑定、测试和 CI/CD 配置。
  await cli.new(newProjectOptions)

  // 收集构建产物
  await cli.artifacts(artifactsOptions)

  // 批量重命名项目中的所有相关标识符（包名、二进制名、仓库地址等）
  await cli.rename(renameOptions)

  // 将构建好的二进制文件合并成一个通用二进制文件
  await cli.universalize(universalizeOptions)
}
