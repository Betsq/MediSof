export class ServiceData 
{
    constructor(
        public title: string,
        public imgPath: string,
        public services: Service[]
    ){

    }
}

class Service {
    constructor(
        public name: string,
        public price: number
    ){

    }
}