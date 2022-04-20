package com.frez.MinRent.Client;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientDataAccessService clientDataAccessService;
    @Autowired
    public ClientService(ClientDataAccessService clientDataAccessService) {
        this.clientDataAccessService = clientDataAccessService;
    }

    public List<Client> getAllClients(){
        return clientDataAccessService.selectAllClients();
    }
}
