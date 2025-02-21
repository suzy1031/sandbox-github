# github actions

## workflow
ref:

- https://zenn.dev/farstep/books/learn-github-actions/viewer/artifacts-and-cache
- https://zenn.dev/jordan/articles/b6c1e905adab31

## act

ref:
- https://zenn.dev/rescuenow/articles/db176ea5fe2c92

### github codespaces
```bash
$ docker --version
Docker version 27.3.1-1, build ce1223035ac3ab8922717092e63a184cf67b493d

$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
.
..
...
$ echo >> /home/codespace/.bashrc
$ echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/codespace/.bashrc
$ eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
$ brew install act

$ act
.
..
...
[Node.js CI/Build and Test] 🏁  Job succeeded
```

## release tag and note
wip

ref:
- [release-drafter](https://github.com/release-drafter/release-drafter)

- [PRマージごとにDraftリリースノートを自動生成する](https://zenn.dev/chocoyama/articles/654a80f96d10ef)