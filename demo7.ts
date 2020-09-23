//类
class Person {
    name: string = "gao";
    getName() {
        return this.name
    }
}

//类的继承
class Teacher extends Person {
    getTeacherName() {
        return 'haha'
    }
    //覆盖父类
    getName() {
        return super.getName() + 'zw'  //调用父类的getName方法
    }
}

const person = new Person();
console.log(person.getName())

const teacher = new Teacher();
console.log(teacher.getName())
console.log(teacher.getTeacherName())

