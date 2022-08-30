androidVersion = [
    {
        version: "5.1 Lollipop (API 22)",
        releaseDate: ("March", "2", "2015"),
        features: ["High-definition voice calls"],
        bugID: ["bugid#295"],
        author: ["unknown"],
        type: ["Enhancement"]
    },
    {
        version: "6 Marshmallow (API 23)",
        releaseDate: ("October", "2", "2015"),
        features: ["Native fingerprint reader support"],
        bugID: ["bugid#305"],
        author: ["unknown"],
        type: ["Patch"]
    },
    {
        version: "7 Nougat (API 24)",
        releaseDate: ("August", "22", "2016"),
        features: ["Support for file-based encryption"],
        bugID: ["bugid#315"],
        author: ["unknown"],
        type: ["Release"]
    },
    {
        version: "7.1 Nougat (API 25)",
        releaseDate: ("October", "4", "2016"),
        features: ["Major Developer features(Shortcut,Circular app icons,Fingerprint sensor gesture) and Battery usage alerts."],
        bugID: ["bugid#325"],
        author: ["unknown1"],
        type: ["Enhancement"]
    },
    {
        version: "8 Oreo (API 26)",
        releaseDate: ("August", "21", "2017"),
        features: ["System-wide Autofill framework and Google Play Protect"],
        bugID: ["bugid#335"],
        author: ["unknown1"],
        type: ["Patch"]
    },
    {
        version: "8.1 oreo (API 27)",
        releaseDate: ("December", "5", "2017"),
        features: ["Android Oreo Go Edition and Automatic light and dark themes"],
        bugID: ["bugid#345"],
        author: ["unknown2"],
        type: ["Release"]
    },
    {
        version: "9  pie (API 28)",
        releaseDate: ("August", "6", "2018"),
        features: ["Adaptive Battery prediction and Auto-Brightness feature"],
        bugID: ["bugid#375"],
        author: ["unknown3"],
        type: ["Patch"]
    },
    {
        version: "10 (API 29)",
        releaseDate: ("September", "3", "2019"),
        features: ["Support for the AV1 video codec, the HDR10+ video format and Support for the WPA3 Wi-Fi security protocol"],
        bugID: ["bugid#395"],
        author: ["unknown3"],
        type: ["Release"]
    },
    {
        version: "11 (API 30)",
        releaseDate: ("September", "8", "2020"),
        features: ("Wireless", "Android", "Auto", "on","devices", "with", "5GHz", "Wi-Fi", "and", "Screen recorder"),
        bugID: ["bugid#405"],
        author: ["unknown4"],
        type: ["Release"]
    },
    {
        version: "12 (API 31)",
        releaseDate: ("October", "4", "2021"),
        features: ("Android", "Runtime", "(ART)", "and", "Performance", "improvements"),
        bugID: ["bugid#436"],
        author: ["unknown5"],
        type: ["Enhancement"]
    },
]
function updateCountInYear(year) {
    count = 0
    for (i of androidVersion) {
        if (i.releaseDatez == year) {
            count++
            console.log(i)
        }
    }
    console.log(`The number of updates on (${year}): ${count}`)
}
updateCountInYear(2017)

function bugIDInputUpdateFinder(bugid) {
    for (i of androidVersion) {
        if (i.bugID == bugid) {
            console.log(i)
        }
    }
}
bugIDInputUpdateFinder("bugid#436")

// function featuresKeyWordSearch(a) {
//     for (i of androidVersion) {
//         if ((i.features) = a) {
//             console.log(i)
//         }
//     }
// }
// featuresKeyWordSearch("android")
