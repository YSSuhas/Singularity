import React , { useState , useEffect } from 'react'
import Pusher from 'pusher-js'
import Navbars from '../components/navbar';
import './chat.css'
import axios from 'axios'
import Chats from '../components/chats';
import Typechat from '../components/typechat';

function Chat({ match }) {

    const [ chats , setChats ] = useState([]);

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const { REACT_APP_PUSHERApi , REACT_APP_PUSHERCluster , REACT_APP_PUSHERChannel } = process.env;

    var username , profilepic;

    useEffect(() => {
      
      document.title = "Chat > SINGULARITY"

      const seechats = async() => {
      
        try {
          
          const config = {
            headers: {
              Authorization : `${user.token}`
            }
          }

          const { data } = await axios.get(
            `/api/chats/${match.params.id}`,
            config
          )

          const { chatwith } = await axios.get(
            `/api/users/userid/${match.params.id}`,
            config
          )

          username = chatwith.username;
          profilepic = chatwith.profilepic;
          console.log(username + " " + profilepic);
          
          setChats(data.chat.chats);

        } catch (error) {
          alert('Error fetching chats');
        }

      }

      seechats();

    } , [])

    useEffect(() => {

    const pusher = new Pusher(`${REACT_APP_PUSHERApi}`, {
      cluster: `${REACT_APP_PUSHERCluster}`
    });

    var channel = pusher.subscribe(`${REACT_APP_PUSHERChannel}`);

    channel.bind('updated', function(data) {

      var from , to;
      
      if(chats.length==0) {
        from = data.msg[0].from;
        to = data.msg[0].to;
      }
      else {
        from = data.msg.from;
        to = data.msg.to;
      }

      if( ( from == user.id && to == match.params.id ) || ( from == match.params.id && to == user.id ) ) {
        if(chats.length!=0) {
          setChats([...chats , data.msg]);
        }
        else {
          setChats(data.msg);
        }
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

    } , [ chats ])

    return (
        <div className="chat">
            <Navbars />
            <div className="chatc">
              <div>
                <img src={profilepic}></img>
              </div>
            { chats.length!=0 ? (
              chats.map(chat => {

                return (
                  <div>
                    { chat.from==user.id ? <Chats chat={chat} /> : <Chats chat={chat} />
                    }
                  </div>
                )

              })
            ) : ( 
              <p>Start chatting!!!</p>
              )
            }
            </div>
            <Typechat match={match.params.id} className="chattc"/>
            
        </div>
    )
}

export default Chat