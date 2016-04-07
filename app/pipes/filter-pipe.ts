import {Pipe} from "angular2/core";

@Pipe({
    name: "filter"    
})

export class FilterPipe{
transform(value,[status]){
        return value.filter((item)=> item.status === "started");
    }
}