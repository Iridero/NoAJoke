export class flags {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
    constructor(
        nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
    ){
        this.nsfw=nsfw;
        this.religious=religious;
        this.political=political;
        this.racist=racist;
        this.sexist=sexist;
        this.explicit=explicit
    }
  }