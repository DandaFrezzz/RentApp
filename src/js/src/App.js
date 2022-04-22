import React, { useEffect, useState } from 'react';
import { getAllClients } from './client';
import { Table, Avatar, Spin, Icon, Modal } from 'antd';
import Conteiner from './Conteiner';
import Footer from './Footer';
import { LoadingOutlined } from '@ant-design/icons';
import AddClientForm from './AddClientForm'


const tableBottomMargin = {marginBottom: '1000px'};



function App() {
    const [list, setList] = useState([]);
    
    const [isToggled, setIsToggled] = React.useState(false);
    const toggle = React.useCallback(() => setIsToggled(!isToggled));
    useEffect(() => {
      let mounted = true;
      getAllClients()
        .then(items => {
          if(mounted) {
            setList(items)
          }
        })
      return () => mounted = false;
    }, [])
  
    const columns = [
        {
            title: '',
            key: 'avatar',
            render: (text, list) =>(
                <Avatar size='large'>
                    {`${list.firstName.charAt(0).toUpperCase()}${list.lastName.charAt(0).toUpperCase()}`}
                </Avatar>
            )
        },
     {
         title: 'ClientId',
         dataIndex: 'clientId',
         key: 'clientId',
     },
     {
        title: 'Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    }                                   
    ]
   
   

    return (  
    <Conteiner>
      <Table 
        style={{paddingBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
         size='large'
         dataSource={list} 
         pagination={false} 
         columns={columns} 
         rowKey='clientId'/>

         <Modal 
            title='Add new client' 
            visible={isToggled} 
            onCancel={toggle} 
            onOk={toggle} 
            width={1000}>

           <AddClientForm/>
         </Modal>

         <Footer numberOfClients={list.length} handleAddClientClickEvent={toggle}></Footer>        
    </Conteiner>
 
    )
  
  }
  
  export default App;