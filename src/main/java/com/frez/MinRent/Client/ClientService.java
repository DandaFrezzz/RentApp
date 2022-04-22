package com.frez.MinRent.Client;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ClientService {

    private final ClientDataAccessService clientDataAccessService;
    @Autowired
    public ClientService(ClientDataAccessService clientDataAccessService) {
        this.clientDataAccessService = clientDataAccessService;
    }

     List<Client> getAllClients(){
        return clientDataAccessService.selectAllClients();
    }
    void addNewClient(Client client) {
       addNewClient(null, client);
    }
     void addNewClient(UUID clientId, Client client) {
         UUID newClientId = Optional.ofNullable(clientId).orElse(UUID.randomUUID());

         //todo veryfy that email is not taken


         clientDataAccessService.insertClient(newClientId, client);
    }
}
