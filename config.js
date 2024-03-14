module.exports = {
    // base:'./',
    title: 'JessibucaPro Doc',
    description: '一款纯H5直播流播放器',
    themeConfig: {
        docsBranch: "v2",
        sidebar: "auto",
        nav: [
            {text: 'API', link: '/api.html'},
            {
                text: '更多API',
                items: [
                    {text: 'playback-API', link: '/playback-api.html'},
                    {text: 'audio-API', link: '/audio-api.html'},
                    {text: 'multi-API', link: '/multi-api.html'},
                    {text: 'talk-API', link: '/talk-api.html'},
                    {text: 'ai-API', link: '/ai-api.html'},
                ]
            },
            {
              text: '业务方案',
              items: [
                  {text: '音视频播放器', link: '/doc.html'},
                  {text: '回放流/录像流', link: '/doc-playback.html'},
                  {text: '音频播放器', link: '/doc-audio.html'},
                  {text: '语音通讯', link: '/doc-talk.html'},
              ]
            },
            {
                text: '问题解答',
                items: [
                    {text: '音视频播放器', link: '/question.html'},
                    {text: '回放流/录像流', link: '/question-playback.html'},
                    {text: '音频播放器', link: '/question-audio.html'},
                    {text: '语音通讯', link: '/question-talk.html'},
                ]
            },
            {text: '升级', link: '/upgrade.html'},
            {text: '项目打包', link: '/build.html'},
            {text: '更新日志', link: '/changelog.html'},

        ]
    },
}
