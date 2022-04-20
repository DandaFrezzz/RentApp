import React, { useEffect, useState } from 'react';
import { getAllClients } from './client';
import { Table, Avatar, Spin, Icon } from 'antd';
import Conteiner from './Conteiner';
import { LoadingOutlined } from '@ant-design/icons';


const getIndicatorIcon = () => <LoadingOutlined style={{ fontSize: 24 }} spin />;

function App() {
    const [list, setList] = useState([]);

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
         <Table dataSource={list} pagination={false} columns={columns} rowKey='clientId'/>
    </Conteiner>
   
    )
  
  }
  
  export default App;