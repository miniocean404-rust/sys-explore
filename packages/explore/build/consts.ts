import path from 'path'

export const cwd = process.cwd()
export const manifestPath = path.join(cwd, 'Cargo.toml')
export const configPath = path.join(cwd, 'napi.json')
export const packageJsonPath = path.join(cwd, 'package.json')
export const targetDir = path.join(cwd, 'target')
export const outputDir = path.join(cwd, 'dist')
export const dts = path.join(outputDir, 'index.d.ts')

export const platform = true
export const jsPackageName = 'explore'
export const constEnum = true
export const jsBinding = 'index.js'
export const noJsBinding = false

