Page({
    data:{
        items:[
            {name:'pixiv_ID', value:'忘记了pixiv ID', checked:'true'},
            {name:'password', value:'忘记了密码'}
        ]
    },
    radioChange:function(e){
        console.log('radio发生了change事件')
    }
})