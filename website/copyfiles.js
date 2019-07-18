//Ref: https://gabrieleromanato.name/nodejs-renaming-files-recursively
//Ref: http://nephewapps.com/2018/09/09/programmatically-edit-any-file-in-nodejs/
'use strict';

const path = require('path');
const fs = require('fs');

const listDir = (dir, fileList = []) => {

    let files = fs.readdirSync(dir);

    files.forEach(file => {
        let name = file.replace(':', '');
        let titleSplit = name.split('.md');

        if (titleSplit[1] == '') {
            let title = titleSplit[0];
            let src = path.join(dir, file);
            let newSrc = path.join(dir, name);
            let oldContent = fs.readFileSync(src, 'utf-8');
            let newTitle;
            if (file.includes(':')) {
                newTitle = file.split(':-')[1].split('.md')[0].replace(/-/g, ' ')
            }
            else {
                newTitle = title.replace(/-/g, ' ');
            }
            fileList.push({
                oldSrc: src,
                newSrc: newSrc,
                oldContent: oldContent,
                newContent: `---\r\nid: ${title.replace(/\./g, '-')}\r\ntitle: ${newTitle}\r\n---\r\n\r\n`,
            });

        }
    });

    return fileList;
};

let foundFiles = listDir('../../AkuminaDev.wiki');
foundFiles.forEach(f => {
    fs.unlinkSync(f.oldSrc);
    fs.writeFileSync(f.newSrc, f.newContent + f.oldContent);
});
