class Employee{

    constructor(id, name,dept, salary){
        this.id=id
        this.name=name
        this.dept=dept
        this.salary=salary
        
    }

    showEmp(){
        console.log("員工編號: " + this.id)
        console.log("員工姓名: " + this.name)
        console.log("所屬部門: " + this.dept)
        console.log("員工底薪: " + this.salary)
    }
    getEmpInfo(){
        var str = this.id + this.name + this.dept + this.salary
        document.getElementById("demo").innerHTML=str

    }
    //setter
    setId(id){
        this.id = id
    }
    setName(name){
        this.name = name
    }
    setSalary(salary){
        this.salary = salary
    }
    setDept(dept){
        this.id = id
    }


    //getter
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }
    getDept(){
        return this.Dept
    }


    
}