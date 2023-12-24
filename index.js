var app=new Vue({
    el:"#music",
    data:{
        query:"",
        musicList:[],
        musicUrl:"",
        Comments:[],
        artists:"",
        pic:"",
        // mv:"",
        lrc:""
    },
    methods:{
        searchMusic:function(){
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords="+this.query)
            .then(function(response){
                // console.log(response);
                that.musicList = response.data.result.songs;
                // console.log(response.data.result.songs)
            },function(err){})
        },
        playMusic:function(musicId){
            // console.log(musicId);
            var that=this
            axios.get("http://cloud-music.pl-fe.cn/song/url?id="+musicId)
            .then(function(response){
                // console.log(response);
                // console.log(response.data.data);
                that.musicUrl=response.data.data[0].url;
                // that.artists=response.data.data
            },function(err){})
            axios.get("http://cloud-music.pl-fe.cn/comment/music?id="+musicId)
            .then(function(response){
                // console.log(response);
                // console.log(response.data.hotComments)
                that.Comments = response.data.hotComments;
            },function(err){})
            axios.get("http://cloud-music.pl-fe.cn/song/detail?ids="+musicId)
            .then(function(response){
                // console.log(response);
                // console.log(response.data.songs[0].al)
                that.pic=response.data.songs[0].al.picUrl;
                // that.artists=response.data.songs[0].ar[0].name;
            },function(err){})
            // mv
            axios.get("http://cloud-music.pl-fe.cn/mv/url?id="+musicId)
            .then(function(response){
                // console.log(response)
                console.log(response.data.data);
                // that.mv=response.data.url;
            },function(err){})
            axios.get("http://cloud-music.pl-fe.cn/lyric?id="+musicId)
            .then(function(response){
                console.log(response.data.lrc.lyric);
                that.lrc=response.data.lrc.lyric;
            },function(err){})
        },
        
    }
})