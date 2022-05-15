var taskModel = require('../models/task');

class TaskController{
    constructor(){
        this.taskModel = taskModel;
    };
    //lấy toàn bộ công việc
    async getTask({subject}){
        try{
            console.log(subject);
            let task = await this.taskModel.find();
            return task;
        }catch(e){
            console.log(e);
        }
    };
    //lấy công việc theo mảng môn học
    async getTaskBySubject({subject}){
        try{
            let task = await this.taskModel.find({subject: subject});
            return task;
        }catch(e){
            console.log(e);
        }
    };
    //thêm công việc
    async addTask({subject,task}){
        try{
            let taskAdd = await this.taskModel.create({
                subject: subject,
                task: task
            });
            return taskAdd;
        }catch(e){
            console.log(e);
        }
    };
    //xóa công việc
    async deleteTask({_id}){
        try{
            let taskDelete = await this.taskModel.findByIdAndDelete({_id: _id});
            return taskDelete;
        }catch(e){
            console.log(e);
        }
    };
}
module.exports = new TaskController;