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