
import * as b from 'bobril';
import { Counter } from './counter';
import { button, IButtonCtx } from './button';
let counter = 0;

b.init(() => {
    //b.invalidate();
    return [
        Counter({counter:1,space:10}),
        Counter({counter:5,space:50}),
        button({counter, title: `test!`, onClick: (ctx:IButtonCtx) =>  {ctx.data.counter++;b.invalidate(ctx)}}),
        
    ]
});