
import mapConfirm from "./mapConfirm"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.TiledMapAsset])
    map: cc.TiledMapAsset[] = [];

    @property(cc.Prefab)
    block: cc.Prefab = null

    @property(cc.Prefab)
    door: cc.Prefab = null

    @property(cc.Prefab)
    key: cc.Prefab = null

    @property(cc.Prefab)
    monster: cc.Prefab = null

    @property(cc.Prefab)
    lock: cc.Prefab = null

    @property(cc.Prefab)
    player: cc.Prefab = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    private tiledSize:cc.Size = null
    private mapSize:cc.Size = null
    private mapIndex:number = -1
    start () {
        this.getMapIndex()
        this.initScene()
    }
    getMapIndex(){
        this.mapIndex = mapConfirm.selectIndex
    }

    initScene(){
        this.initMap()
    }

    initMap(){
        if(this.mapIndex != -1){
            this.node.getComponent(cc.TiledMap).tmxAsset = this.map[this.mapIndex]
            this.tiledSize = this.node.getComponent(cc.TiledMap).getTileSize()
            this.mapSize = this.node.getComponent(cc.TiledMap).getMapSize()
            let tm = this.node.getComponent(cc.TiledMap)
            let objBlock = tm.getObjectGroup('block').getObjects()
            let objKey = tm.getObjectGroup('key').getObjects()
            let objDoor = tm.getObjectGroup('door').getObjects()
            let objLock = tm.getObjectGroup('lock').getObjects()
            let objMonster = tm.getObjectGroup('monster').getObjects()
            let player = tm.getObjectGroup('player').getObjects()
            let objArr:any[] = [objBlock,objKey,objDoor,objLock,objMonster,player]
            let preArr:cc.Prefab[] = [this.block,this.key,this.door,this.lock,this.monster,this.player]
            for(let j=0;j<objArr.length;j++){
                for(let i=0;i<objArr[j].length;i++){
                    let pos:cc.Vec2 = cc.v2(objArr[j][i].x,objArr[j][i].y)
                    let tiledPos:cc.Vec2 = this.convertPosToTiled(pos)
                    let finalPos:cc.Vec2 = this.convertTiledToPos(tiledPos)
                    let item = cc.instantiate(preArr[j])
                    item.parent = this.node
                    item.x = finalPos.x
                    item.y = finalPos.y
                }
            }

        }
    }

    //世界坐标转格子
    convertPosToTiled(Pos:cc.Vec2){
        let tiledX = Math.floor(Pos.x/this.tiledSize.width);
        let tiledY =this.mapSize.height -  Math.floor(Pos.y/this.tiledSize.height) -1;
        return cc.v2(tiledX,tiledY);
    }

    //格子坐标转中心坐标
    convertTiledToPos(tiledPos){
        let x = tiledPos.x*this.tiledSize.width + this.tiledSize.width/2;
        let y = (this.mapSize.height - tiledPos.y -1)*this.tiledSize.height + this.tiledSize.height/2;
        return cc.v2(x,y);
    }
    // update (dt) {}
}
