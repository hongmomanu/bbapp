import * as b from 'bobril';

export interface IButtonData {
    counter: number;
    space:number;
}

interface IContext extends b.IBobrilCtx {
    data:IButtonData;
}

export const Counter = b.createComponent<IButtonData>({
    init(ctx: IContext) {
        //ctx.counter = 0;
        setInterval(() => {
            ctx.data.counter++;
            b.invalidate(ctx);
        }, ctx.data.space);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        console.log("count create render");
        me.children = ctx.data.counter;
        b.style(me, {fontSize: 25});
    }
});