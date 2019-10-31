import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

    tasks() {
      console.log("tasks in http.service");
      return this._http.get("/tasks");
    }

    getTasks(id) {
      return this._http.get('/tasks/' + id);
    }


    createTask(task) {
      return this._http.post('/tasks', task);
    }

    editTask(id,task) {
      return this._http.put('/tasks/'+id, task);
    }

    deleteTask(id) {
      return this._http.delete('/tasks/'+id);
    }
  
}
