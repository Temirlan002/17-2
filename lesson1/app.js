const a = "a"; //string

let c = 10 // number
// c = "dfd"

const bool = true //boolean
const bool2 = false

const obj = {
    key: 'value',
    username: "Sara",
    data: {
        first_name: 'Jack',
        last_name: "vorobey"
    }
}
console.log(obj.username, obj.key, obj.data.last_name)

const arr = ["hello", true, false, 20, {}]

console.log(arr[2])

const arr2 = [
    {
        key: 'value'
    },
    {
        username: 'moto'
    },
    {
        username: 'moto'
    },
    [
        {
            monkeyName: 'lala'
        }
    ]
]
console.log(arr2[1].username,  arr2[3][0].monkeyName)

// const name = prompt("Ваше имя?")
// console.log(name)
// const age = alert("вы еще не совершеннолетний")

//const first_number = prompt("Введите первое число")
//const last_number = prompt("Введите второе число")

// if(first_number > last_number){
//     console.log(first_number + ">" + last_number)
// } else if(last_number > first_number){
//     console.log(last_number + ">" + first_number)
// } else {
//     console.log(first_number + "=" + last_number)
// }

// const age = prompt("Сколько вам лет?")

// if(age < 18){
//     console.log("вам нельзя входить")
// } else  if(age => 18){
//     console.log('вам можно')
// }

console.log(30 * 40 - 203)
console.log(-30 *  203)
console.log(3**4)
console.log(3 +  20 % 11)