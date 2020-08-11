Setting up a new PC is kind of a pain since I haven't done initial setups for many years.
So here I wrote for how to/ what to set up on a brand-new Mac as a developer in 2020.

## 1. Install XCode
When I ran a command `git --version` and the terminal told like this:
```
xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.
```
So, let's install XCode here: <https://apps.apple.com/us/app/xcode/id497799835?mt=12>

Now let's try `git --version` and the result should be `git version 2.19.0` or something like that.
### ...OK! What now?

## 2. Install node.js & npm
I was disappointed when I run a command `npm install -g [somepackage]` or `npm --version` and my new terminal told `zsh: command not found: npm`.

### Let's start installing Homebrew!

At terminal, run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`, follow the instructions and complete the installation.

If you see
```
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
```
you are good to go!

Let's run `node -v` and should see its version like `v14.7.0`. Also, you can run `npm -v` and see something like `6.14.7`.

