class SoundPlayer{
  constructor(source){
    this.source = source;
    this.context = new AudioContext();
    this.request = new XMLHttpRequest();
    this.bufferSource = this.context.createBufferSource();
    this.bufferSource.connect(this.context.destination);
  }
  load(){
    console.log(this);
    const that = this;
    this.context.decodeAudioData(this.request.response, function(buffer) {
      that.decode(buffer);
    });
  }
  decode(buffer){
    this.bufferSource.buffer = buffer;
    this.bufferSource.start();

  }
  play(){
    this.request.open('GET', this.source, true);
    this.request.responseType = 'arraybuffer';
    const that = this;
    this.request.onload = function(){
      that.load();
    }
    this.request.send();
  }
}

class DelayedSoundPlayer extends SoundPlayer{
  constructor(source){
    super(source);
  }
  delaySound(sec){
    //const delayNode = new DelayNode(this.context);
    const delayNode = this.context.createDelay(sec);
    delayNode.delayTime.value=sec;
    this.bufferSource.disconnect(this.context.destination);
    this.bufferSource.connect(delayNode);
    delayNode.connect(this.context.destination);

  }
}
