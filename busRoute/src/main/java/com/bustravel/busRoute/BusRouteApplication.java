package com.bustravel.busRoute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.data.web.config.EnableSpringDataWebSupport.PageSerializationMode;

@SpringBootApplication(scanBasePackages = "com.bustravel")
@EnableSpringDataWebSupport(pageSerializationMode = PageSerializationMode.VIA_DTO)
public class BusRouteApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusRouteApplication.class, args);
	}

}
