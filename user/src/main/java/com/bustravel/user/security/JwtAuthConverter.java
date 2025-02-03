package com.bustravel.user.security;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.stereotype.Component;

import com.bustravel.user.UserEntity;
import com.bustravel.user.UserService;
import com.bustravel.user.utilities.UserContext;
import com.bustravel.user.utilities.UserContextHolder;
import com.nimbusds.oauth2.sdk.util.CollectionUtils;

@Component
public class JwtAuthConverter  implements Converter<Jwt, AbstractAuthenticationToken>{

    private final JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter;

    private final UserService userService;

    public JwtAuthConverter(UserService userService) {
        this.jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
        this.userService = userService;
    }

    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {

        final Set<GrantedAuthority> authorities = Stream.concat(
            jwtGrantedAuthoritiesConverter.convert(jwt).stream(),
            extractUserRoles(jwt).stream()
        ).collect(Collectors.toSet());

        this.extractUserDetails(jwt);

        return new JwtAuthenticationToken(jwt, authorities);
    }

    private Set<? extends GrantedAuthority> extractUserRoles(Jwt jwt) {
        
        final Map<String, Object> resourceAccess = jwt.getClaim("resource_access");

        @SuppressWarnings("unchecked")
        final Map<String, List<String>> busTravelAccess =(Map<String, List<String>>) resourceAccess.get("bustravel");
        final List<String> realmRoles = (List<String>) busTravelAccess.get("roles");

        if(CollectionUtils.isNotEmpty(realmRoles)) {

            return realmRoles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.toUpperCase()))
                .collect(Collectors.toSet());
        }
        return Collections.emptySet();
    }

    private void extractUserDetails (Jwt jwt) {
        
        final String email = jwt.getClaim("email");
        UserEntity userEntity = userService.findByEmail(email);

        UserContext userContext = UserContextHolder.getContext();
        userContext.setUserEmail(email);
        userContext.setUserId(userEntity.getId());
        userContext.setAuthToken(jwt.toString());
    }
}
