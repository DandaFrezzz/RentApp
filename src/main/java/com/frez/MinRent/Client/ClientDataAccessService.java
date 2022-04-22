package com.frez.MinRent.Client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public class ClientDataAccessService {


    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ClientDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Client> selectAllClients(){
        String sql = "" +
                "SELECT client_id, " + "first_name, " + "last_name, " + "email, " + "gender " + "FROM " + "client";
        return jdbcTemplate.query(sql, mapClientsFromDB());
    }
     int insertClient(UUID clientId, Client client) {

        String sql = "" +
                "INSERT INTO client(client_id, first_name, last_name, email, gender)" +
                " VALUES(?, ?, ?, ?, ?)";
         return jdbcTemplate.update(sql, clientId, client.getFirstName(), client.getLastName(), client.getEmail(), client.getGender().name().toUpperCase());


    }

    private RowMapper<Client> mapClientsFromDB() {
        return (resultSet, i) -> {
            String clientIdStr = resultSet.getString("client_id");
            UUID clientId = UUID.fromString(clientIdStr);

            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");
            String genderStr = resultSet.getString("gender").toUpperCase();
            Client.Gender gender = Client.Gender.valueOf(genderStr);
            return new Client(clientId, firstName, lastName, email, gender);
        };
    }


}
