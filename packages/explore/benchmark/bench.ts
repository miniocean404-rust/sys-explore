import { Bench } from "tinybench"

import { getOsExploreInfo, getTargetTriple } from "../index.js"

function getOsInfoJS() {
  return {
    platform: process.platform,
    arch: process.arch,
    version: process.version,
  }
}

const bench = new Bench()

bench.add("Native getOsExploreInfo", () => {
  getOsExploreInfo()
})

bench.add("JavaScript getOsInfo", () => {
  getOsInfoJS()
})

bench.add("Native getTargetTriple", () => {
  getTargetTriple()
})

async function main() {
  await bench.run()
  console.table(bench.table())
}

main()
