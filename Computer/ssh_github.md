# How to use the same GitHub SSH connection to a new Mac

## How can I see my SSH key and where is it stored?

**How?**  Run `cat ~/.ssh/id_rsa.pub` on Terminal on your old computer and you will see a long string with your email address. 
**Where?** Open home directory on your Finder and press `Cmd + Shift + .` You will see hidden folders and `.ssh` folder is one of them.
<p align="center">
<img src="/images/ssh.png" width="400">
</P>

## Moving .ssh folder to a new Mac
My recommendation is to make a backup of your old Mac, connect the backup to your new Mac and copy the entire `.ssh` folder to your new Mac's home directory.

## Modifying .gitconfig file on a new Mac
If you try to commit something, Terminal might say `fatal: bad config line 4 in file /Users/usename/.gitconfig`. Configure your git by entering commands as follows:
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

## That's it!

*Reference:*
- <https://stackoverflow.com/questions/3828164/how-do-i-access-my-ssh-public-key>
- <https://devconnected.com/how-to-setup-ssh-keys-on-github/>
- <https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration>