import mapConfirm from "./mapConfirm"
import mapControll from "./mapControll"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property([cc.TiledMapAsset])
    // map: cc.TiledMapAsset[] = [];

    // @property(cc.Prefab)
    // block: cc.Prefab = null

    // @property(cc.Prefab)
    // door: cc.Prefab = null

    // @property(cc.Prefab)
    // key: cc.Prefab = null

    // @property(cc.Prefab)
    // monster: cc.Prefab = null

    // @property(cc.Prefab)
    // lock: cc.Prefab = null
    // // LIFE-CYCLE CALLBACKS:

    // // onLoad () {}
    // private mapIndex:number = -1
    // start () {
    //     this.getMapIndex()
    //     this.initScene()
    // }
    // getMapIndex(){
    //     this.mapIndex = mapConfirm.selectIndex
    // }
    // initScene(){
    //     this.initMap()
    //     this.initPlayer()
    // }

    // initMap(){
    //     if(this.mapIndex != -1){
    //         this.node.getChildByName('mapNode').getComponent(cc.TiledMap).tmxAsset = this.map[this.mapIndex]
    //         let tm = this.node.getChildByName('mapNode').getComponent(cc.TiledMap)
    //         let objBlock = tm.getObjectGroup('block').getObjects()
    //         let objKey = tm.getObjectGroup('lock').getObjects()
    //         let objDoor = tm.getObjectGroup('key').getObjects()
    //         let objLock = tm.getObjectGroup('door').getObjects()
    //         let objMonster = tm.getObjectGroup('monster').getObjects()
    //         let temp:mapControll = new mapControll
    //         let objArr:any[] = [objBlock,objKey,objDoor,objLock,objMonster]
    //         let preArr:cc.Prefab[] = [this.block,this.key,this.door,this.lock,this.monster]
    //         for(let v of objArr){
    //             for(let i=0;i<v.length;i++){
    //                 let pos:cc.Vec2 = (v[i].x,v[i].y)
    //                 let tiledPos:cc.Vec2 = temp.convertPosToTiled(pos)
    //                 let finalPos:cc.Vec2 = temp.convertTiledToPos(tiledPos)
    //                 let item = cc.instantiate(preArr[i])
    //                 item.parent = this.node.getChildByName('mapNode')
    //                 item.x = finalPos.x
    //                 item.y = finalPos.y
    //             }
    //         }
    //     }
    // }

    // initPlayer(){

    // }
    // update (dt) {}
}
