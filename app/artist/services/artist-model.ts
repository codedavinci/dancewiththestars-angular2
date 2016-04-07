export class ArtistModel{
    status:string = "started";
    
    
constructor(public name:string = "" ){}
      
    toggle():void{
        this.status =
        this.status == "started"
        ? "completed"
        : "started";
  }
}