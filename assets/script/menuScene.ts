
const {ccclass, property} = cc._decorator;

@ccclass
export default class menuScene extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    onBtnStart(){
        cc.director.loadScene('mapConfirmScene')
    }

    onBtnSet(){
        console.log('setting is on!')
    }

    onBtnQuit(){
        cc.game.end()
    }
    // update (dt) {}
}
