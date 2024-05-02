import { flags } from "./flags.models"

export class joke{
    error: boolean
    category: string
    type: string
    joke:string
    setup: string
    delivery: string
    flags: flags
    safe: boolean
    id: number
    lang: string

    constructor(
        error: boolean,
    category: string,
    type: string,
    joke:string,
    setup: string,
    delivery: string,
    flags: flags,
    safe: boolean,
    id: number,
    lang: string
    ){
        this.error=error;
        this.category=category;
        this.type=type;
        this.joke='';
        this.setup="";
        this.delivery="";
        if (type='single'){
            this.joke=joke;
        }
        else{
            this.setup=setup;
            this.delivery=delivery;
        }
        this.flags=flags;
        this.safe=safe;
        this.id=id;
        this.lang=lang;
    }
    
  }