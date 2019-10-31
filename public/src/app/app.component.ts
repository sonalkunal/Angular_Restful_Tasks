import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  newTask: any;
  editTask: any;
  taskId: String;
  tasks_all;
  task: any;

constructor(private _httpService: HttpService) {}


ngOnInit() {
// this.getTasksFromService()
this.newTask = { title: '', description: '' };
this.editTask = {_id:'', title: '', description: '' };
this.taskId = "";
//this.tasks();
}

tasks(){
  console.log("tasks in componrny");
  let obs = this._httpService.tasks();
  obs.subscribe(data => {
    console.log("//Loading all tasks//", data["data"]);
    this.tasks_all = data["data"];;
    
  });
}

getTasks (id){
  let obs = this._httpService.getTasks (id);
  obs.subscribe (data => {
    console.log("//Loading all tasks//", data);
    this.task = data["data"];
    console.log(this.task);
    
  });
  // this.taskId = "";
}

// onNewTaskKey(event: any) {
//   this.taskId = event.target.value;
// }


onCreateTask() {
  let obs = this._httpService.createTask(this.newTask);
  obs.subscribe (data => {
    console.log("task created", data);
    // this.getTasksFromService();
    // this.tasks.push(data);
  
  });
  this.newTask = { title: "", description: ""}

}
onEditTask(id, title, description) {
  console.log("id",id);
  console.log("title",title);
  console.log("description",description);
  this.editTask._id = id;
  this.editTask.title = title; 
  this.editTask.description =  description;
}

onEditTaskSubmit(){
  console.log("this.editTask",this.editTask);
  let obs = this._httpService.editTask(this.editTask._id, this.editTask);
  obs.subscribe(data => {
    console.log("task edited", data);
    this.tasks();

  })
this.editTask = { _id: "", title: "", description: "" };
}

deleteTask(id) {
  let obs = this._httpService.deleteTask(id);
  obs.subscribe(data => {
    console.log("Task deleted", data);
    this.tasks();
  })
}



}