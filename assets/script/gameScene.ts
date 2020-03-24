import mapConfirm from "./mapConfirm"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private mapIndex:number = -1
    start () {
        this.getMapIndex()
        this.initScene()
    }
    getMapIndex(){
        this.mapIndex = mapConfirm.selectIndex
    }
    initScene(){
        if(this.mapIndex != -1){
            cc.loader.loadRes('prefab/Prefab_map'+this.mapIndex,cc.Prefab,(err,res)=>{
                if(err){
                    return
                }
                let mapNode:cc.Node = cc.instantiate(res)
                mapNode.parent = this.node
            })
        }
    }
    // update (dt) {}
}
