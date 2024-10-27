# deno_react_router_sample 

React Routerを触ってみるサンプル

# setup

```
docker compose create

docker compose run --rm deno deno install
```

# コンテナを起動する

```
docker compose up
```

# 初期設定時のメモ

https://docs.deno.com/runtime/tutorials/how_to_with_npm/react/ に従って設定する。

```
deno run -A npm:create-vite@latest . --template react-ts
? Current directory is not empty. Please choose how to proceed: › - Use arrow-keys. Return to submit.
    Remove existing files and continue
    Cancel operation
❯   Ignore files and continue

deno install
```
