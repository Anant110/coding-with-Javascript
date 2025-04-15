var obj_details={
    getdet:function details(color,religion){
        console.log(this.name,"Details:",color ,religion);
    }
}

var det={name:"Anant"};

var all_details=obj_details.getdet.bind(det,"Black,","Hinduism");
all_details();