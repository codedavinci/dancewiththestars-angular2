export class DancerModel{
    status:string = "started";
    
    
constructor(public name:string = "" ){}
      
    deleted():void{
        this.status =
        this.status == "started"
        ? "completed"
        : "started";
  }
}