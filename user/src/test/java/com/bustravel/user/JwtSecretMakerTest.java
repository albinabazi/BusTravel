package com.bustravel.user;

import javax.crypto.SecretKey;

import org.junit.jupiter.api.Test;

import io.jsonwebtoken.Jwts;
import jakarta.xml.bind.DatatypeConverter;

public class JwtSecretMakerTest {
    
    @Test
    public void generateSecretKey() {
      SecretKey key =  Jwts.SIG.HS512.key().build();
      String encodedKey =  DatatypeConverter.printHexBinary(key.getEncoded());
      System.out.printf("\nKey = [%s]\n ", encodedKey);
    }
}
//2CF2C19D321C9207D3905E1E79C175D59B6F489AB6FEED4419D85884E36793197CAEAD471E1B9954C5FAC558F878F26A3C6A085B24DA9429108C541982486AD7