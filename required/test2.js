const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname , 'temp.md'), 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    } else {
        let final = data.replaceAll('\r\n', '\n')
                        .split("\n# ")
let endArray = []
        let suboptions = []
        final.forEach(mainElement => { // each category
            let category = mainElement.slice(0, mainElement.indexOf("\n"))
            let finalArray = []
            
            
            mainElement.replace(category,"").split("## ").forEach((secondElement, pos) => {
                let title
                let flags = []  
                let flag
                let description = []
                let media = []
                let requirements = [] 
                console.log(suboptions)

                secondElement.split("\n").forEach((element, pos) => { // each line break
                    
                    switch(true) {
                        case pos == 0: // is title 2 (flag title)
                            title = element
                            break;
                        case element.startsWith("```md"): // start of flag
                            flag = true
                            break;
                        case flag: // flag string
                            flags.push(element)
                            flag = false
                            break;
                        case element.toString() == ("```"): // end of flag  
                            break;
                        case element.includes("![Alt text](") || element.includes("<video"): // end of flag  
                            media.push(element.replaceAll('![Alt text](','').replaceAll(']','').replaceAll('<video height="auto" width="100%" autoplay loop src="','').replaceAll('" controls title="Title"></video>',''))
                            break;
                        case element == "<br />": // is break line
                            break;
                        case (!flag && !(element == "") && !(element.toString() == ("```"))): // just a break line (ignore)
                            description.push(element)
                            break;
                    }
        
                });
                const conditionsSubflag = ["ew version","ld version","ewer version","lder version"]
                let booleanSubflag = conditionsSubflag.some(el => title?.includes(el))
                
                const json = {
                    "category":category,
                    "title":title,
                    "description":description,
                    "flags":flags,
                    "media":media,
                    "suboptions":suboptions
                }
                if(flags.length == !0) {finalArray.push(json)}
            })
                endArray.push(finalArray)
    
        })
        console.log(JSON.stringify(endArray))

    }
});