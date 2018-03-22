import * as b from 'bobril';
import * as anime from 'animejs'


export interface IButtonData {
    title: string;
    counter: number;
    onClick?: (ctx:IButtonCtx) => void;
}

export interface IButtonCtx extends b.IBobrilCtx {
    data: IButtonData;
}
function animalX (elm:HTMLElement){
    anime({
        targets: elm,
        translateX: 250,
        duration:200,
        easing: 'easeInOutQuad'
      });
}

export const button = b.createComponent<IButtonData>({

    postInitDom(ctx: IButtonCtx, me:b.IBobrilCacheNode, elm:HTMLElement){
        console.log('button node 121',elm);
        animalX(elm);
    },
    render(ctx: IButtonCtx, me: b.IBobrilNode) {
        me.tag = 'button';
        me.children = `${ctx.data.title}:${ctx.data.counter}`;
    },
    onClick(ctx: IButtonCtx): boolean {
        if (ctx.data.onClick) {
            ctx.data.onClick(ctx);
        }

        return true;
    }
});

export default button;
