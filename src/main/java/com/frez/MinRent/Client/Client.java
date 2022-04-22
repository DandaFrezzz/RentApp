package com.frez.MinRent.Client;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Client {
    private final UUID clientId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;
    enum Gender {
        MALE, FEMALE
    }

    public Client(@JsonProperty("clientId") UUID clientId,
                  @JsonProperty("firstName") String firstName,
                  @JsonProperty("lastName") String lastName,
                  @JsonProperty("email") String email,
                  @JsonProperty("gender") Gender gender) {
        this.clientId = clientId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getClientId() {
        return clientId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Client{" +
                "clientId=" + clientId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
    }
}
