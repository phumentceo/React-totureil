export const students = [
    {
        "name" : "lika",
        "gender" : "female",
        "age" : 18,
    },
    {
        "name" : "Panha",
        "gender" : "Male",
        "age" : 22,
    },
    {
        "name" : "Vutha",
        "gender" : "Male",
        "age" : 25,
    },
    {
        "name" : "Veasna",
        "gender" : "Male",
        "age" : 25,
    },
    {
        "name" : "Liya",
        "gender" : "female",
        "age" : 18,
    },
    {
        "name" : "Liza",
        "gender" : "female",
        "age" : 20,
    }
];

export const teachers = [
    {
        "name" : "Han Riya",
        "gender" : "Female",
        "age" : 34,
    },
    {
        "name" : "Vann Liya",
        "gender" : "Female",
        "age" : 38,
    },
    {
        "name" : "Vann Vutha",
        "gender" : "Male",
        "age" : 40,
    }
]

//merge students and teachers
export const allStudentsAndTeachers = [...students,...teachers];


