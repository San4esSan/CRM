"use strict";

const allStudents = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов'];
const failedStudents = ['Сидоров','Смирнов','Попов'];

const filter = () => {
    const res = allStudents.filter(item => !failedStudents.includes(item))
    return console.log(res)
}

filter(allStudents, failedStudents)

