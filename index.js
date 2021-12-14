const array1 = [
    {
        id: 1,
        parentId: ''
    },
    {
        id: 2,
        parentId: 1
    },
    {
        id: 3,
        parentId: 1
    },
    { 
        id: 4,
        parentId: ''
    },
    {
        id: 5,
        parentId: 4
    },
    {
        id: 6,
        parentId: 4
    },
    {
        id: 7,
        parentId: 6
    },
    {
        id: 8,
        parentId: 7
    },
]
function deep(array, parentId) {
    const res = []
    let temp
    for(const arr of array) {
        if (arr.parentId === parentId) {
            var obj = {
                ...arr
            }
            temp = deep(array.slice(1), arr.id)
            if (temp.length > 0) {
                obj.children = temp
            }
            res.push(obj)
        }
    }
    return res
}
console.log(deep(array1, ''))