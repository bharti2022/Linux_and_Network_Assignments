package com.example.springboot.demo.springbootdemoapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerMaven {
    @GetMapping("/")
    String demo(){
        return  "HelloWorld";
    }
}
