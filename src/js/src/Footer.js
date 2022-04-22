import { Button, Avatar } from "antd";
import React from "react";
import Conteiner from "./Conteiner";
import './Footer.css';

const Footer = (props) => (

    <div className="footer">
        <Conteiner>
            {props.numberOfClients ? <Avatar style={{backgroundColor: '#f56a00', marginRight: '5px'}}size='large'>{props.numberOfClients}</Avatar> : null}
            <Button onClick={() => props.handleAddClientClickEvent()} type="primary" >Add new client +</Button>

        </Conteiner>

    </div>

)

export default Footer;