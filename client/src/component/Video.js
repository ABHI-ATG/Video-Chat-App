import {Peer} from 'peerjs';
import {useEffect, useRef, useState } from 'react'

export default function Video(){
    
    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    useEffect(()=>{
        const peer=new Peer({
            host: "0.peerjs.com",
            port: 443,
            path: "/",
            secure:false,
            pingInterval: 5000,
        });

        peer.on('open', (id) => {
            setPeerId(id)
        });
      
        peer.on('call', (call) => {
        var getUserMedia = navigator.getUserMedia 
        || navigator.webkitGetUserMedia 
        || navigator.mozGetUserMedia;
    
        getUserMedia({ video: true, audio: true }, (mediaStream) => {
            currentUserVideoRef.current.srcObject = mediaStream;
            currentUserVideoRef.current.play();
            call.answer(mediaStream)
            call.on('stream', function(remoteStream) {
                remoteVideoRef.current.srcObject = remoteStream
                remoteVideoRef.current.play();
                });
            });
        })

        peerInstance.current=peer;

        return ()=>{
            peer.disconnect();
        }

        
    },[])

    const call = async(remotePeerId) => {
        var getUserMedia = navigator.getUserMedia 
        || navigator.webkitGetUserMedia 
        || navigator.mozGetUserMedia;
    
        getUserMedia({ video: true, audio: true }, (mediaStream) => {
    
          currentUserVideoRef.current.srcObject = mediaStream;
          currentUserVideoRef.current.play();
    
          const call = peerInstance.current.call(remotePeerId, mediaStream)
    
          call.on('stream', (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream
            remoteVideoRef.current.play();
          });
        });
      }
    
    return (
        <>
            Video
            <div className="App">
            <h1>Current user id is {peerId}</h1>
            <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
            <button onClick={() => call(remotePeerIdValue)}>Call</button>
            <div>
                <video ref={currentUserVideoRef} />
            </div>
            <div>
                <video ref={remoteVideoRef} />
            </div>
            </div>
        </>
    )
}