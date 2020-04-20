export interface Track {
    title: string;
    id: string;
    tasks: Task[];
  }
  
  export interface Task {
    parent:string;
    title: string;
    description: string;
    id: string;
  }

  export interface UserInt{
    title:string;
    id:string;
  }
  export interface View{
    title:string;
    id:string;
  }
  export interface Dump{
    title:string;
    id:string;
  }
