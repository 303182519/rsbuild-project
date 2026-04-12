# Rsbuild project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
pnpm run dev
```

Build the app for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!

## 由于prettier和biome的冲突，导致代码格式化问题
- 解决方法：关闭prettier的格式化功能，只使用biome的格式化功能
- 配置方法：在.vscode/settings.json中添加以下配置
```json
{
  "prettier.enable": false,
}
```
## 当需要排序时，手动选择 Prettier 进行格式化，而不是设置为默认：

1. 选中需要排序的代码
2. 右键选择 "Format Selection"
3. 选择 "Prettier" 作为格式化器