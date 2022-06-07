# **fsorg**

## File System Organization CLI commands using Node.JS

1. Clone the repository by running `git clone https://github.com/SandeepMahapatra/fsorg.git` 
2. Run ` npm install ` in terminal to install node dependencies.
3. Run ` npm link ` in terminal to link the files to environment.

`fs` command is ready to use in any terminal of thee device.

## **Commands**

#### `fs help`

This command displays all the commands that are provied by the `fs` command. 

![Screenshot (450)](https://user-images.githubusercontent.com/66670775/172344048-04d31010-071c-4916-8294-30540b7c2638.png)



#### `fs tree`

This command displays the files and folders that are present inside the current working directory in **tree** format.


#### `fs tree [directory]`

This command displays the files and folders that are present inside the given `[directory]` in **tree** format.

![Screenshot (451)](https://user-images.githubusercontent.com/66670775/172345074-79f5a67c-dd4e-4a19-ab83-353d186db444.png)




#### `fs orgc `

This command copy the files from current working directory and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.

The organized_files contains following category folders
```
                orgnaized_files
                      |- Video
                      |- Audio
                      |- Image
                      |- Document
                      |- App
                      |- Others
   ```
   
 #### `fs orgc [directory]`
 
 This command copy the files from given `[directory]` and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.
 
 
 #### `fs orgc [srcDirectory] [destDirectory]`
 
 This command copy the files from given `[srcDirectory]` and create a `organized_files` folder in `[destDirectory]` and arrange the files according to their type and paste in different category folders.
 
 ![Screenshot (453)](https://user-images.githubusercontent.com/66670775/172346310-0de6f704-bb26-4647-bc45-2e8716a57d32.png)

 
 
 
 #### `fs orgm `

 This command move the files from current working directory and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.

 
 #### `fs orgm [directory]`
 
 This command move the files from given `[directory]` and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.
 
 
 #### `fs orgm [srcDirectory] [destDirectory]`
 
 This command move the files from given `[srcDirectory]` and create a `organized_files` folder in `[destDirectory]` and arrange the files according to their type and paste in different category folders.
 
 ![Screenshot (454)](https://user-images.githubusercontent.com/66670775/172346380-0af3385c-e7d5-4cd2-bc4e-fb2c503b0c8b.png)

 
 
 
 #### `fs orgs `

 This command create shortcut files from current working directory and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.

 
 #### `fs orgs [directory]`
 
 This command create shortcut files from given `[directory]` and create a `organized_files` folder in that same directory and arrange the files according to their type and paste in different category folders.
 
 
 #### `fs orgs [srcDirectory] [destDirectory]`
 
 This command create shortcut files from given `[srcDirectory]` and create a `organized_files` folder in `[destDirectory]` and arrange the files according to their type and paste in different category folders.
 
 ![Screenshot (452)](https://user-images.githubusercontent.com/66670775/172346534-f2b3d669-9c6c-46e1-a625-1d7ad88d426b.png)

 
 
 
 ## node_modules
 - chalk
 - readline-sync
 - windows-shortcuts
