export function reducer(state = 0, action) {
    switch (action.type){
        case "CreatePeerConnection":
            action.target.ontrack = function (e) {
                console.log('获得应答方的视频流...', e.streams)
                document.getElementById("video").srcObject = e.streams[0]
            }
            action.target.onicecandidate = function (event) {

            }
            action.target.onsignalingstatechange = function (event) {

            }
            action.target.onconnectionstatechange = function (event) {

            }
            action.target.onicegatheringstatechange = function (event) {

            }
            action.target.oniceconnectionstatechange = function (event) {

            }
            action.target.onnegotiationneeded = function (event) {
                console.log('需要协商...')
            }
            return Object.assign({}, state)
            break;
        case "GetUserMedia":
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: true
            }).then(handleSuccess).catch(handleError)
        default:
            return state;
    }
}