import { NapiCli } from "@napi-rs/cli"
import { createBuildCommand } from "@napi-rs/cli"
import { merge } from "es-toolkit"
import type { BuildOptions } from "./types"
import { defaultBuildOptions } from "./default-config"
import path from "node:path"

const buildCommand = createBuildCommand(process.argv.slice(2))
const buildOptions = buildCommand.getOptions()
const cli = new NapiCli()

async function main() {
  // 构建
  const { task } = await cli.build(
    merge<Partial<BuildOptions>, BuildOptions>(defaultBuildOptions, buildOptions),
  )
  const outputs = await task

  await cli.createNpmDirs({
    cwd: process.cwd(),
    npmDir: path.join(process.cwd(), "npm"),
    // 是否预演操作, 不写入文件
    dryRun: false,
  })

  await cli.version({
    npmDir: path.join(process.cwd(), "npm"),
    packageJsonPath: path.join(process.cwd(), "package.json"),
  })

  // cli.new()
  // cli.artifacts({})
  // cli.prePublish()
  cli.rename({})
  // cli.universalize

  for (const output of outputs) {
    if (output.kind !== "node") {
      console.log(output.path)
      // const { code } = await format(output.path, await readFileSync(output.path, 'utf-8'), oxfmtConfig as FormatOptions)
      // await writeFileSync(output.path, code)
    }
  }
}

main()
