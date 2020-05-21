class HashTable {
  constructor(size){
    this.data = new Array(size);

  }

  _hash(key) {
 
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
   
  }

set(key,value){
  let address = this._hash(key); 
 
  if(!this.data[address]){
  this.data[address]=[];
}
  this.data[address].push([key,value]);
  return this.data;

  }

  get(key){
    const address=this._hash(key);
    let currenBucket=this.data[address];
    //console.log(currenBucket);
    if(currenBucket){

      for(let i=0;i<currenBucket.length;i++){
        if(currenBucket[i][0]===key){
          return currenBucket[i][1];
        }
      }
    }
      return undefined;

  }

  keys(){
    const keyArray=[];
    for(let i=0; i < this.data.length;i++){

      if(this.data[i]){
      
        keyArray.push(this.data[i][0][0])
        //console.log(this.data[i][0]);

      }
    }
    return keyArray;
  }

}
 const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000)
//myHashTable.get('grapes')
myHashTable.set('apples', 9);
myHashTable.set('oranges', 5)
//myHashTable.get('apples')
myHashTable.keys();