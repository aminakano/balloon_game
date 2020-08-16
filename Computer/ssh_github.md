# How to use the same GitHub SSH connection to a new Mac

## How can I see my SSH key and where is it stored?

**How?**  Run `cat ~/.ssh/id_rsa.pub` on Terminal on your old computer and you will see a long string with your email address. 
**Where?** Open home directory on your Finder and press `Cmd + Shift + .` You will see hidden folders and `.ssh` folder is one of them.

## Moving .ssh folder to a new Mac
My recommendation is to make a backup of your old Mac, connect the backup to your new Mac and copy the entire `.ssh` folder to your new Mac's home directory.

## That's it!

*Reference:*
- <https://stackoverflow.com/questions/3828164/how-do-i-access-my-ssh-public-key>
- <https://devconnected.com/how-to-setup-ssh-keys-on-github/>
