/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.vito.backnew.repository;

import com.vito.backnew.entity.Proyecto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Usuario
 */
@Repository
public interface RProyecto extends JpaRepository<Proyecto, Integer> {
   //mecionamos los metodos, no los creamos
    Optional<Proyecto> findByNombreP (String nombre);
    public boolean existsByNombreP (String nombre);
}
