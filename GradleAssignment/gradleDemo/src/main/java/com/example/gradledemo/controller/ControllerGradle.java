package com.example.gradledemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerGradle {
    @GetMapping("/")
    String demo(){
        return  "HelloWorld";
    }
}
