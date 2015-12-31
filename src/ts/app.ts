/// <reference path="../../typings/tsd.d.ts" />

namespace module1 {
  export class foo{
    constructor(private element:JQuery){
    }
    public color(color:string){
      this.element.css('color',color);
    }
  }

  $(function(){
    var foo = new module1.foo($('div'));
    foo.color('blue');
  });
}
