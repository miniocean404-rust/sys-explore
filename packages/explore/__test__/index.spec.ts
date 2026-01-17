import test from "ava"

import { getOsExploreInfo, getTargetTriple, initCustomTraceSubscriber, Platform } from "../index.js"

test("getOsExploreInfo 返回正确的应用信息", (t) => {
  const info = getOsExploreInfo()

  t.is(typeof info.hwndId, "number")
  t.is(typeof info.title, "string")
  t.is(typeof info.bundleId, "string")
  t.is(typeof info.isActive, "boolean")
  t.is(typeof info.dir, "string")
  t.is(typeof info.exec, "string")
  t.true([Platform.windows, Platform.macos].includes(info.platform))
})

test("getTargetTriple 返回字符串", (t) => {
  const triple = getTargetTriple()
  t.is(typeof triple, "string")
  t.true(triple.length > 0)
})

test("initCustomTraceSubscriber 可以调用", (t) => {
  t.notThrows(() => {
    initCustomTraceSubscriber()
  })

  t.notThrows(() => {
    initCustomTraceSubscriber("./trace.log")
  })
})
