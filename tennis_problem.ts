interface tennisMatch {
    name: string
    rank: Number
    numberOfMatchPlayed: Number
}
const tennisMatch: any = [
    {
        name: "Player1",
        rank: 1,
        NumberOfMatchesPlayed: 455,
        numberOfMatchsWon: 440
    }, {
        name: "Player2",
        rank: 2,
        NumberOfMatchesPlayed: 423,
        numberOfMatchsWon: 403
    }, {
        name: "Player3",
        rank: 3,
        NumberOfMatchesPlayed: 401,
        numberOfMatchsWon: 376
    }, {
        name: "Player4",
        rank: 4,
        NumberOfMatchesPlayed: 332,
        numberOfMatchsWon: 302
    }, {
        name: "Player5",
        rank: 5,
        NumberOfMatchesPlayed: 302,
        numberOfMatchsWon: 267
    }, {
        name: "Player6",
        rank: 6,
        NumberOfMatchesPlayed: 286,
        numberOfMatchsWon: 246
    }, {
        name: "Player7",
        rank: 7,
        NumberOfMatchesPlayed: 225,
        numberOfMatchsWon: 180
    }, {
        name: "Player8",
        rank: 8,
        NumberOfMatchesPlayed: 200,
        numberOfMatchsWon: 151
    }
    , {
        name: "Player9",
        rank: 9,
        NumberOfMatchesPlayed: 195,
        numberOfMatchsWon: 142
    }, {
        name: "Player10",
        rank: 10,
        NumberOfMatchesPlayed: 183,
        numberOfMatchsWon: 126
    }, {
        name: "Player11",
        rank: 11,
        NumberOfMatchesPlayed: 181,
        numberOfMatchsWon: 121
    }, {
        name: "Player12",
        rank: 12,
        NumberOfMatchesPlayed: 172,
        numberOfMatchsWon: 106
    }, {
        name: "Player13",
        rank: 13,
        NumberOfMatchesPlayed: 172,
        numberOfMatchsWon: 102
    }, {
        name: "Player14",
        rank: 14,
        NumberOfMatchesPlayed: 166,
        numberOfMatchsWon: 94
    }, {
        name: "Player15",
        rank: 15,
        NumberOfMatchesPlayed: 155,
        numberOfMatchsWon: 78
    }, {
        name: "Player16",
        rank: 16,
        NumberOfMatchesPlayed: 150,
        numberOfMatchsWon: 70
    }
]
var count = 0
//---------------------------------------------------------
function GrandSlamDrawMatchScheduling(tennisMatch: any) {
    var arr = []
    for (let i of tennisMatch) {
        arr.push(i.name)
    }
    rateOfWinningAddition(tennisMatch)
    return scheduling(arr)
}
// --------------------------------------------------------
function rateOfWinningAddition(tennisMatch: any) {
    for (let l of tennisMatch) {
        l["rateOfWinning"] = [l.numberOfMatchsWon / (l.NumberOfMatchesPlayed * l.rank) * 100]
    }
}
// --------------------------------------------------------
function scheduling(arr: any) {
    const array = []
    for (let i = 0; i < arr.length / 2; i++) {
        array.push([arr[i], arr[arr.length - 1 - i]])
    }
    const schedule1 = []
    const array2 = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            schedule1.push(array[i])
        } else {
            array2.push(array[i])
        }
    }
    for (let i of array2.reverse()) {
        schedule1.push(i)
    }
    console.log("ROUND ", count += 1)
    const sch = []
    for (let index = 0; index < schedule1.length; index++) {
        sch.push(schedule1[index][0] + ' vs ' + schedule1[index][1])

    }
    console.log(sch)
    return (winningStrategy(schedule1))
}
//---------------------------------------------------------
function winningStrategy(schedule1: any): any {
    const emptArray = []
    for (let i = 0; i < schedule1.length; i++) {
        emptArray.push(comparison(schedule1[i][0], schedule1[i][1]))
    }
    return normalScheduling(emptArray)
}
//---------------------------------------------------------
function rateOfWinningRatio(str: string) {
    for (let v of tennisMatch) {
        if (v.name == str) {
            v.NumberOfMatchesPlayed + 1
            return v.rateOfWinning
        }
    }
}
//---------------------------------------------------------
function comparison(str1: string, str2: string) {
    var player1WinningRate = rateOfWinningRatio(str1)
    var player2WinningRate = rateOfWinningRatio(str2)
    if ((Math.floor(player1WinningRate - player2WinningRate) >= 49) && (Math.floor(player1WinningRate - player2WinningRate) < 50)) {
        const emptyArray = [str1, str2]
        return emptyArray[Math.floor(Math.random() * 2)]
    }
    else {
        if (Number(player1WinningRate) > Number(player2WinningRate)) {
            return str1
        }
        else {
            return str2
        }
    }
}
//---------------------------------------------------------
function normalScheduling(emptArray: any) {
    if (emptArray.length > 1) {
        count += 1
        const schedule2 = []
        for (let i = 0; i < emptArray.length / 2; i++) {
            schedule2.push([emptArray[i + i], emptArray[i + i + 1]])
        }
        if (schedule2.length == 2) {
            const sch1 = []
            for (let index = 0; index < schedule2.length; index++) {
                sch1.push(schedule2[index][0] + ' vs ' + schedule2[index][1])
            }
            console.log('ROUND ', count)
            console.log("SEMIFINALS")
            console.log(sch1)
        }
        else if (schedule2.length == 1) {
            const sch1 = []
            for (let index = 0; index < schedule2.length; index++) {
                sch1.push(schedule2[index][0] + ' vs ' + schedule2[index][1])
            }
            console.log('ROUND ', count)
            console.log("FINALS")
            console.log(sch1)
        }
        else {
            const sch1 = []
            for (let index = 0; index < schedule2.length; index++) {
                sch1.push(schedule2[index][0] + ' vs ' + schedule2[index][1])
            }
            console.log('ROUND ', count)
            console.log(sch1)
        }
        const schedule1 = schedule2
        return winningStrategy(schedule1)
    }
    else {
        console.log("The winner is", emptArray[0])
    }
}
GrandSlamDrawMatchScheduling(tennisMatch)