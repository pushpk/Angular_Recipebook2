let a = [1,2,3,4,5,6];

   Array.prototype.pushpakmap = function(logic) {
    let arr = [];
    for (let index = 0; index < this.length; index++) {
            const altered = logic(this[index]);
              arr.push(altered);      
      }

      return arr;
    };

    Array.prototype.pushpakfilter = function(logic) {
      let arr = [];
      for (let index = 0; index < this.length; index++) {
          if(logic(this[index])){
                 arr.push(this[index]);      
          }
        }
        return arr;
      };
   
      const gameData = [
        {
          title: 'Mega Man 2',
          bosses: [
            {
              name: 'Bubble Man',
              weapon: 'Bubble Beam'
            },
            {
              name: 'Metal Man',
              weapon: 'Metal Blade'
            }]
        },
        {
          title: 'Mega Man 3',
          bosses: [
            {
              name: 'Gemini Man',
              weapon: 'Gemini Laser'
            },
            {
              name: 'Top Man',
              weapon: 'Top Spin'
            }]
        }
      ];
Array.prototype.flatten = function(){
   let retVal = [];

   this.forEach(a => {
     retVal = retVal.concat(a);
   });

   return retVal;

}

    console.log(gameData.pushpakmap(s => { return s.bosses}).flatten());