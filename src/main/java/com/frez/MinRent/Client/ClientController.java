package com.frez.MinRent.Client;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("clients")
public class ClientController {
    @GetMapping
    public List<Client> getAllClients(){
        return List.of(
                new Client(UUID.randomUUID(), "Jan", "Pawel", "Pawel2137@holy.god", Client.Gender.MALE),
                new Client(UUID.randomUUID(), "Plavimir", "Vutin", "VutinKGB@iksde.uk", Client.Gender.MALE)
        );
    }

}
