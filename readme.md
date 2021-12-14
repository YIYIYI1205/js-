# js递归实现树结构
## input
```const array1 = [
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
    }
]
```
## output
```
[
    {
        id: 1,
        parentId: '',
        children: [
            {
                id: 2,
                parentId: 1
            },
            {
                id: 3,
                parentId: 1
            }
        ]
    },
    {
        id: 4,
        parentId: '',
        children: [
            {
                id: 5,
                parentId: 4
            },
            {
                id: 6,
                parentId: 4,
                children: [
                    {
                        id: 7,
                        parentId: 6,
                        children: [
                            {
                                id: 8,
                                parentId: 7
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
