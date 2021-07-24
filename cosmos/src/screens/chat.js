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

    useEffect(() => {

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
          console.log(data);

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
      //alert(JSON.stringify(data));
      if( ( data.msg.from == user.id && data.msg.to == match.params.id ) || ( data.msg.from == match.params.id && data.msg.to == user.id ) ) {
        setChats([...chats , data.msg]);
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
            { chats ? (
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