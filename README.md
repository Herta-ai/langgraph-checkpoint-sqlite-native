<div align="center">
  <h1>🚀 langgraph-checkpoint-sqlite-native</h1>
  <p><strong>A blazing fast, zero-dependency native SQLite Checkpoint Saver for LangGraph.js</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/langgraph-checkpoint-sqlite-native"><img src="https://img.shields.io/npm/v/langgraph-checkpoint-sqlite-native.svg?style=for-the-badge&color=success" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/langgraph-checkpoint-sqlite-native"><img src="https://img.shields.io/npm/dm/langgraph-checkpoint-sqlite-native.svg?style=for-the-badge&color=blue" alt="npm downloads" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" /></a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/Node.js-%3E%3D_22.5.0-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Bun-Compatible-black?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
    <img src="https://img.shields.io/badge/Deno-Compatible-white?style=for-the-badge&logo=deno&logoColor=black" alt="Deno" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>

  <p>
    <a href="#english">English</a> • <a href="#中文">中文</a>
  </p>
</div>

---

## 🌟 Why this package?

The official LangGraph SQLite checkpoint saver relies on `better-sqlite3`, which requires Python, a C++ toolchain, and `node-gyp` to compile. This often leads to frustrating installation issues across different environments and CI/CD pipelines.

This library solves this by using the **built-in native SQLite modules** introduced in recent JS runtimes (`node:sqlite` and `bun:sqlite`). 

### ✨ Key Features

- 🚫 **Zero Native Dependencies:** Say goodbye to `node-gyp` build errors and prebuild binaries.
- ⚡️ **Blazing Fast:** Direct use of built-in runtime modules for maximum performance.
- 🌍 **Multi-Runtime:** Optimized and ready for **Node.js**, **Bun**, and **Deno**.
- 🔌 **Drop-in Replacement:** 100% compatible with the `@langchain/langgraph` checkpointer interface.

---

<h2 id="english">📖 English Documentation</h2>

### 📦 Installation

Choose your favorite package manager:

```bash
npm install langgraph-checkpoint-sqlite-native
# or
bun add langgraph-checkpoint-sqlite-native
# or
pnpm add langgraph-checkpoint-sqlite-native
```

> **Note for Node.js users:** This package requires **Node.js 22.5.0** or higher to use the built-in `node:sqlite` module.

### 🚀 Usage

The library provides specific classes optimized for your runtime.

#### Node.js & Deno
```typescript
import { NodejsSqliteSaver } from "langgraph-checkpoint-sqlite-native";
// Alternatively, import specifically for Node.js (or Deno):
// import { SqliteSaver } from "langgraph-checkpoint-sqlite-native/nodejs";

const saver = NodejsSqliteSaver.fromConnString(":memory:"); // Or path to a file like "database.sqlite"
// If using the specific import:
// const saver = SqliteSaver.fromConnString(":memory:");
```

#### Bun
```typescript
import { BunSqliteSaver } from "langgraph-checkpoint-sqlite-native";
// Alternatively, import specifically for Bun:
// import { SqliteSaver } from "langgraph-checkpoint-sqlite-native/bun";

const saver = BunSqliteSaver.fromConnString(":memory:");
// If using the specific import:
// const saver = SqliteSaver.fromConnString(":memory:");
```

#### 🛠️ Complete Example with LangGraph

```typescript
import { StateGraph, START, END } from "@langchain/langgraph";
import { NodejsSqliteSaver } from "langgraph-checkpoint-sqlite-native";

// 1. Initialize the saver
const saver = NodejsSqliteSaver.fromConnString(":memory:");

// 2. Define your StateGraph
const graph = new StateGraph({
  channels: {
    messages: {
      value: (x, y) => x.concat(y),
      default: () => [],
    }
  }
})
  .addNode("agent", () => ({ messages: ["Hello from the agent!"] }))
  .addEdge(START, "agent")
  .addEdge("agent", END);

// 3. Compile with the checkpointer
const app = graph.compile({ checkpointer: saver });
```

---

<h2 id="中文">📖 中文文档</h2>

### 📦 安装

使用您最喜欢的包管理器：

```bash
npm install langgraph-checkpoint-sqlite-native
# 或者
bun add langgraph-checkpoint-sqlite-native
# 或者
pnpm add langgraph-checkpoint-sqlite-native
```

> **Node.js 用户请注意:** 此包依赖 Node.js 内置的 `node:sqlite` 模块，因此需要 **Node.js 22.5.0** 及以上版本。

### 🚀 使用方法

本库为不同的运行时提供了经过优化的特定类。

#### Node.js & Deno
```typescript
import { NodejsSqliteSaver } from "langgraph-checkpoint-sqlite-native";
// 或者您也可以直接引入特定运行时的版本（Deno 同 Node.js）：
// import { SqliteSaver } from "langgraph-checkpoint-sqlite-native/nodejs";

const saver = NodejsSqliteSaver.fromConnString(":memory:"); // 也可以指定文件路径，例如 "database.sqlite"
// 如果使用特定运行时的引入方式：
// const saver = SqliteSaver.fromConnString(":memory:");
```

#### Bun
```typescript
import { BunSqliteSaver } from "langgraph-checkpoint-sqlite-native";
// 或者您也可以直接引入 Bun 的专属版本：
// import { SqliteSaver } from "langgraph-checkpoint-sqlite-native/bun";

const saver = BunSqliteSaver.fromConnString(":memory:");
// 如果使用特定运行时的引入方式：
// const saver = SqliteSaver.fromConnString(":memory:");
```

#### 🛠️ 配合 LangGraph 使用的完整示例

```typescript
import { StateGraph, START, END } from "@langchain/langgraph";
import { NodejsSqliteSaver } from "langgraph-checkpoint-sqlite-native";

// 1. 初始化 saver
const saver = NodejsSqliteSaver.fromConnString(":memory:");

// 2. 定义您的 StateGraph
const graph = new StateGraph({
  channels: {
    messages: {
      value: (x, y) => x.concat(y),
      default: () => [],
    }
  }
})
  .addNode("agent", () => ({ messages: ["Hello from the agent!"] }))
  .addEdge(START, "agent")
  .addEdge("agent", END);

// 3. 携带 checkpointer 编译图
const app = graph.compile({ checkpointer: saver });
```
