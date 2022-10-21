/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vito.backnew.repository;

import com.vito.backnew.entity.hys;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Usuario
 */
public interface Rhys extends JpaRepository<hys, Integer> {
    //mecionamos los metodos, no los creamos
    Optional<hys> findByNombre (String nombre);
    public boolean existsByNombre (String nombre);
}
