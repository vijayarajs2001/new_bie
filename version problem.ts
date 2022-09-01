interface androidVersion {
    version: string,
    releaseDate: Date,
    features: string[],
    bugID: string[],
    author: string[],
    type: string
}
interface bugList{
    bugID:string
    description:string
}
const androidVersion = [
    {
        version: "5.1 Lollipop",
        releaseDate: new Date("02-03-2015"),
        features: ["67A", "87Z"],
        bugID: ["bugid#436"],
        author: ["Google", "Android"],
        type: "Enhancement"
    },
    {
        version: "6 Marshmallow",
        releaseDate: new Date("02-10-2015"),
        features: ["67A", "76K"],
        bugID: ["bugid#305"],
        author: ["Google", "TestRIG"],
        type: "Major"
    },
    {
        version: "7 Nougat",
        releaseDate: new Date("22-08-2016"),
        features: ["91A", "55B"],
        bugID: ["bugid#315"],
        author: ["Google", "snapdragon"],
        type: "Patch"
    },
    {
        version: "7.1 Nougat)",
        releaseDate: new Date("04-10-2016"),
        features: ["56A", "34A"],
        bugID: ["bugid#325"],
        author: ["Android", "Google"],
        type: "Enhancement"
    },
    {
        version: "8 Oreo",
        releaseDate: new Date("09-08-2017"),
        features: ["45G", "45J"],
        bugID: ["bugid#335"],
        author: ["Android"],
        type: "Patch"
    },
    {
        version: "8.1 oreo",
        releaseDate: new Date("05-12-2017"),
        features: ["76G", "54H"],
        bugID: ["bugid#345"],
        author: ["TestRIG", "Android"],
        type: "Enhancement"
    },
    {
        version: "9  pie",
        releaseDate: new Date("06-08-2018"),
        features: ["1X", "66T"],
        bugID: ["bugid#375"],
        author: ["Angular", "TestRIG"],
        type: "Major"
    },
    {
        version: "10",
        releaseDate: new Date("03-09-2019"),
        features: ["45H", "54H"],
        bugID: ["bugid#395"],
        author: ["Angular", "Google"],
        type: "Major"
    },
    {
        version: "11",
        releaseDate: new Date("08-09-2020"),
        features: ["7Z", "48X"],
        bugID: ["bugid#405"],
        author: ["snapdragon", "TestRIG"],
        type: "Major"
    },
    {
        version: "12",
        releaseDate: new Date("04-10-2021"),
        features: ["99Z", "7Z"],
        bugID: ["bugid#436"],
        author: ["unknown5", "snapdragon"],
        type: "Enhancement"
    },
]
const bugList = [{
    bugID: "bugid#436",
    description: "Fixes issue."
},
{
    bugID: "bugid#305",
    description: "Performance."
},
{
    bugID: "bugid#315",
    description: "Support for file-based encryption bugs."
},
{
    bugID: "bugid#325",
    description: "Major Developer features(Shortcut,Circular app icons,Fingerprint sensor gesture) and Battery usage alerts bugs."
},
{
    bugID: "bugid#335",
    description: "System-wide Autofill framework and Google Play Protect bugs."
},
{
    bugID: "bugid#345",
    description: "Android Oreo Go Edition and Automatic light and dark themes bugs."
},
{
    bugID: "bugid#375",
    description: "Adaptive Battery prediction and Auto-Brightness feature bugs."
},
{
    bugID: "bugid#395",
    description: "Support for the AV1 video codec, the HDR10+ video format and Support for the WPA3 Wi-Fi security protocol bugs."
},
{
    bugID: "bugid#405",
    description: "Wireless Android Auto on devices with 5 GHz Wi-Fi and Screen recorder bugs."
},
{
    bugID: "bugid#436",
    description: "Android Runtime (ART) and Performance improvements bugs."
}
]
// -----------------------------------------------------------------------------------------------------------------------------------
function releaseCountInYear(year: any) {
    let yearVariable = androidVersion.filter(n => n.releaseDate.toString().includes(year))
    console.log(`The number of updates on (${year}) : ${yearVariable.length}`)
    console.log(yearVariable)
}
// -----------------------------------------------------------------------------------------------------------------------------------
function bugIDInputUpdateFinder(bugid: string) {
    let count = 0
    bugList.forEach(elements => {
        if (elements.bugID == bugid) {
            count++
            console.log("BugID description", count, ":", elements.description)
        }
    })
    let bugVariable = androidVersion.filter(n => n.bugID.includes(bugid))
    console.log(`The number of versions on this bugID (${bugid}) : ${bugVariable.length}`)
    console.log(bugVariable)
}
// -----------------------------------------------------------------------------------------------------------------------------------
function highestUpdatesByAuthor() {
    let authorList: any[] = []
    androidVersion.forEach(element => {
        for (let i of element.author) {
            authorList.push(i)
        }
    });
    let count = 1
    let authorName = 0
    let counter = 1
    for (let i = 0; i < authorList.length; i++) {
        for (let j = 1; j < authorList.length; j++) {
            if (authorList[i] == authorList[j]) {
                count++
            }
            if (counter < count) {
                counter = count
                authorName = authorList[i]
            }
        }
        count = 0
    }
    console.log(`"The author named (${authorName}) released more number of version and the count is ${counter}"`)
}
// -----------------------------------------------------------------------------------------------------------------------------------
function typesOfUpdateSearch(str: string) {
    let typeVariable = androidVersion.filter(n => n.type.includes(str))
    console.log(`Total versions having ${str} type releases : ${typeVariable.length} `)
    console.log(typeVariable)
}
// -----------------------------------------------------------------------------------------------------------------------------------
function featuresKeyWordSearch(str: string) {
    let featureVariable = androidVersion.filter(n => n.features.includes(str))
    console.log(`The number of versions with this key feature (${str}) : ${featureVariable.length}`)
    console.log(featureVariable)
}
// -----------------------------------------------------------------------------------------------------------------------------------
console.log("Q.1.How many releases were amde in year?")
console.log("ANS :"), releaseCountInYear(2017)
// -----------------------------------------------------------------------------------------------------------------------------------
console.log("Q.2.In which release specific bugID is present?")
console.log("ANS :"), bugIDInputUpdateFinder("bugid#436")
// -----------------------------------------------------------------------------------------------------------------------------------
console.log("Q.3.Which author has worked in many releases?")
console.log("ANS :"), highestUpdatesByAuthor()
// -----------------------------------------------------------------------------------------------------------------------------------
console.log("Q.4.How many releases were type of major?")
console.log("ANS :"), typesOfUpdateSearch("Major")
// -----------------------------------------------------------------------------------------------------------------------------------
console.log("Q.5.How many releases have the specific feature name")
console.log("ANS :"), featuresKeyWordSearch("67A")