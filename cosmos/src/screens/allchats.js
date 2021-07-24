import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbars from '../components/navbar'
import './allchats.css'

function Allchats() {

    const user = JSON.parse(localStorage.getItem('userInfo'));

    const [ userchats , setUserchats ] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {

        const seeuserchats = async() => {

            try {
                
                const config = {
                    headers: {
                        Authorization: `${user.token}`
                    }
                }
        
                const { data } = await axios.get(
                    `/api/users/${user.username}/chats`,
                    config
                )
                
                setUserchats(data);

            } catch (error) {
                
                alert('An error occured');

            }

        }

        seeuserchats();

    })

    useEffect(() => {

        const pusher = new Pusher(`${REACT_APP_PUSHERApi}`, {
            cluster: `${REACT_APP_PUSHERCluster}`
          });
      
          var channel = pusher.subscribe(`${REACT_APP_PUSHERChannel}`);
          channel.bind('updated', function(data) {
            //alert(JSON.stringify(data));

          });
      
          return () => {
            channel.unbind_all();
            channel.unsubscribe();
          };

    })

    return (
        <div className="allchats">
            <Navbars />
            <div>
            { 
            }
            </div>
        </div>
    )
}

export default Allchats