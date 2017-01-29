class Picture{
  constructor(source="", target=document.body){
    this._source = source;
    this.target = target;
  }
  getInfo(){
    console.log(`
      source er: ${this._source}
      og target er: ${this.target}
    `);
  }
  set source(newValue){
    this._source = newValue;
  }
  get imageSize(){
    const img = document.createElement("img");
    img.src=this._source;
    console.log(img.width);
    return {width: img.width + "px", height: img.height +"px"};
  }
}

class ImgPicture extends Picture{
  constructor(source, target){
    super(source, target);
    this.mynd = document.createElement("img");
    this.mynd.src= this._source;
    this.target.append(this.mynd);
  }
  set source(newValue){
    super.source = newValue;
    this.mynd.src = newValue;
  }
}

class DivPicture extends Picture{
  constructor(source, target){
    super(source, target);
    this.mynd = document.createElement("div");
    this.mynd.style.display = "inline-block";
    this.mynd.style.width = this.imageSize.width; //"1000px"
    this.mynd.style.height = this.imageSize.height;
    this.mynd.style.backgroundImage = `url(${source})`;
    this.target.append(this.mynd);
  }
  set source(newValue){
    super.source = newValue;
    this.mynd.style.backgroundImage = `url(${newValue})`;
  }
}
