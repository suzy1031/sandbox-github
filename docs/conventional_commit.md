# Conventional Commits

## commitlint + husky + git-cz
ref
- [commitlintというコミットメッセージのリンターを導入してみた（前編：huskyを使ってコミット前にリントする）](https://zenn.dev/kalubi/articles/27fa889c338cdf)
- [Conventional Commitsでコミットメッセージを分かりやすくする](https://soudai-s.com/align-commit-messages-by-conventional-commits)

## Usage

```bash
git add <STAGE_FILE_NAME>
npm run commit
> sandbox-github@1.0.0 commit
> git-cz

? Select the type of change that you're committing: 🎸  feat:
機能の追加、変更、削除（セマンティックバージョニングのマイナー以上）
? Write a short, imperative mood description of the change:
  [-------------------------------------------------------------] 55 chars left
   feat: add conventional commit help tools
? Provide a longer description of the change:

? List any breaking changes
  BREAKING CHANGE:
? Issues this commit closes, e.g #123:
yarn run v1.22.22
$ /workspaces/sandbox-github/node_modules/.bin/commitlint --edit .git/COMMIT_EDITMSG
Done in 0.44s.
[feature/convetional_commit 161d1f4] feat: 🎸 add conventional commit help tools
 3 files changed, 94 insertions(+), 1 deletion(-)
 create mode 100644 changelog.config.json
```