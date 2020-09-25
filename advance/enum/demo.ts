//枚举类型
enum Status{
    OFFLINE,
    // ONLINE=4,
    ONLINE,
    DELETED
}
console.log(Status.OFFLINE)//0
console.log(Status.ONLINE)//4
console.log(Status.DELETED)//5
console.log(Status[0])//OFFLINE
// const Status = {
//     OFFLINE: 0,
//     ONLINE: 1,
//     DELETED: 2
// }

function getResult(status: any) {
    if (status === Status.OFFLINE) {
        return 'offline'
    } else if (status === Status.ONLINE) {
        return 'online'
    } else if (status === Status.DELETED) {
        return 'deleted'
    }
    return 'error'
}
console.log( getResult(Status.OFFLINE));