/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.vito.backnew.dtointerface;

import javax.validation.constraints.NotBlank;

/**
 *
 * @author Usuario
 */

public class dtoHys {
    @NotBlank
    private String name;
    @NotBlank
    private int porcentaje;

    public dtoHys() {
    }

    public dtoHys(String name, int porcentaje) {
        this.name = name;
        this.porcentaje = porcentaje;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
    
}
