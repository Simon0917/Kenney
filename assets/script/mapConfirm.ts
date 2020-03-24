

const {ccclass, property} = cc._decorator;

@ccclass
export default class mapConfirm extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private mapState:number[] = [1,0,0,0,0,0]  //1-已解锁 0-暂未解锁
    private mapArr:cc.Node[] = []
    static selectIndex:number = 0

    start () {
        this.initMaps()
    }
    initMaps(){
        cc.loader.loadRes('prefab/mapGreen',cc.Prefab,(err,res1)=>{
            if(err){
                return;
            }
            for(let i=0;i<3;++i){
                let temp = cc.instantiate(res1)
                temp.x = 150*(i-1)
                temp.y = 50
                temp.name = 'map'+i
                temp.parent = this.node
                temp.on(cc.Node.EventType.TOUCH_START,this.onBtnMap,this)
                temp.getChildByName('open').active = this.mapState[i] == 1? true : false
                temp.getChildByName('lock').active = this.mapState[i] == 0? true : false
                this.mapArr.push(temp)
            }
            cc.loader.loadRes('prefab/mapRed',cc.Prefab,(err,res2)=>{
                if(err){
                    return;
                }
                for(let i=0;i<3;++i){
                    let temp = cc.instantiate(res2)
                    temp.x = 150*(i-1)
                    temp.y = -50
                    temp.name = 'map'+(i+3)
                    temp.parent = this.node
                    temp.on(cc.Node.EventType.TOUCH_START,this.onBtnMap,this)
                    temp.getChildByName('open').active = this.mapState[i+3] == 1? true : false
                    temp.getChildByName('lock').active = this.mapState[i+3] == 0? true : false
                    this.mapArr.push(temp)
                }
            })
        })
    }
    onBtnMap(event){
        let index:number = event.target.name.substring(3)
        if(this.checkMapOpen(index)){
            console.log('Enter map'+index)
            mapConfirm.selectIndex = index
            cc.director.loadScene('gameScene')
        }else{
            console.log('Please unlock previous map first!')
        }
    }

    checkMapOpen(index:number):boolean{
        return this.mapState[index] == 1
    }
    // update (dt) {}
}
