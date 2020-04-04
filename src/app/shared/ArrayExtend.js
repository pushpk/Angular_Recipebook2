let a = [1,2,3,4,5,6];

   Array.prototype.pushpakmap = function(logic) {

    let arr = [];
    for (let index = 0; index < this.length; index++) {
            const altered = logic(this[index]);

              arr.push(altered);      
      }

      return arr;
    };

   
    console.log(a.pushpakmap(s => s + 1));